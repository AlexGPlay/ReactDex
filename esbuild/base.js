module.exports = {
  entryPoints: ["src/index.jsx"],
  bundle: true,
  minify: false,
  sourcemap: true,
  platform: "browser",
  target: ["es6"],
  outdir: "output",
  loader: { ".png": "base64" },
};
