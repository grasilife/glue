import typescript from "rollup-plugin-typescript2";
import { createRequire } from "module";
import dts from "rollup-plugin-dts";
const require = createRequire(import.meta.url);
const pkg = require("./package.json");

const mode = process.env.MODE;
const isProd = mode === "prod";

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

export default [
  {
    input: `src/index.ts`,
    external,
    output: [
      {
        file: pkg.main,
        exports: "named",
        format: "cjs",
        sourcemap: !isProd,
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: !isProd,
      },
    ],
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: { compilerOptions: { sourceMap: !isProd } },
      }),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "es",
      },
    ],
    plugins: [dts()],
  },
];
