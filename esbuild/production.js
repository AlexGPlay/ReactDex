const { build } = require("./esbuild");
const baseOpts = require("./base");

const options = {
  ...baseOpts,
};

build(options);
