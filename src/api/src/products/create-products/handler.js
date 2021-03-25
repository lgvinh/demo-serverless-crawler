const {
  products: { bulk },
} = require("common-crawler/src/application/crawlerManager");

const { context } = require("../../utils");
const { HTTP_STATUS_CODE } = require("../../utils/constant");

module.exports.createProducts = async (event) => {
  const ctx = context(event);
  let products = ctx.request.body;

  try {
    await bulk(products);
    return ctx.response({
      statusCode: HTTP_STATUS_CODE.CREATED_SUCCESSFULLY,
      body: {
        message: "Created successfully",
      },
    });
  } catch (error) {
    console.log("error :>> ", error);
    return ctx.response({
      statusCode: HTTP_STATUS_CODE.SERVER_ERROR,
    });
  }
};
