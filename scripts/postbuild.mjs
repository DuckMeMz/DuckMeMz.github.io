import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

function assertInside(parent, target) {
  const resolvedParent = resolve(parent);
  const resolvedTarget = resolve(target);
  if (!resolvedTarget.startsWith(resolvedParent)) {
    throw new Error(`Refusing to write outside ${resolvedParent}: ${resolvedTarget}`);
  }
}

function copyDirectory(source, target, parentForSafety) {
  assertInside(parentForSafety, target);
  rmSync(target, { recursive: true, force: true });
  cpSync(source, target, { recursive: true });
}

const appHtml = join(dist, "app.html");
if (!existsSync(appHtml)) {
  throw new Error("Vite did not emit dist/app.html.");
}

const html = readFileSync(appHtml, "utf8");
writeFileSync(join(dist, "index.html"), html);
writeFileSync(join(dist, "404.html"), html);
writeFileSync(join(root, "index.html"), html);
writeFileSync(join(root, "404.html"), html);

copyDirectory(join(dist, "app"), join(root, "app"), root);
copyDirectory(join(root, "docs"), join(dist, "docs"), dist);

const legacyPages = [
  "Samsara.html",
  "HeartGarden.html",
  "Warpbound.html",
  "VRProject.html",
  "Custom_Engine.html",
  "Resume.html",
];

for (const page of legacyPages) {
  const source = join(root, page);
  if (existsSync(source)) {
    copyFileSync(source, join(dist, page));
  }
}

mkdirSync(join(dist, "app"), { recursive: true });