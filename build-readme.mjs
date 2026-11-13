// Uso: node build-readme.mjs  -> lee theme.json + README.template.md y genera README.md
import { readFileSync, writeFileSync } from "node:fs";
const t = JSON.parse(readFileSync("theme.json", "utf8"));
let md = readFileSync("README.template.md", "utf8");
md = md.replace(/\{\{(\w+)\}\}/g, (_, k) => {
  if (!(k in t)) throw new Error(`Variable sin definir en theme.json: ${k}`);
  return t[k];
});
writeFileSync("README.md", md);
console.log("README.md generado");
