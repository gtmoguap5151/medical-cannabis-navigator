import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LeafMark } from '@/components/Botanical';

const links = [
  { to: '/course', label: 'Course' },
  { to: '/state-navigator', label: 'State Navigator' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-sand-50/85 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-700 text-white">
            <LeafMark className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-ink-900">
              Cannabis Navigator<span className="align-super text-[0.6em]">&trade;</span>
            </span>
            <span className="text-[0.68rem] font-medium uppercase tracking-wider text-forest-600">Medical Education Course</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-forest-100 text-forest-800' : 'text-ink-600 hover:bg-forest-50 hover:text-forest-800'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/enroll" className="btn-primary ml-2 px-5 py-2.5 text-sm">
            Start the Course — $49
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink-700 hover:bg-forest-50 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-sand-50 lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium ${
                    isActive ? 'bg-forest-100 text-forest-800' : 'text-ink-700 hover:bg-forest-50'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/enroll"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
              key={location.pathname}
            >
              Start the Course — $49
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
