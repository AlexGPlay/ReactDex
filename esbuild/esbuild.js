const esbuild = require("esbuild");

module.exports = {
  build: (opts) => {
    console.time("Build");
    esbuild.build(opts);
    console.timeEnd("Build");
  },
  serve: async (opts) => {
    const ctx = await esbuild.context(opts);
    const { host, port } = await ctx.serve({
      servedir: "./",
    });
    console.log(`Serving on development server, open http://${host}:${port}`);
  },
};
