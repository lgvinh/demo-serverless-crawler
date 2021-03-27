const axios = require("axios");

const mockProducts = require("../mock/data.json");
const { getApiUrl } = require("../utils");

const { TEST } = process.env;

module.exports.handler = async () => {
  const postProductUrl = getApiUrl();
  let data = [];
  if (TEST === "true") {
    data = mockProducts;
  }
  try {
    await axios.default.post(`${postProductUrl}/products`, data);
  } catch (error) {
    console.error("Crawler fetching error :>> ", error);
  }
};
