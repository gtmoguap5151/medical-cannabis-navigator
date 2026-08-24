import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Lock, ArrowLeft, Leaf } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { BotanicalCorner, LeafMark } from '@/components/Botanical';
import { useProgress } from '@/lib/progress';

export default function Certificate() {
  const { allModulesPassed, state, setCertificateName } = useProgress();
  const [name, setName] = useState(state.certificateName ?? '');

  if (!allModulesPassed) {
    return (
      <>
        <Seo title="Certificate" description="Complete all 10 modules to unlock your course-completion certificate." path="/certificate" />
        <section className="container-page py-16 sm:py-24">
          <div className="mx-auto max-w-md text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-100 text-ink-400">
              <Lock className="h-8 w-8" />
            </span>
            <h1 className="mt-6 font-display text-2xl font-semibold text-ink-900 sm:text-3xl">Certificate is locked</h1>
            <p className="mt-3 text-ink-600">
              Complete and pass all 10 modules — including the final assessment — to unlock your certificate of
              completion.
            </p>
            <Link to="/course" className="btn-primary mt-6">
              <ArrowLeft className="h-4 w-4" /> Back to Course
            </Link>
          </div>
        </section>
      </>
    );
  }

  const certId = state.completedAt
    ? `MCN-${new Date(state.completedAt).getFullYear()}-${state.completedAt.slice(0, 10).replace(/-/g, '')}`
    : 'MCN-PREVIEW';

  const formattedDate = state.completedAt
    ? new Date(state.completedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const graduateName = name.trim() || 'Course Graduate';

  function handleGenerate() {
    if (name.trim()) setCertificateName(name.trim());
  }

  return (
    <>
      <Seo title="Certificate of Completion" description="Your Medical Cannabis Navigator course-completion certificate." path="/certificate" />
      <section className="container-page py-10 sm:py-12">
        <Link to="/course" className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 hover:text-forest-800">
          <ArrowLeft className="h-4 w-4" /> Back to Course
        </Link>

        <div className="mt-6 max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-ink-900">Course Completion Certificate</h1>
          <p className="mt-2 text-ink-600">Congratulations on finishing the Medical Cannabis Navigator course.</p>
        </div>

        {!state.certificateName && (
          <div className="mt-6 max-w-md card p-5">
            <label htmlFor="cert-name" className="block text-sm font-medium text-ink-700">
              Enter the name to appear on your certificate
            </label>
            <input
              id="cert-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-ink-900 focus:border-forest-500 focus:outline-none focus:ring-1 focus:ring-forest-500"
            />
            <button type="button" onClick={handleGenerate} disabled={!name.trim()} className="btn-primary mt-3 w-full">
              Generate certificate
            </button>
          </div>
        )}

        <div className="mt-8">
          <div className="relative overflow-hidden rounded-2xl border-2 border-forest-200 bg-white p-8 shadow-lift sm:p-12">
            <BotanicalCorner className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-forest-100" />
            <BotanicalCorner className="pointer-events-none absolute -bottom-6 -left-6 h-40 w-40 rotate-180 text-forest-100" />

            <div className="relative text-center">
              <div className="flex items-center justify-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-700 text-white">
                  <LeafMark className="h-5 w-5" />
                </span>
                <span className="font-display text-lg font-semibold text-ink-900">
                  Medical Cannabis Navigator<span className="align-super text-[0.6em]">&trade;</span>
                </span>
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">Certificate of Completion</p>
              <p className="mt-6 text-sm text-ink-500">This certificate recognizes the completion of the</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                Medical Cannabis Navigator Educational Course
              </h2>

              <div className="mx-auto my-8 h-px w-24 bg-forest-200" />

              <p className="text-sm text-ink-500">Presented to</p>
              <p className="mt-2 font-display text-2xl font-semibold text-forest-800 sm:text-3xl">{graduateName}</p>

              <p className="mt-6 text-sm text-ink-600">
                For successfully completing all 10 modules, lessons, and the final assessment of this educational course.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
                <div className="text-center">
                  <p className="font-display text-base font-semibold text-ink-900">{formattedDate}</p>
                  <p className="text-xs uppercase tracking-wider text-ink-400">Completion Date</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-forest-300 bg-forest-50 text-forest-700">
                    <Award className="h-7 w-7" />
                  </span>
                  <p className="mt-1 text-xs uppercase tracking-wider text-ink-400">Course Graduate</p>
                </div>
                <div className="text-center">
                  <p className="font-mono text-sm font-semibold text-ink-900">{certId}</p>
                  <p className="text-xs uppercase tracking-wider text-ink-400">Certificate ID</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-sand-300 bg-sand-100 p-5 text-sm text-ink-700">
            <p className="m-0">
              <strong className="text-ink-900">This certificate does not constitute</strong> a medical cannabis
              certification, medical card, prescription, physician recommendation, medical evaluation, legal advice,
              legal authorization, or guarantee of eligibility or approval. It only documents completion of this
              educational course.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="btn-secondary"
            >
              <Leaf className="h-4 w-4" /> Print / Save as PDF
            </button>
            <Link to="/course" className="btn-ghost">Back to dashboard</Link>
          </div>
        </div>
      </section>
    </>
  );
}
