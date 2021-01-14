const db = require('../database/index');

exports.authentication = (req, res, next) => {
  if (req.query.apiKey != process.env.AUTHENTICATION_KEY) {
    return res.json({
      message: 'Please provide valid API Key as ?apiKey=APIKEY',
    });
  }
  return next();
};

exports.checkForValueInQuery = (req, res, next) => {
  if (req.query.firstValue != null && req.query.secondValue != null) {
    return next();
  } else {
    return res.json({
      message:
        'Provide values for operations as ?firstValue=VALUE&secondValue=VALUE',
    });
  }
};

exports.addition = async (req, res) => {
  let result = parseInt(req.query.firstValue) + parseInt(req.query.secondValue);
  try {
    await db.execute(
      `INSERT INTO \`history\` (\`id\`, \`operation\`) VALUES (NULL, '${req.query.firstValue} + ${req.query.secondValue} = ${result}');`
    );
    res.json({ result });
  } catch (error) {
    res.json({ message: error.sqlMessage });
  }
};

exports.subtraction = async (req, res) => {
  let result = parseInt(req.query.firstValue) - parseInt(req.query.secondValue);
  try {
    await db.execute(
      `INSERT INTO \`history\` (\`id\`, \`operation\`) VALUES (NULL, '${req.query.firstValue} - ${req.query.secondValue} = ${result}');`
    );
    res.json({ result });
  } catch (error) {
    res.json({ message: error.sqlMessage });
  }
};

exports.multiplication = async (req, res) => {
  let result = parseInt(req.query.firstValue) * parseInt(req.query.secondValue);
  try {
    await db.execute(
      `INSERT INTO \`history\` (\`id\`, \`operation\`) VALUES (NULL, '${req.query.firstValue} * ${req.query.secondValue} = ${result}');`
    );
    res.json({ result });
  } catch (error) {
    res.json({ message: error.sqlMessage });
  }
};

exports.division = async (req, res) => {
  let result = parseInt(req.query.firstValue) / parseInt(req.query.secondValue);
  try {
    await db.execute(
      `INSERT INTO \`history\` (\`id\`, \`operation\`) VALUES (NULL, '${req.query.firstValue} / ${req.query.secondValue} = ${result}');`
    );
    res.json({ result });
  } catch (error) {
    res.json({ message: error.sqlMessage });
  }
};

exports.history = (req, res) => {};
