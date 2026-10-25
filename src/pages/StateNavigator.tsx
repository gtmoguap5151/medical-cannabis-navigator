import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Search, Map as MapIcon } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { states } from '@/data/states';

export default function StateNavigator() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return states;
    return states.filter((s) => s.name.toLowerCase().includes(q) || s.abbr.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <Seo
        title="State Navigator"
        description="Find the agency most likely to run your state's medical cannabis program — a starting point, always verified against official sources."
        path="/state-navigator"
      />

      <section className="border-b border-ink-100 bg-gradient-to-b from-forest-50 to-sand-50">
        <div className="container-page py-10 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-forest-600">State Navigator</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">Find your state program</h1>
          <p className="mt-3 max-w-2xl text-ink-600">
            Pick your state to find the agency most likely to run its program. Treat this as a starting point —
            programs change, so always verify current requirements through official government sources before you act.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search your state…"
                aria-label="Search states"
                className="w-full rounded-xl border border-ink-200 bg-white py-2.5 pl-9 pr-3 text-sm text-ink-900 outline-none focus:border-forest-500"
              />
            </div>
            <Link to="/roadmap" className="btn-secondary">
              <MapIcon className="h-4 w-4" /> Personal Roadmap
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        {filtered.length === 0 ? (
          <p className="text-ink-600">No state matches “{query}”. Try a state name or abbreviation.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <div key={s.abbr} className="card p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-700">
                    {s.abbr}
                  </span>
                  <h2 className="font-display text-lg font-semibold text-ink-900">{s.name}</h2>
                </div>
                <p className="mt-3 flex items-start gap-2 text-sm text-ink-600">
                  <Compass className="mt-0.5 h-4 w-4 flex-shrink-0 text-forest-600" />
                  {s.agency}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 rounded-2xl border border-sand-300 bg-sand-100 p-5 text-sm text-ink-700">
          Educational information only. This navigator lists likely agencies as a starting point — it is not a
          statement of current program rules, eligibility, or availability in any state. Verify everything through
          official government sources and talk to a licensed professional about your own situation.
        </div>
      </section>
    </>
  );
}
