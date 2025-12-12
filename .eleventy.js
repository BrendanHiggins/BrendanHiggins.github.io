module.exports = function (eleventyConfig) {
  // Copy the static folder from src/ to the output root
  // This allows markdown to reference /static/images/... URLs
  eleventyConfig.addPassthroughCopy("src/static");

  // Copy the css folder to the output
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy favicon files to the output root
  eleventyConfig.addPassthroughCopy("src/favicon*");

  // Watch for CSS changes
  eleventyConfig.addWatchTarget("src/css");

  // Add a date formatting filter for templates: "Dec 07 2025"
  eleventyConfig.addFilter("formatDate", function (dateObj) {
    if (!dateObj) return "";
    let d;
    if (typeof dateObj === "string" || typeof dateObj === "number") {
      d = new Date(dateObj);
    } else if (dateObj instanceof Date) {
      d = dateObj;
    } else if (dateObj.toDate) {
      // handle Luxon/other wrappers
      d = dateObj.toDate();
    } else {
      d = new Date(dateObj);
    }
    if (isNaN(d)) return String(dateObj);
    const month = d.toLocaleString("en-US", { month: "short" });
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();
    return `${month} ${day} ${year}`;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};