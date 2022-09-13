export const clearStyles = (selector: string | string[]) => {
  console.log("LOG: clearing styles");
  const selectors = Array.isArray(selector) ? selector : [selector];
  selectors.forEach(clearStyle);
};

const clearStyle = (selector: string) => {
  const element = document.getElementById(selector);
  if (element && element.parentElement) {
    element.parentElement.removeChild(element);
  }
};

export const addOutlineStyles = (selector: string, css: string) => {
  console.log("LOG: Adding outline styles...");
  const existingStyle = document.getElementById(selector);
  if (existingStyle) {
    console.log("LOG: styles already exists");
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    console.log("LOG: creating style element");
    const style = document.createElement("style");
    style.setAttribute("id", selector);
    style.innerHTML = css;
    document.head.appendChild(style);
    console.log("LOG style:", style);
    console.log("LOG document:", document);
    console.log("LOG head:", document.head);
    debugger;
  }
};
