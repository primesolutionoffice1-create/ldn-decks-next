// src/lib/tracking.js
// GTM dataLayer helpers for ldndecks.com - SSR safe

/**
 * Push event to GTM dataLayer - no-ops on server render
 */
function push(event) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

/**
 * Track quote form submission
 * Fires: GA4 generate_lead + Google Ads Form Lead + Enhanced Conversions
 */
export function trackFormSubmit({ email, phone, formType = 'quote' }) {
  if (typeof window === 'undefined') return;
  push({
    event: 'form_submit',
    form_type: formType,
    email: email,
    phone: phone,
    page: window.location.pathname,
  });
}

/**
 * Track phone number click
 * Fires: GA4 phone_call_click + Google Ads Call Lead
 */
export function trackPhoneClick() {
  push({
    event: 'phone_click',
    phone: '+15716557207',
  });
}
