import path from "node:path";
import { createDefaultPreset } from "ts-jest";

const jestConfig = {
  ...createDefaultPreset({
    tsconfig: path.resolve(import.meta.dirname, "./tsconfig.node.json"),
  }),
};

export default jestConfig;
