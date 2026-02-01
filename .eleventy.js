module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias("base", "base.liquid");
  eleventyConfig.addPassthroughCopy("static");
  return {
    dir: {
      input: ".",
      output: "_site"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dir: {
      output: "_site",
    },
  };
};
