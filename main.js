const colorToggler = document.getElementById("color-toggler");
const S = document.documentElement.style;

const light = {
  wrapperBgColor: "#333",
  containerBgColor: "#fff",
  primaryBgColor: "#1b1b1b",
  mostPickedBgColor: "#002fe9",
  mostPickedTextColor: "#fff",
  primaryTextColor: "#1b1b1b",
  secondaryTextColor: "#777777",
  startTextColor: "#fff",
  colorTogglerBgColor: "#fff",
  colorTogglerTextColor: "#000",
  colorTogglerHoverBgColor: "#000",
  colorTogglerHoverTextColor: "#fff"
};

const dark = {
  wrapperBgColor: "#333",
  containerBgColor: "#000",
  primaryBgColor: "#fff",
  mostPickedBgColor: "#002fe9",
  mostPickedTextColor: "#fff",
  primaryTextColor: "#fff",
  secondaryTextColor: "#777777",
  startTextColor: "#1b1b1b",
  colorTogglerBgColor: "#000",
  colorTogglerTextColor: "#fff",
  colorTogglerHoverBgColor: "#fff",
  colorTogglerHoverTextColor: "#000"
};

let isDarkMode = false;

function setColorTogglerStylesToDark() {
  S.setProperty("--color-toggler-bg-color", dark.colorTogglerBgColor);
  S.setProperty("--color-toggler-text-color", dark.colorTogglerTextColor);
  S.setProperty(
    "--color-toggler-hover-bg-color",
    dark.colorTogglerHoverBgColor
  );
  S.setProperty(
    "--color-toggler-hover-text-color",
    dark.colorTogglerHoverTextColor
  );
}

function setColorTogglerStylesToLight() {
  S.setProperty("--color-toggler-bg-color", light.colorTogglerBgColor);
  S.setProperty("--color-toggler-text-color", light.colorTogglerTextColor);
  S.setProperty(
    "--color-toggler-hover-bg-color",
    light.colorTogglerHoverBgColor
  );
  S.setProperty(
    "--color-toggler-hover-text-color",
    light.colorTogglerHoverTextColor
  );
}

function setColorStylesToDark() {
  S.setProperty("--wrapper-bg-color", dark.wrapperBgColor);
  S.setProperty("--container-bg-color", dark.containerBgColor);
  S.setProperty("--primary-bg-color", dark.primaryBgColor);
  S.setProperty("--primary-text-color", dark.primaryTextColor);
  S.setProperty("--secondary-text-color", dark.secondaryTextColor);
  S.setProperty("--start-text-color", dark.startTextColor);
}

function setColorStylesToLight() {
  S.setProperty("--wrapper-bg-color", light.wrapperBgColor);
  S.setProperty("--container-bg-color", light.containerBgColor);
  S.setProperty("--primary-bg-color", light.primaryBgColor);
  S.setProperty("--primary-text-color", light.primaryTextColor);
  S.setProperty("--secondary-text-color", light.secondaryTextColor);
  S.setProperty("--start-text-color", light.startTextColor);
}

colorToggler.onclick = function(e) {
  // Dark Mode Styling
  if (!isDarkMode) {
    this.textContent = "Dark";
    setColorTogglerStylesToDark();
    setColorStylesToDark();
    isDarkMode = true;
  } else {
    // Light Mode Styling
    this.textContent = "Light";
    setColorTogglerStylesToLight();
    setColorStylesToLight();
    isDarkMode = false;
  }
};
