module.exports = function (eleventyConfig) {
  // Copy these directories to _site
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("uswds-assets");

  // Add a shortcode for responsive images
  eleventyConfig.addShortcode("image", function (src, alt, sizes = "100vw") {
    return `<img src="${src}" alt="${alt}" sizes="${sizes}" loading="lazy">`;
  });

  // Add a filter to limit array items
  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
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
