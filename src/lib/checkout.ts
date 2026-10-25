/**
 * Checkout — connected to Stripe Payment Links.
 * This is the single integration point: the enroll button sends the
 * buyer to the hosted Stripe checkout page. No card data is ever
 * handled by this app.
 */

export const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/8x2eVcdP7aWOcVEenOgrS09';

export interface CheckoutResult {
  status: 'redirect' | 'error';
  message: string;
}

export async function startCheckout(): Promise<CheckoutResult> {
  try {
    window.location.href = STRIPE_PAYMENT_LINK;
    return {
      status: 'redirect',
      message: 'Redirecting to secure checkout…',
    };
  } catch {
    return {
      status: 'error',
      message: 'Checkout could not be opened. Please try again.',
    };
  }
}

export const PRICE_USD = 49;
