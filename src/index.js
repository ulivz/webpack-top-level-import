export function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello, Webpack!";
  return element;
}

await 1000;

document.body.appendChild(component());
