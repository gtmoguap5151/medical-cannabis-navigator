import { Link } from 'react-router-dom';
import { AlertTriangle, X } from 'lucide-react';
import { Seo } from '@/components/Seo';

const notProvided = [
  'Medical evaluations',
  'Medical advice',
  'Diagnoses',
  'Prescriptions',
  'Physician recommendations',
  'Medical cannabis cards',
  'Legal advice',
  'Legal representation',
  'Legal authorization',
  'Guaranteed approval',
  'Guaranteed eligibility',
];

export default function Disclaimer() {
  return (
    <>
      <Seo title="Disclaimer" description="Medical Cannabis Navigator provides general educational information only. It does not provide medical or legal services." path="/disclaimer" />
      <section className="border-b border-ink-100 bg-gradient-to-b from-forest-50 to-sand-50">
        <div className="container-page py-10 sm:py-12">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand-200 text-sand-800">
            <AlertTriangle className="h-6 w-6" />
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">Disclaimer</h1>
          <p className="mt-3 max-w-2xl text-ink-600">Please read this carefully. It explains what this course is and is not.</p>
        </div>
      </section>

      <section className="container-page py-10 sm:py-12">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="rounded-2xl border border-forest-200 bg-forest-50 p-6">
            <p className="text-lg font-medium text-ink-900">
              This application provides general educational information only.
            </p>
          </div>

          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink-900">What this course does NOT provide</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {notProvided.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-700">
                  <X className="h-4 w-4 flex-shrink-0 text-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink-900">Medical questions</h2>
            <p className="mt-2 text-ink-700 leading-relaxed">
              For any medical question — including whether cannabis may be appropriate for you — consult a qualified
              healthcare professional who knows your health history. This course does not diagnose conditions,
              recommend treatments, or replace medical care.
            </p>
          </div>

          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink-900">Legal questions</h2>
            <p className="mt-2 text-ink-700 leading-relaxed">
              For any legal question, consult a qualified attorney. Cannabis laws vary by jurisdiction and change
              over time. The general legal information in this course is not legal advice.
            </p>
          </div>

          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink-900">Verify current requirements</h2>
            <p className="mt-2 text-ink-700 leading-relaxed">
              You must verify current cannabis laws and program requirements through official government sources
              before taking any action. The State Navigator is a research assistant that directs you to official
              sources — it does not determine your eligibility or provide current legal facts.
            </p>
            <Link to="/state-navigator" className="btn-secondary mt-4">Open State Navigator</Link>
          </div>

          <div className="rounded-2xl border border-sand-300 bg-sand-100 p-6 text-sm text-ink-700">
            <p className="m-0">
              By using this course, you acknowledge that you understand it is an educational product only and that you
              are responsible for verifying current requirements and consulting appropriate professionals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
