// src/index.ts
import chalk from "chalk";
function create(name, options) {
  console.log("test", chalk.yellow(name, JSON.stringify(options)));
}
var src_default = create;
export {
  src_default as default
};
