import { sleep } from "./e";

await sleep(200);

export function d() {
  const element = document.createElement("div");
  element.innerHTML = "Hello, Rspack!";
  return element;
}
