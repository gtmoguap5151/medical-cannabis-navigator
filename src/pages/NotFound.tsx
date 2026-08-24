import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Seo } from '@/components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" />
      <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <p className="font-display text-6xl font-semibold text-forest-200">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-ink-900">Page not found</h1>
        <p className="mt-2 text-ink-600">The page you are looking for does not exist or has moved.</p>
        <Link to="/" className="btn-primary mt-6">
          <Home className="h-4 w-4" /> Back to home
        </Link>
      </section>
    </>
  );
}
