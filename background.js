
const adPatterns = [
  /.*ads.*/i,
  /.*doubleclick.*/i,
  /.*google-analytics.*/i,
  /.*facebook.com.*/i
];

browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    for (let pattern of adPatterns) {
      if (pattern.test(details.url)) {
        console.log("Blocking request: " + details.url);
        return { cancel: true };
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
