import { build } from "esbuild";
import { exec } from "pkg";

(async () => {
  await build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/containerbase-cli.js",
  });

  await exec([
    "--targets",
    "node18-linux-x64,node18-linux-arm64,node18-alpine-x64,node18-alpine-arm64",
    "--out-path",
    "dist",
    "--debug",
    "dist/containerbase-cli.js",
  ]);
})();
