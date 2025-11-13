var StickRanger = (() => {
  // entry.js
  (async () => {
    await esbuild.build({
      entryPoints: ["StickRanger.js"],
      bundle: true,
      platform: "browser",
      format: "iife",
      globalName: "StickRanger",
      outfile: "StickRanger.bundle.js"
    });
  })();
})();
