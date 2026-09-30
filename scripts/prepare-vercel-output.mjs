import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, ".vercel", "output");
const fnDir = join(output, "functions", "__server.func");

rmSync(output, { recursive: true, force: true });
mkdirSync(fnDir, { recursive: true });

const skipMeta = (src) => !src.endsWith(".DS_Store");

cpSync(join(root, "public"), join(output, "static"), {
  recursive: true,
  filter: skipMeta,
});
cpSync(join(root, "server"), join(fnDir, "server"), {
  recursive: true,
  filter: skipMeta,
});

writeFileSync(
  join(fnDir, "index.mjs"),
  `import nitroApp from "./server/index.mjs";

export default {
  fetch(req) {
    return nitroApp.fetch(req);
  },
};
`,
);

writeFileSync(
  join(fnDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs22.x",
      handler: "index.mjs",
      launcherType: "Nodejs",
      shouldAddHelpers: false,
      supportsResponseStreaming: true,
    },
    null,
    2,
  ),
);

writeFileSync(
  join(output, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        {
          src: "/assets/(.*)",
          headers: { "cache-control": "public, max-age=31536000, immutable" },
          continue: true,
        },
        {
          src: "/__l5e/(.*)",
          headers: { "cache-control": "public, max-age=31536000, immutable" },
          continue: true,
        },
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/__server" },
      ],
    },
    null,
    2,
  ),
);
