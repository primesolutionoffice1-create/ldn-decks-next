// Analytics tracking helpers
export function trackPhoneClick(event) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'Contact',
      event_label: 'Phone Call',
      value: 1,
    });
  }
}

export function trackFormSubmit({ email, phone, formType }) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'Contact',
      event_label: formType || 'quote',
      value: 1,
    });
  }
}

export function trackEvent(action, category, label, value) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value || 1,
    });
  }
}
