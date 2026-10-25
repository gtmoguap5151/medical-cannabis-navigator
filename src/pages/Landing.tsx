import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Map as MapIcon, Award, ShieldCheck, CheckCircle2, BookOpen, FileText, RefreshCw } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { CheckoutButton } from '@/components/CheckoutButton';
import { modules } from '@/data/course';

const included = [
  { icon: BookOpen, text: 'The complete 10-module course — interactive lessons, knowledge checks, progress tracking' },
  { icon: Compass, text: 'The State Navigator (all 50 states + DC) with official-source verification checklists' },
  { icon: FileText, text: 'Your State Snapshot — your program, filled in: agency, fees, requirements, renewal' },
  { icon: FileText, text: 'Doctor-Visit Prep Kit — what to bring, what to ask, how to take notes' },
  { icon: FileText, text: 'First Dispensary Visit Guide — product categories, questions to ask, red flags' },
  { icon: MapIcon, text: 'Personal Cannabis Roadmap Workbook — printable plan with your next three steps' },
  { icon: Award, text: 'Final assessment + completion certificate' },
  { icon: RefreshCw, text: '12 months of Navigator updates as state programs change' },
];

export default function Landing() {
  return (
    <>
      <Seo
        title="Leaf Compass"
        description="Leaf Compass is a 10-module educational course on medical cannabis programs — what they are, how they work, and how to build your own plan. Educational information only."
        path="/"
      />

      <section className="border-b border-ink-100 bg-gradient-to-b from-forest-50 to-sand-50">
        <div className="container-page py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-forest-600">Medical cannabis education</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-ink-900 sm:text-5xl">
            Understand the system. Know your options.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-600">
            Leaf Compass is a 10-module educational course that walks you through medical cannabis programs
            step by step — what they are, how they work, and how to build your own plan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CheckoutButton />
            <Link to="/course" className="btn-secondary">
              Explore the course <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/state-navigator" className="btn-secondary">
              <Compass className="h-4 w-4" /> State Navigator
            </Link>
          </div>
          <p className="mt-4 text-sm text-ink-500">One payment of $49. No recurring fees — ever.</p>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <h2 className="font-display text-2xl font-semibold text-ink-900">What $49 includes</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {included.map((item) => (
            <div key={item.text} className="card flex gap-3 p-5">
              <item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-600" />
              <p className="text-sm text-ink-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <h2 className="font-display text-2xl font-semibold text-ink-900">The 10 modules</h2>
        <p className="mt-2 text-ink-600">Work through them in order, at your own pace. Each module ends with a knowledge check.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {modules.map((m) => (
            <Link
              key={m.id}
              to={`/course/${m.id}`}
              className="card group block p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-700 transition-colors group-hover:bg-forest-600 group-hover:text-white">
                  <m.icon className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-forest-500">Module {m.number}</span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink-900">{m.title}</h3>
                  <p className="mt-1 text-sm text-ink-500">{m.subtitle}</p>
                  <p className="mt-2 text-xs text-ink-400">{m.lessons.length} lessons</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <div className="rounded-2xl border border-forest-200 bg-forest-50 p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 h-7 w-7 flex-shrink-0 text-forest-600" />
            <div>
              <h2 className="font-display text-xl font-semibold text-ink-900">The Roadmap Guarantee</h2>
              <p className="mt-2 text-sm text-ink-700">
                Complete the course and finish your Personal Cannabis Roadmap. If you do not walk away with a
                clear, actionable plan for your situation, contact us within 30 days of purchase for a full refund.
              </p>
              <p className="mt-2 text-sm text-ink-600">
                This guarantee covers the course and materials. It does not and cannot guarantee approval, a
                medical card, eligibility, or any health outcome — those are decided by your state and by licensed
                professionals.
              </p>
              <div className="mt-5">
                <CheckoutButton />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-sand-300 bg-sand-100 p-5 text-sm text-ink-700">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-sand-700" />
          <p className="m-0">
            Educational information only. Not medical advice, not legal advice, and not a medical service.
            Nothing here guarantees approval, a medical card, or any health outcome. Verify current requirements
            through official government sources and talk to a licensed professional about your own situation.
          </p>
        </div>
      </section>
    </>
  );
}
