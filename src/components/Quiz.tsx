import { useMemo, useState } from 'react';
import { Check, X, RotateCcw, Award } from 'lucide-react';
import type { QuizQuestion } from '@/data/course';
import { PASS_THRESHOLD } from '@/data/course';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  title?: string;
}

export function Quiz({ questions, onComplete, title = 'Knowledge check' }: QuizProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    const correct = questions.filter((q) => answers[q.id] === q.correctIndex).length;
    return correct / questions.length;
  }, [answers, questions]);

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);
  const passed = score >= PASS_THRESHOLD;

  function select(qid: string, idx: number) {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [qid]: idx }));
  }

  function submit() {
    setSubmitted(true);
    onComplete(score);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  function retake() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className="card p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
          <Award className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-ink-900">{title}</h3>
          <p className="text-sm text-ink-500">
            Answer at least {Math.round(PASS_THRESHOLD * 100)}% correctly to pass. You can retake it anytime.
          </p>
        </div>
      </div>

      <ol className="space-y-7">
        {questions.map((q, qi) => (
          <li key={q.id}>
            <p className="mb-3 font-medium text-ink-900">
              <span className="mr-2 text-forest-600">{qi + 1}.</span>
              {q.prompt}
            </p>
            <div className="grid gap-2.5">
              {q.options.map((opt, oi) => {
                const chosen = answers[q.id] === oi;
                const isCorrect = q.correctIndex === oi;
                let cls = 'border-ink-200 bg-white hover:border-forest-300 hover:bg-forest-50';
                if (submitted) {
                  if (isCorrect) cls = 'border-forest-500 bg-forest-50 text-forest-900';
                  else if (chosen) cls = 'border-red-400 bg-red-50 text-red-800';
                  else cls = 'border-ink-100 bg-white text-ink-500';
                } else if (chosen) {
                  cls = 'border-forest-500 bg-forest-50 text-forest-900 ring-1 ring-forest-400';
                }
                return (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => select(q.id, oi)}
                    disabled={submitted}
                    className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${cls} ${
                      submitted ? 'cursor-default' : ''
                    }`}
                  >
                    <span>{opt}</span>
                    {submitted && isCorrect && <Check className="h-4 w-4 flex-shrink-0 text-forest-600" />}
                    {submitted && chosen && !isCorrect && <X className="h-4 w-4 flex-shrink-0 text-red-500" />}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <p className="mt-2 rounded-lg bg-ink-50 px-3 py-2 text-xs text-ink-600">{q.explanation}</p>
            )}
          </li>
        ))}
      </ol>

      {!submitted ? (
        <button type="button" onClick={submit} disabled={!allAnswered} className="btn-primary mt-8 w-full sm:w-auto">
          Submit answers
        </button>
      ) : (
        <div
          className={`mt-8 flex flex-col items-start gap-3 rounded-xl border p-5 sm:flex-row sm:items-center sm:justify-between ${
            passed ? 'border-forest-300 bg-forest-50' : 'border-sand-300 bg-sand-100'
          }`
        }
        >
          <div className="flex items-center gap-3">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full ${
                passed ? 'bg-forest-600 text-white' : 'bg-sand-500 text-white'
              }`}
            >
              {passed ? <Check className="h-6 w-6" /> : <RotateCcw className="h-5 w-5" />}
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-ink-900">
                {passed ? 'Passed' : 'Not quite yet'} — {Math.round(score * 100)}%
              </p>
              <p className="text-sm text-ink-600">
                {passed ? 'Great work. This module is now complete.' : 'Review the explanations above and try again.'}
              </p>
            </div>
          </div>
          {!passed && (
            <button type="button" onClick={retake} className="btn-secondary">
              <RotateCcw className="h-4 w-4" /> Retake
            </button>
          )}
        </div>
      )}
    </div>
  );
}
