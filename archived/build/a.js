// src/e.js
function sleep(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

// src/b.js
function b() {
  const element = document.createElement("div");
  element.innerHTML = "Hello, Webpack!";
  return element;
}
await sleep(100);

// src/d.js
function d() {
  const element = document.createElement("div");
  element.innerHTML = "Hello, Rspack!";
  return element;
}
await sleep(200);

// src/c.js
function c() {
  return d();
}

// src/a.js
document.body.appendChild(b());
await sleep(300);
document.body.appendChild(c());
