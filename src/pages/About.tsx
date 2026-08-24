import { Link } from 'react-router-dom';
import { Compass, BookOpen, ShieldCheck, Search, ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { BotanicalCorner } from '@/components/Botanical';

const pillars = [
  {
    icon: BookOpen,
    title: 'Education first',
    body: 'We teach the fundamentals — what cannabis is, how state programs work, how products differ, and what safety means — in plain, understandable language.',
  },
  {
    icon: Compass,
    title: 'Navigation, not shortcuts',
    body: 'We help you organize the process and point you toward the right questions and the right sources, rather than promising outcomes we cannot deliver.',
  },
  {
    icon: Search,
    title: 'Research you can verify',
    body: 'The State Navigator gives you checklists that direct you to official government sources, so you can confirm current requirements yourself.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsible decision-making',
    body: 'We emphasize safety, consulting licensed professionals, and recognizing where general information ends and personal advice begins.',
  },
];

export default function About() {
  return (
    <>
      <Seo title="About" description="Medical Cannabis Navigator is an independent educational platform that helps adults understand the medical cannabis landscape and navigate the process responsibly." path="/about" />
      <section className="relative overflow-hidden border-b border-ink-100 bg-gradient-to-b from-forest-50 to-sand-50">
        <BotanicalCorner className="pointer-events-none absolute -right-8 top-8 h-56 w-56 text-forest-300/40" />
        <div className="container-page relative py-12 sm:py-16">
          <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">About Medical Cannabis Navigator</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-600">
            We built Medical Cannabis Navigator to help adults understand a confusing landscape — clearly,
            responsibly, and without overpromising.
          </p>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink-900">Our purpose</h2>
          <p className="mt-4 text-ink-700 leading-relaxed">
            Medical Cannabis Navigator&trade; is an independent educational platform. We do not provide medical
            evaluations, certifications, medical cards, prescriptions, recommendations, legal advice, or any
            guarantee of approval. Instead, we help people understand how the system generally works, learn how state
            programs are structured, prepare for the process, understand products and responsible use, and verify
            current requirements through official government sources.
          </p>
          <p className="mt-4 text-ink-700 leading-relaxed">
            We believe the best decisions come from understanding your options and asking better questions. That is
            why our course is built around navigation and research — not shortcuts or promises.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-sand-300 bg-sand-100 p-6">
          <h2 className="font-display text-xl font-semibold text-ink-900">What we are not</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-700">
            <li>We are not a medical practice and do not employ clinicians.</li>
            <li>We are not a law firm and do not provide legal representation.</li>
            <li>We do not issue medical cards, certifications, or recommendations.</li>
            <li>We do not guarantee eligibility, approval, or any particular outcome.</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link to="/course" className="btn-primary">Explore the course <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
