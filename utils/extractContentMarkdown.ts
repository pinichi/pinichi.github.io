import { globSync } from "glob";
export const routes = globSync("./content/**/*.md").map((path) =>
  path.slice(7, -3).replace(/\d+\./g, "").replace(/\\/g, "/")
);
