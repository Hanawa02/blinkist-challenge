import analytics from "./analytics.js";
import helperFunctions from "./helperFunctions.js";
import "./styles.css";

/* 
  We will use the local storage to keep track of the triggers already executed,
  since the values do not expire unless the cache is cleaned. 
*/

// Trigger Page View

const PAGE_VIEW_TRIGGERED_STORAGE_KEY = "blinkist_pageViewTriggered";

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

const textVariants = [
  {
    id: 0,
    name: "control-variant",
    elementVariantIdentifier: "text-control-variant",
  },
  {
    id: 1,
    name: "test-variant",
    elementVariantIdentifier: "text-test-variant",
  },
];

const TEXT_AB_TEST_STORAGE_KEY = "blinkist_textVariantId";

const userTextVariantId = window.localStorage.getItem(TEXT_AB_TEST_STORAGE_KEY);

let textVariantId = +userTextVariantId;

if (userTextVariantId === null) {
  textVariantId = helperFunctions.generateAbTestVariationId(textVariants);
  window.localStorage.setItem(TEXT_AB_TEST_STORAGE_KEY, textVariantId);
}

for (const variant of textVariants) {
  if (textVariantId !== variant.id) {
    helperFunctions.hideElement(
      `[data-ab-test='${variant.elementVariantIdentifier}']`
    );
    return;
  }
}
