raiseHand = (req, res) => {
  const body = req.body

  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'Bad Request',
      })
  }

  console.log(body);

  return res.status(201).json({
    success: true,
    data_package: 1,
    message: 'sup',
  });
}
module.exports = { raiseHand };