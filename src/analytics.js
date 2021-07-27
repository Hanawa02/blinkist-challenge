const trackPageview = (params) => {
  console.log(`--> Pageview URL: ${params.url}`);
};

const registerEvent = (data) => {
  console.log("--> Event Registerd: ", data);
};

export default { trackPageview, registerEvent };
