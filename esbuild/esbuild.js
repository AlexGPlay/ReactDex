const esbuild = require("esbuild");

module.exports = {
  build: (opts) => {
    console.time("Build");
    esbuild.build(opts);
    console.timeEnd("Build");
  },
  serve: (opts) => {
    console.log("Serving on development server, open http://localhost:9000");
    esbuild.serve({ servedir: "./", port: 9000 }, opts);
  },
};
