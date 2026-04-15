/* MatchaBridge GA4 bootstrap
 * 1) Set your GA4 Measurement ID below.
 * 2) This script runs on all docs pages.
 */
(function () {
  var GA4_ID = 'G-BQQHGH32JT';

  // Keep the script dormant until a real Measurement ID is configured.
  if (!/^G-[A-Z0-9]+$/.test(GA4_ID) || GA4_ID === 'G-XXXXXXXXXX') {
    return;
  }

  // Optional local opt-out support.
  if (window.localStorage && localStorage.getItem('mb_analytics_consent') === 'denied') {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  window.gtag = window.gtag || gtag;

  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA4_ID);
  document.head.appendChild(gaScript);

  gtag('js', new Date());
  gtag('config', GA4_ID, {
    anonymize_ip: true,
    send_page_view: true
  });

  // Helper hooks for future cookie-banner integration.
  window.MatchaBridgeAnalytics = {
    deny: function () {
      try {
        localStorage.setItem('mb_analytics_consent', 'denied');
      } catch (e) {
        // no-op
      }
    },
    allow: function () {
      try {
        localStorage.setItem('mb_analytics_consent', 'granted');
      } catch (e) {
        // no-op
      }
    }
  };
})();
