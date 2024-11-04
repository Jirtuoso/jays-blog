window.addEventListener('astro:page-load', () => {
    if (typeof umami !== 'undefined') {
        umami.trackView(); // This calls Umami to track each page view
    }
});
