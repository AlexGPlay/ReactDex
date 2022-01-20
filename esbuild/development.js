const { serve } = require("./esbuild");
const baseOpts = require("./base");

const options = {
  ...baseOpts,
  minify: false,
};

serve(options);
