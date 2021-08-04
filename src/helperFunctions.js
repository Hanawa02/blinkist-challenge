const generateAbTestVariationId = (variants) => {
  const min = 0;
  const max = variants?.length - 1;
  const selectedIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return variants[selectedIndex].id;
};

const hideElement = (elementQuery) => {
  const selectedElement = document.querySelector(elementQuery);
  selectedElement.style.display = "none";
};

const removeHiddenClass = (elementQuery) => {
  const selectedElement = document.querySelector(elementQuery);
  selectedElement.classList.remove("hidden");
};

export default { generateAbTestVariationId, hideElement, removeHiddenClass };
