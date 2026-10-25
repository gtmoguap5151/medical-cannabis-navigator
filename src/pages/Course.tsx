import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Map as MapIcon, Award, GraduationCap, RotateCcw, CheckCircle2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { CheckoutButton } from '@/components/CheckoutButton';
import { useProgress } from '@/lib/progress';
import { modules, PASS_THRESHOLD } from '@/data/course';

export default function Course() {
  const { overallProgress, lessonsCompletedCount, allModulesPassed, moduleProgress, isModulePassed, state, resetProgress } = useProgress();

  const firstIncomplete = modules.find((m) => !isModulePassed(m.id)) ?? modules[0];
  const continueModuleId = firstIncomplete.id;

  return (
    <>
      <Seo
        title="Course Dashboard"
        description="Track your progress through the 10-module Leaf Compass educational course — lessons, quizzes, and your completion certificate."
        path="/course"
      />

      <section className="border-b border-ink-100 bg-gradient-to-b from-forest-50 to-sand-50">
        <div className="container-page py-10 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-forest-600">Course Dashboard</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Your learning journey
          </h1>
          <p className="mt-3 max-w-2xl text-ink-600">
            Work through all 10 modules at your own pace. Your progress is saved automatically on this device.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Overall Progress</p>
              <p className="mt-2 font-display text-3xl font-semibold text-ink-900">{overallProgress}%</p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink-100">
                <div className="h-full rounded-full bg-forest-600 transition-all duration-500" style={{ width: `${overallProgress}%` }} />
              </div>
            </div>
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Lessons Completed</p>
              <p className="mt-2 font-display text-3xl font-semibold text-ink-900">{lessonsCompletedCount}</p>
              <p className="mt-2 text-sm text-ink-500">across all modules</p>
            </div>
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Certificate Status</p>
              {allModulesPassed ? (
                <div className="mt-2 flex items-center gap-2">
                  <CheckCircle2 className="h-7 w-7 text-forest-600" />
                  <span className="font-display text-lg font-semibold text-forest-700">Ready</span>
                </div>
              ) : (
                <p className="mt-2 font-display text-lg font-semibold text-ink-700">Locked</p>
              )}
              <p className="mt-2 text-sm text-ink-500">
                {allModulesPassed ? 'Your certificate is ready to claim.' : 'Pass all modules to unlock.'}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to={`/course/${continueModuleId}`} className="btn-primary">
              Continue Course <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/state-navigator" className="btn-secondary">
              <Compass className="h-4 w-4" /> State Navigator
            </Link>
            <Link to="/roadmap" className="btn-secondary">
              <MapIcon className="h-4 w-4" /> Personal Roadmap
            </Link>
            {allModulesPassed && (
              <Link to="/certificate" className="btn-secondary">
                <Award className="h-4 w-4" /> View Certificate
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <h2 className="font-display text-2xl font-semibold text-ink-900">All 10 modules</h2>
        <p className="mt-2 text-ink-600">Each module includes lessons and a knowledge check. Pass all modules to unlock your certificate.</p>

        <div className="mt-8 space-y-4">
          {modules.map((m) => {
            const progress = moduleProgress(m.id);
            const passed = isModulePassed(m.id);
            return (
              <Link
                key={m.id}
                to={`/course/${m.id}`}
                className="card group block p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-700 transition-colors group-hover:bg-forest-600 group-hover:text-white">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-forest-500">Module {m.number}</span>
                      {passed && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-forest-100 px-2 py-0.5 text-xs font-medium text-forest-700">
                          <CheckCircle2 className="h-3 w-3" /> Passed
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1 font-display text-lg font-semibold text-ink-900">{m.title}</h3>
                    <p className="mt-1 text-sm text-ink-500">{m.subtitle}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-100">
                        <div className="h-full rounded-full bg-forest-500 transition-all duration-500" style={{ width: `${progress}%` }} />
                      </div>
                      <span className="text-xs font-medium text-ink-500">{progress}%</span>
                    </div>
                    <p className="mt-2 text-xs text-ink-400">{m.lessons.length} lessons · {m.quiz.length} questions</p>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-ink-300 transition-colors group-hover:text-forest-600" />
                </div>
              </Link>
            );
          })}
        </div>

        {!state.enrolled && (
          <div className="mt-10 rounded-2xl border border-forest-200 bg-forest-50 p-6 text-center">
            <GraduationCap className="mx-auto h-8 w-8 text-forest-600" />
            <h3 className="mt-3 font-display text-xl font-semibold text-ink-900">Ready to start?</h3>
            <p className="mt-2 text-sm text-ink-600">Explore is free. To save progress and earn your certificate, start the $49 course.</p>
            <div className="mt-5 flex justify-center">
              <CheckoutButton />
            </div>
          </div>
        )}

        {state.enrolled && (
          <div className="mt-10 flex items-center justify-center">
            <button
              type="button"
              onClick={() => {
                if (confirm('Reset all course progress? This cannot be undone.')) {
                  resetProgress();
                }
              }}
              className="inline-flex items-center gap-1.5 text-sm text-ink-400 hover:text-ink-600"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset progress
            </button>
          </div>
        )}
      </section>
    </>
  );
}
