import { useState } from 'react';
import { startCheckout } from '@/lib/checkout';

interface CheckoutButtonProps {
  className?: string;
  label?: string;
  fullWidth?: boolean;
}

export function CheckoutButton({ className = '', label = 'Start the Course — $49', fullWidth }: CheckoutButtonProps) {
  const [state, setState] = useState<'idle' | 'loading' | 'error'>('idle');

  async function handleClick() {
    setState('loading');
    const result = await startCheckout();
    if (result.status === 'error') {
      setState('error');
    }
    // On redirect, the browser leaves this page for Stripe Checkout.
  }

  if (state === 'error') {
    return (
      <div className={`flex flex-col gap-2 ${fullWidth ? 'w-full' : ''}`}>
        <button type="button" onClick={handleClick} className={`btn-primary ${className} ${fullWidth ? 'w-full' : ''}`}>
          {label}
        </button>
        <p className="text-xs text-ink-500">Checkout didn&apos;t open. Please try again.</p>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={state === 'loading'}
      className={`btn-primary ${className} ${fullWidth ? 'w-full' : ''}`}
    >
      {state === 'loading' ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          Preparing…
        </>
      ) : (
        label
      )}
    </button>
  );
}
