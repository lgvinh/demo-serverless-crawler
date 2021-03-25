const {
  getProducts,
} = require("common-crawler/src/application/crawlerManager");
const { context } = require("../../utils");
const { HTTP_STATUS_CODE } = require("../../utils/constant");

module.exports.getProducts = async () => {
  try {
    const result = await getProducts();
    console.log("result :>> ", result);
    return context().response({
      statusCode: HTTP_STATUS_CODE.SUCCESS,
      body: result,
    });
  } catch (error) {
    console.log("error :>> ", error);
  }
};
