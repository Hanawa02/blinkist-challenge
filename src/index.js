import analytics from "./analytics.js";
import helperFunctions from "./helperFunctions.js";
import "./styles.css";

/* 
  We will use the local storage to keep track of the triggers already executed,
  since the values do not expire unless the cache is cleaned. 
*/

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
  console.log(variant, textVariantId, userTextVariantId);
  if (variant.id === textVariantId) {
    console.log("found something!");
    helperFunctions.removeHiddenClass(
      `[data-ab-test='${variant.elementVariantIdentifier}']`
    );
    break;
  }
}

// Trigger Page View

const PAGE_VIEW_TRIGGERED_STORAGE_KEY = "blinkist_pageViewTriggered";

const userAlreadyTriggeredPageView = window.localStorage.getItem(
  PAGE_VIEW_TRIGGERED_STORAGE_KEY
);

const userTextVariant = textVariants.find((item) => item.id === textVariantId);

if (userAlreadyTriggeredPageView === null) {
  window.localStorage.setItem(PAGE_VIEW_TRIGGERED_STORAGE_KEY, true);

  analytics.trackPageview({
    url: window.location.href,
    data: {
      abTests: {
        textAbTest: userTextVariant?.name,
      },
    },
  });
}

// Handle Sign Up Link click

const SIGN_UP_WAS_TRIGGERED_STORAGE_KEY = "blinkist_signUpWasTriggered";

const triggerSignUpLinkClick = () => {
  const signUpWasTriggered = window.localStorage.getItem(
    SIGN_UP_WAS_TRIGGERED_STORAGE_KEY
  );

  if (signUpWasTriggered === null) {
    window.localStorage.setItem(SIGN_UP_WAS_TRIGGERED_STORAGE_KEY, true);

    analytics.registerEvent({
      eventName: "signUp_click",
      eventData: {
        textAbTest: userTextVariant?.name,
      },
    });
  }
};

const signUpLink = document.querySelector("[data-id='sign-up-link']");

signUpLink.addEventListener("click", triggerSignUpLinkClick);
