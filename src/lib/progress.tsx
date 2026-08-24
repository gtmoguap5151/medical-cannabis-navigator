import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { modules, PASS_THRESHOLD, totalLessons } from '@/data/course';

const STORAGE_KEY = 'mcn-progress-v1';

interface ProgressState {
  enrolled: boolean;
  completedLessons: string[];
  quizScores: Record<string, number>;
  certificateName: string | null;
  completedAt: string | null;
}

const emptyState: ProgressState = {
  enrolled: false,
  completedLessons: [],
  quizScores: {},
  certificateName: null,
  completedAt: null,
};

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return { ...emptyState, ...parsed };
  } catch {
    return emptyState;
  }
}

interface ProgressContextValue {
  state: ProgressState;
  enroll: () => void;
  lessonKey: (moduleId: string, lessonId: string) => string;
  isLessonComplete: (moduleId: string, lessonId: string) => boolean;
  completeLesson: (moduleId: string, lessonId: string) => void;
  recordQuiz: (moduleId: string, score: number) => void;
  isModulePassed: (moduleId: string) => boolean;
  moduleProgress: (moduleId: string) => number;
  overallProgress: number;
  lessonsCompletedCount: number;
  allModulesPassed: boolean;
  setCertificateName: (name: string) => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // storage may be unavailable; progress simply will not persist
    }
  }, [state]);

  const lessonKey = useCallback((moduleId: string, lessonId: string) => `${moduleId}:${lessonId}`, []);

  const enroll = useCallback(() => setState((s) => (s.enrolled ? s : { ...s, enrolled: true })), []);

  const isLessonComplete = useCallback(
    (moduleId: string, lessonId: string) => state.completedLessons.includes(`${moduleId}:${lessonId}`),
    [state.completedLessons],
  );

  const completeLesson = useCallback((moduleId: string, lessonId: string) => {
    const key = `${moduleId}:${lessonId}`;
    setState((s) =>
      s.completedLessons.includes(key)
        ? s
        : { ...s, enrolled: true, completedLessons: [...s.completedLessons, key] },
    );
  }, []);

  const recordQuiz = useCallback((moduleId: string, score: number) => {
    setState((s) => {
      const best = Math.max(s.quizScores[moduleId] ?? 0, score);
      return { ...s, enrolled: true, quizScores: { ...s.quizScores, [moduleId]: best } };
    });
  }, []);

  const isModulePassed = useCallback(
    (moduleId: string) => (state.quizScores[moduleId] ?? 0) >= PASS_THRESHOLD,
    [state.quizScores],
  );

  const moduleProgress = useCallback(
    (moduleId: string) => {
      const mod = modules.find((m) => m.id === moduleId);
      if (!mod) return 0;
      const steps = mod.lessons.length + 1; // lessons + quiz
      const done =
        mod.lessons.filter((l) => state.completedLessons.includes(`${moduleId}:${l.id}`)).length +
        ((state.quizScores[moduleId] ?? 0) >= PASS_THRESHOLD ? 1 : 0);
      return Math.round((done / steps) * 100);
    },
    [state.completedLessons, state.quizScores],
  );

  const lessonsCompletedCount = state.completedLessons.length;

  const overallProgress = useMemo(() => {
    const totalSteps = totalLessons + modules.length;
    const quizzesPassed = modules.filter((m) => (state.quizScores[m.id] ?? 0) >= PASS_THRESHOLD).length;
    const done = state.completedLessons.length + quizzesPassed;
    return Math.round((done / totalSteps) * 100);
  }, [state.completedLessons, state.quizScores]);

  const allModulesPassed = useMemo(
    () => modules.every((m) => (state.quizScores[m.id] ?? 0) >= PASS_THRESHOLD),
    [state.quizScores],
  );

  const setCertificateName = useCallback((name: string) => {
    setState((s) => ({
      ...s,
      certificateName: name,
      completedAt: s.completedAt ?? new Date().toISOString(),
    }));
  }, []);

  const resetProgress = useCallback(() => setState(emptyState), []);

  const value: ProgressContextValue = {
    state,
    enroll,
    lessonKey,
    isLessonComplete,
    completeLesson,
    recordQuiz,
    isModulePassed,
    moduleProgress,
    overallProgress,
    lessonsCompletedCount,
    allModulesPassed,
    setCertificateName,
    resetProgress,
  };

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
