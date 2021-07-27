const generateAbTestVariationId = () => {
  return Math.round(Math.random());
};

const hideElement = (elementQuery) => {
  const selectedElement = document.querySelector(elementQuery);
  selectedElement.style.display = "none";
};

export default { generateAbTestVariationId, hideElement };
