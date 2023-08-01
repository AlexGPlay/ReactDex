const { build } = require("./esbuild");
const baseOpts = require("./base");

const options = {
  ...baseOpts,
  minify: true,
  define: {
    "process.env.NODE_ENV": "production",
  },
};

build(options);
