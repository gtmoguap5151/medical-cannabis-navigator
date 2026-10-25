import { Link } from 'react-router-dom';
import { LeafMark } from '@/components/Botanical';

const groups = [
  {
    title: 'Course',
    links: [
      { to: '/course', label: 'Course Overview' },
      { to: '/state-navigator', label: 'State Navigator' },
      { to: '/roadmap', label: 'Personal Roadmap' },
      { to: '/certificate', label: 'Certificate' },
      { to: '/enroll', label: 'Start the Course' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/faq', label: 'FAQ' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/disclaimer', label: 'Disclaimer' },
      { to: '/terms', label: 'Terms' },
      { to: '/privacy', label: 'Privacy' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-ink-100 bg-forest-950 text-forest-100">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-700 text-white">
                <LeafMark className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold text-white">
                Leaf Compass
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-forest-200/80">
              An independent educational course that helps you understand the system, know your options, and navigate the process with confidence.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-forest-300">{g.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-forest-100/85 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-forest-800/60 bg-forest-900/50 p-5 text-xs leading-relaxed text-forest-200/80">
          <strong className="text-forest-100">Important:</strong> Leaf Compass is an educational course only. We do not provide medical
          evaluations, certifications, medical cards, prescriptions, recommendations, legal advice, or any guarantee of approval, and we make no medical
          claims. Always verify current requirements through official government sources and consult licensed professionals.
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-forest-800/60 pt-6 text-xs text-forest-300/70 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Leaf Compass. All rights reserved.</p>
          <p>Educational content — not medical or legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
