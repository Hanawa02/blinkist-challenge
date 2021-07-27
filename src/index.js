import "./styles.css";

// Type your code here

const trackPageview = (params) => {
  console.log(`--> Pageview URL: ${params.url}`);
};

trackPageview({
  url: window.location.href
});
