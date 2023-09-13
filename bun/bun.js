const fs = require("fs");

const build = async (opts) => {
  console.time("Build finished");
  await Bun.build(opts);
  console.timeEnd("Build finished");
};

const serve = async (opts) => {
  let buildPromise = null;
  const watcher = fs.watch("./src", { recursive: true }, () => {
    buildPromise = build(opts);
  });

  const server = Bun.serve({
    development: true,
    port: 9090,
    fetch: async (req) => {
      const url = new URL(req.url);
      if (!buildPromise) {
        buildPromise = build(opts);
      }
      await buildPromise;

      const filePath = url.pathname.replace(new RegExp("(.)?/"), "");
      const file = Bun.file(filePath || "index.html");
      if (await file.exists()) {
        return new Response(file);
      }
      return new Response("", { status: 404 });
    },
  });

  process.on("SIGINT", () => {
    watcher.close();
    server.stop();
    process.exit(0);
  });
};

module.exports = {
  build,
  serve,
};
