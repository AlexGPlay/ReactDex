const { build } = require("./bun");
const opts = require("./base");

build({ ...opts, minify: true });
