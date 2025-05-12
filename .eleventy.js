module.exports = function (eleventyConfig) {
  // Copy these directories to _site
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  // Add a shortcode for responsive images
  eleventyConfig.addShortcode("image", function (src, alt, sizes = "100vw") {
    return `<img src="${src}" alt="${alt}" sizes="${sizes}" loading="lazy">`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
