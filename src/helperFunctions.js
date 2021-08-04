const selectAbTestVariant = (variants) => {
  const min = 0;
  const max = variants.reduce(
    (accumulator, currentValue) =>
      accumulator.percentageOfUsers + currentValue.percentageOfUsers
  );
  const selectedValue = Math.floor(Math.random() * (max - min + 1)) + min;

  let startingValue = 0;
  for (const variant of variants) {
    if (selectedValue < variant.percentageOfUsers + startingValue) {
      return variant.id;
    }
    startingValue += variant.percentageOfUsers;
  }

  return variants[0].id;
};

const hideElement = (elementQuery) => {
  const selectedElement = document.querySelector(elementQuery);
  selectedElement.style.display = "none";
};

const removeHiddenClass = (elementQuery) => {
  const selectedElement = document.querySelector(elementQuery);
  selectedElement.classList.remove("hidden");
};

export default { selectAbTestVariant, hideElement, removeHiddenClass };
