import { Link } from 'react-router-dom';
import { Check, Lock, ArrowLeft } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { CheckoutButton } from '@/components/CheckoutButton';
import { BotanicalCorner } from '@/components/Botanical';
import { PRICE_USD } from '@/lib/checkout';

const included = [
  'Full access to all 10 modules',
  'Individual interactive lessons',
  'Knowledge-check quizzes',
  'Progress tracking dashboard',
  'State Navigator (50 states + D.C.)',
  'Personal Cannabis Roadmap',
  'Final assessment with retakes',
  'Course-completion certificate',
  'Educational reference material',
  'One-time payment — no subscription',
];

export default function Enroll() {
  return (
    <>
      <Seo
        title="Start the Course"
        description="Get full access to the Leaf Compass educational course for a one-time payment of $49. No subscription."
        path="/enroll"
      />
      <section className="relative overflow-hidden border-b border-ink-100 bg-gradient-to-b from-forest-50 to-sand-50">
        <BotanicalCorner className="pointer-events-none absolute -right-8 top-8 h-56 w-56 text-forest-300/40" />
        <div className="container-page relative py-12 sm:py-16">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 hover:text-forest-800">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <div className="mx-auto mt-8 max-w-2xl text-center">
            <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
              Start the Leaf Compass Course
            </h1>
            <p className="mt-4 text-lg text-ink-600">
              One-time payment of ${PRICE_USD}. Lifetime access. No subscription.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <div className="card overflow-hidden">
            <div className="border-b border-ink-100 bg-forest-50 px-6 py-5">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-xl font-semibold text-ink-900">Course Access</span>
                <span className="font-display text-3xl font-semibold text-forest-700">
                  ${PRICE_USD}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-600">One-time purchase · No recurring charges</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-700">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-ink-100 pt-6">
                <CheckoutButton fullWidth label={`Start the Course — $${PRICE_USD}`} className="py-4 text-lg" />
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-ink-500">
                  <Lock className="h-4 w-4" />
                  Secure checkout by Stripe. No card information is collected on this site.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-sand-300 bg-sand-100 p-5 text-sm text-ink-700">
            <p className="m-0">
              <strong className="text-ink-900">Important:</strong> This is an educational course. It does not provide
              medical evaluations, medical cards, prescriptions, recommendations, legal advice, or any guarantee of
              approval. You can explore the full course and all features now.
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link to="/course" className="btn-ghost">
              Explore the course first <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
