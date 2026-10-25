import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Clock } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { ContentBlocks } from '@/components/ContentBlocks';
import { useProgress } from '@/lib/progress';
import { modules } from '@/data/course';

export default function Lesson() {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const { completeLesson, isLessonComplete } = useProgress();

  const mod = modules.find((m) => m.id === moduleId);
  const lessonIndex = mod ? mod.lessons.findIndex((l) => l.id === lessonId) : -1;
  const lesson = lessonIndex >= 0 && mod ? mod.lessons[lessonIndex] : undefined;

  if (!mod || !lesson) {
    return (
      <section className="container-page py-16 text-center">
        <h1 className="font-display text-2xl font-semibold text-ink-900">Lesson not found</h1>
        <p className="mt-2 text-ink-600">That lesson does not exist in this course.</p>
        <Link to="/course" className="btn-primary mt-6 inline-flex">
          <ArrowLeft className="h-4 w-4" /> Back to the course
        </Link>
      </section>
    );
  }

  const done = isLessonComplete(mod.id, lesson.id);
  const prev = lessonIndex > 0 ? mod.lessons[lessonIndex - 1] : undefined;
  const next = lessonIndex < mod.lessons.length - 1 ? mod.lessons[lessonIndex + 1] : undefined;

  return (
    <>
      <Seo title={lesson.title} description={mod.title} path={`/course/${mod.id}/${lesson.id}`} />

      <section className="container-page py-10 sm:py-12">
        <Link to={`/course/${mod.id}`} className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-700">
          <ArrowLeft className="h-4 w-4" /> Module {mod.number}: {mod.title}
        </Link>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">{lesson.title}</h1>
        <p className="mt-2 flex items-center gap-1 text-sm text-ink-500">
          <Clock className="h-4 w-4" /> {lesson.minutes} min
        </p>

        <div className="mt-8 max-w-3xl">
          <ContentBlocks blocks={lesson.blocks} />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {done ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-100 px-3 py-1.5 text-sm font-medium text-forest-700">
              <CheckCircle2 className="h-4 w-4" /> Completed
            </span>
          ) : (
            <button type="button" onClick={() => completeLesson(mod.id, lesson.id)} className="btn-primary">
              Mark lesson complete <CheckCircle2 className="h-4 w-4" />
            </button>
          )}
          {prev && (
            <Link to={`/course/${mod.id}/${prev.id}`} className="btn-secondary">
              <ArrowLeft className="h-4 w-4" /> {prev.title}
            </Link>
          )}
          {next ? (
            <Link to={`/course/${mod.id}/${next.id}`} className="btn-primary">
              Next: {next.title} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link to={`/course/${mod.id}`} className="btn-primary">
              Back to Module {mod.number} quiz <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
