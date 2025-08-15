// src/composables/useAnalytics.js

export function useAnalytics() {
  // Función para enviar eventos personalizados
  const trackEvent = (eventName, parameters = {}) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: parameters.category || 'engagement',
        event_label: parameters.label || '',
        value: parameters.value || 1,
        ...parameters
      });
    }
  };

  // Eventos específicos para CiviData
  const trackWhatsAppClick = () => {
    trackEvent('contact_whatsapp', {
      category: 'contact',
      label: 'WhatsApp button clicked'
    });
  };

  const trackDemoRequest = () => {
    trackEvent('demo_request', {
      category: 'conversion',
      label: 'Demo request button clicked'
    });
  };

  const trackFeatureView = (featureName) => {
    trackEvent('feature_view', {
      category: 'engagement',
      label: featureName
    });
  };

  const trackPageView = (pageName) => {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-E6C3M5WSZ7', {
        page_title: pageName,
        page_location: window.location.href
      });
    }
  };

  return {
    trackEvent,
    trackWhatsAppClick,
    trackDemoRequest,
    trackFeatureView,
    trackPageView
  };
}