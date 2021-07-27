import analytics from "./analytics.js";
import helperFunctions from "./helperFunctions.js";
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

// Apply AB-Tests
const TEXT_AB_TEST_STORAGE_KEY = "blinkst_textVariantId";

const userTextVariantId = window.localStorage.getItem(TEXT_AB_TEST_STORAGE_KEY);

let textVariantId = +userTextVariantId;

if (userTextVariantId === null) {
  textVariantId = helperFunctions.generateAbTestVariationId();
  window.localStorage.setItem(TEXT_AB_TEST_STORAGE_KEY, textVariantId);
}

const CONTROL_VARIANT_ID = 0;

if (textVariantId === CONTROL_VARIANT_ID) {
  hideElement("[data-ab-test='text-test-variant']");
} else {
  hideElement("[data-ab-test='text-control-variant']");
}
