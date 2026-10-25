import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Clock } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Quiz } from '@/components/Quiz';
import { useProgress } from '@/lib/progress';
import { modules } from '@/data/course';

export default function Module() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const { isLessonComplete, isModulePassed, moduleProgress, recordQuiz } = useProgress();

  const mod = modules.find((m) => m.id === moduleId);

  if (!mod) {
    return (
      <section className="container-page py-16 text-center">
        <h1 className="font-display text-2xl font-semibold text-ink-900">Module not found</h1>
        <p className="mt-2 text-ink-600">That module does not exist in this course.</p>
        <Link to="/course" className="btn-primary mt-6 inline-flex">
          <ArrowLeft className="h-4 w-4" /> Back to the course
        </Link>
      </section>
    );
  }

  const passed = isModulePassed(mod.id);
  const progress = moduleProgress(mod.id);
  const next = modules.find((m) => m.number === mod.number + 1);

  return (
    <>
      <Seo title={mod.title} description={mod.subtitle} path={`/course/${mod.id}`} />

      <section className="border-b border-ink-100 bg-gradient-to-b from-forest-50 to-sand-50">
        <div className="container-page py-10 sm:py-12">
          <Link to="/course" className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-700">
            <ArrowLeft className="h-4 w-4" /> All modules
          </Link>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-forest-600">Module {mod.number}</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">{mod.title}</h1>
          <p className="mt-3 max-w-2xl text-ink-600">{mod.subtitle}</p>
          <p className="mt-3 max-w-2xl text-ink-600">{mod.overview}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="h-2 w-48 overflow-hidden rounded-full bg-ink-100">
              <div className="h-full rounded-full bg-forest-600" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-sm font-medium text-ink-500">{progress}% complete</span>
            {passed && (
              <span className="inline-flex items-center gap-1 rounded-full bg-forest-100 px-2 py-0.5 text-xs font-medium text-forest-700">
                <CheckCircle2 className="h-3 w-3" /> Passed
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <h2 className="font-display text-2xl font-semibold text-ink-900">Lessons</h2>
        <div className="mt-6 space-y-3">
          {mod.lessons.map((lesson) => {
            const done = isLessonComplete(mod.id, lesson.id);
            return (
              <Link
                key={lesson.id}
                to={`/course/${mod.id}/${lesson.id}`}
                className="card group flex items-center gap-4 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                {done ? (
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-forest-600" />
                ) : (
                  <span className="h-6 w-6 flex-shrink-0 rounded-full border-2 border-ink-200" />
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold text-ink-900">{lesson.title}</h3>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-500">
                    <Clock className="h-3.5 w-3.5" /> {lesson.minutes} min
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-ink-300 transition-colors group-hover:text-forest-600" />
              </Link>
            );
          })}
        </div>

        <div className="mt-12">
          <Quiz
            questions={mod.quiz}
            title={mod.isFinalAssessment ? 'Final assessment' : 'Knowledge check'}
            onComplete={(score) => recordQuiz(mod.id, score)}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/course" className="btn-secondary">
            <ArrowLeft className="h-4 w-4" /> Back to the course
          </Link>
          {next && (
            <Link to={`/course/${next.id}`} className="btn-primary">
              Next: Module {next.number} — {next.title} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
