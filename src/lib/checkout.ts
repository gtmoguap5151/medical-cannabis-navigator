/**
 * Checkout abstraction — payment is NOT yet connected.
 * This is the single integration point that Stripe Checkout will
 * plug into later without rebuilding the rest of the application.
 */

export interface CheckoutResult {
  status: 'coming-soon' | 'error';
  message: string;
}

export async function startCheckout(): Promise<CheckoutResult> {
  // Stripe is intentionally not wired up yet. When it is, this function
  // will create a Checkout Session and redirect the browser to the
  // hosted payment page. No card data is ever handled by this app.
  return {
    status: 'coming-soon',
    message:
      'Online checkout is coming soon. You can explore the full course and all features now — payment will be enabled shortly.',
  };
}

export const PRICE_USD = 49;
