const {
  products: { search },
} = require("common-crawler/src/application/crawlerManager");
const { context } = require("../../utils");
const { HTTP_STATUS_CODE } = require("../../utils/constant");

module.exports.getProducts = async (event) => {
  const ctx = context(event);
  const { query } = ctx.request.queryParameters;

  const requestBody = ctx.getPagination();

  if (query) {
    requestBody.query = {
      bool: {
        should: [{ match: { name: query } }, { match: { description: query } }],
      },
    };
  }
  try {
    const result = await search(requestBody);
    return ctx.response({
      statusCode: HTTP_STATUS_CODE.SUCCESS,
      body: result,
    });
  } catch (error) {
    console.log("error :>> ", error);
    return ctx.response({
      statusCode: HTTP_STATUS_CODE.SERVER_ERROR,
    });
  }
};
