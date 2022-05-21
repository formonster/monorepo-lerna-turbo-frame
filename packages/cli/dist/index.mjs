// src/index.ts
import { Command } from "commander";
import create from "@d/create";
var program = new Command();
program.command("create <app-name>").description("\u521B\u5EFA\u4E00\u4E2A\u65B0\u9879\u76EE").action((name, options) => {
  create(name, options);
});
program.parse(process.argv);
