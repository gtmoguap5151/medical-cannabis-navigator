import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { startCheckout } from '@/lib/checkout';

interface CheckoutButtonProps {
  className?: string;
  label?: string;
  fullWidth?: boolean;
}

export function CheckoutButton({ className = '', label = 'Start the Course — $49', fullWidth }: CheckoutButtonProps) {
  const [state, setState] = useState<'idle' | 'loading' | 'coming-soon'>('idle');
  const navigate = useNavigate();

  async function handleClick() {
    setState('loading');
    const result = await startCheckout();
    if (result.status === 'coming-soon') {
      setState('coming-soon');
    } else {
      setState('idle');
    }
  }

  if (state === 'coming-soon') {
    return (
      <div className={`flex flex-col gap-2 ${fullWidth ? 'w-full' : ''}`}>
        <button type="button" onClick={handleClick} className={`btn-secondary ${className} ${fullWidth ? 'w-full' : ''}`}>
          Checkout coming soon
        </button>
        <p className="text-xs text-ink-500">
          Online checkout is being set up. You can{' '}
          <button
            type="button"
            className="font-medium text-forest-700 underline underline-offset-2"
            onClick={() => navigate('/course')}
          >
            explore the full course now
          </button>
          .
        </p>
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
