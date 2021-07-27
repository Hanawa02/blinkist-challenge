import analytics from "./analytics.js";
import "./styles.css";

/* 
  We will use the local storage to keep track of the triggers already executed,
  since the values do not expire unless the cache is cleaned. 
*/

const PAGE_VIEW_TRIGGERED_STORAGE_KEY = "blinkst_pageViewTriggered";

const userAlreadyTriggeredPageView = window.localStorage.getItem(
  PAGE_VIEW_TRIGGERED_STORAGE_KEY
);

if (userAlreadyTriggeredPageView === null) {
  window.localStorage.setItem(PAGE_VIEW_TRIGGERED_STORAGE_KEY, true);

  analytics.trackPageview({
    url: window.location.href,
  });
}
