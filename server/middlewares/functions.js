const customId = require( "custom-id-new");
 function convertToSlug(string, randomId) {
    const str = string
      .toString()
      .trim()
      .toLowerCase()
      .replace("&", "and")
      .replace(/\s+/g, "-")
      .replace(/[^\p{L}\p{N}\p{M}-]+/gu, "-")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  
    if (randomId) {
      const cid = customId({ randomLength: 2, lowerCase: true });
      const slug = `${str}-${cid}`;
      return slug;
    } else {
      return str;
    }
  }

  module.exports = {convertToSlug}