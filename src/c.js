import { sleep } from "./d.js";

console.time('c');
await sleep(500);
console.timeEnd('c');

export const C = 'TLA (c)';
