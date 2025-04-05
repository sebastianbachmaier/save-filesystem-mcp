import { AsyncLocalStorage } from "node:async_hooks";
import path from "node:path";


if (!process.argv[2]) {
  console.error("Root required");
  process.exit(1);
}

export const root = path.resolve(process.argv[2]);

const store = {
  root,
};
export const rootContext = new AsyncLocalStorage<typeof store>();
