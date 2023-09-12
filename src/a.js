import { b } from "./b";
import { c } from "./c";
import { sleep } from "./e";

document.body.appendChild(b());

await sleep(300);

document.body.appendChild(c());

export {};
