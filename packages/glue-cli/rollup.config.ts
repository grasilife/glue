import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";

const mode = process.env.MODE;
const isProd = mode === "prod";

const external = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.devDependencies)
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
        sourcemap: !isProd
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: !isProd
      }
    ],
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: { compilerOptions: { sourceMap: !isProd } }
      })
    ]
  },
  {
    input: "dist/types/index.d.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "es"
      }
    ],
    plugins: [dts()]
  }
];
