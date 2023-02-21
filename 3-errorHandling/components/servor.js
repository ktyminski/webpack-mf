const servor = require("servor");
const instance = await servor({
  root: "dist",
  fallback: "dist/index.html",
  port: 3001,
});
