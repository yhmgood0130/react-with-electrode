module.exports = {
  cache: {
    cacheId: "react-with-electrode",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "react-with-electrode",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
