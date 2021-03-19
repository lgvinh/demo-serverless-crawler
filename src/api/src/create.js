module.exports.handler = async () => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Get products success"
    })
  };
  return response;
};
