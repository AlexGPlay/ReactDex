const { build } = require("./esbuild");
const baseOpts = require("./base");

const options = {
  ...baseOpts,
  minify: true,
};

build(options);
