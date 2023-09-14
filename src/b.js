import { sleep } from "./d.js";

console.time('b');
await sleep(1000);
console.timeEnd('b');

export const B = 'TLA (b)';
