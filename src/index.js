function sleep(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello, Webpack!";
  return element;
}

await sleep(1000);
document.body.appendChild(component());
