import { Link } from 'react-router-dom';
import { ArrowRight, Map as MapIcon, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { CheckoutButton } from '@/components/CheckoutButton';
import { modules } from '@/data/course';

export default function Roadmap() {
  const roadmapModule = modules.find((m) => m.id === 'personal-cannabis-roadmap');

  return (
    <>
      <Seo
        title="Personal Cannabis Roadmap"
        description="Build your own plan: three clear next steps, based on what you learn in the course. Educational information only."
        path="/roadmap"
      />

      <section className="border-b border-ink-100 bg-gradient-to-b from-forest-50 to-sand-50">
        <div className="container-page py-10 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-forest-600">Personal Cannabis Roadmap</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">Your plan, in three steps</h1>
          <p className="mt-3 max-w-2xl text-ink-600">
            The roadmap is the point of the whole course: by the end, you walk away with a clear, actionable plan
            for your situation — your next three steps, written down. The printable Roadmap Workbook (one of the
            bonus PDFs) is emailed to you after purchase so you can fill it in as you go.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CheckoutButton />
            {roadmapModule && (
              <Link to={`/course/${roadmapModule.id}`} className="btn-secondary">
                <MapIcon className="h-4 w-4" /> Open the roadmap module
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <h2 className="font-display text-2xl font-semibold text-ink-900">How the roadmap comes together</h2>
        <p className="mt-2 max-w-2xl text-ink-600">
          The roadmap module walks through each part of building your plan. Work through these lessons, then
          write your three steps into the workbook.
        </p>
        <div className="mt-8 space-y-3">
          {(roadmapModule?.lessons ?? []).map((lesson, i) => (
            <Link
              key={lesson.id}
              to={`/course/${roadmapModule?.id}/${lesson.id}`}
              className="card group flex items-center gap-4 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-forest-100 text-sm font-bold text-forest-700">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-semibold text-ink-900">{lesson.title}</h3>
                <p className="mt-0.5 text-xs text-ink-500">{lesson.minutes} min</p>
              </div>
              <ArrowRight className="h-5 w-5 flex-shrink-0 text-ink-300 transition-colors group-hover:text-forest-600" />
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-forest-200 bg-forest-50 p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 h-7 w-7 flex-shrink-0 text-forest-600" />
            <div>
              <h3 className="font-display text-xl font-semibold text-ink-900">The Roadmap Guarantee</h3>
              <p className="mt-2 text-sm text-ink-700">
                Complete the course and finish your Personal Cannabis Roadmap. If you do not walk away with a
                clear, actionable plan for your situation, contact us within 30 days of purchase for a full refund.
                The guarantee covers the course and materials — never approval, a medical card, eligibility, or any
                health outcome.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-sand-300 bg-sand-100 p-5 text-sm text-ink-700">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-sand-700" />
          <p className="m-0">
            Educational information only. Not medical advice, not legal advice, and not a medical service. Verify
            current requirements through official government sources and talk to a licensed professional about
            your own situation.
          </p>
        </div>
      </section>
    </>
  );
}
