import { sleep } from "./e";

await sleep(100);

export function b() {
  const element = document.createElement("div");
  element.innerHTML = "Hello, Webpack!";
  return element;
}
