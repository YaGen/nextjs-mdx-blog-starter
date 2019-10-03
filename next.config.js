const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

const fs = require("fs");
const { join } = require("path");
const { promisify } = require("util");
const copyFile = promisify(fs.copyFile);
const staticFilesToCopy = ["static/favicon.ico"];

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  exportTrailingSlash: true,
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    if (dev) return defaultPathMap;
    await Promise.all(
      staticFilesToCopy.map(file =>
        copyFile(join(dir, file), join(outDir, file))
      )
    );
    return defaultPathMap;
  }
});
