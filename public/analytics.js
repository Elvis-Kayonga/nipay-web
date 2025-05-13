
// Google Analytics Enhanced Tracking Script
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Main configuration with actual GA4 ID
gtag('config', 'G-4W8M75RHXN', {
  'user_id': localStorage.getItem('nipay_user_id') || '',
  'send_page_view': true,
  'page_title': document.title,
  'cookie_flags': 'samesite=none;secure',
  'cookie_expires': 63072000 // 2 years in seconds
});

// Generate and store anonymous user ID for returning visitor tracking
(function() {
  if (!localStorage.getItem('nipay_user_id')) {
    const generateId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('nipay_user_id', generateId());
  }
  
  // Track if user is returning
  const lastVisit = localStorage.getItem('nipay_last_visit');
  const currentTime = new Date().getTime();
  
  if (lastVisit) {
    const daysSinceLastVisit = Math.floor((currentTime - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
    gtag('event', 'returning_visitor', {
      'days_since_last_visit': daysSinceLastVisit
    });
  } else {
    gtag('event', 'first_time_visitor');
  }
  
  localStorage.setItem('nipay_last_visit', currentTime.toString());
})();
