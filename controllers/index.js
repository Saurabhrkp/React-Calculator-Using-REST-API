const db = require('../database/index');

const saveToDB = async (operation, firstValue, secondValue, result) => {
  try {
    const promise = await db.execute(
      `INSERT INTO \`history\` (\`id\`, \`operation\`) VALUES (NULL, '${firstValue} ${operation} ${secondValue} = ${result}');`
    );
    return Promise.resolve(promise);
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.authentication = (req, res, next) => {
  if (req.body.apiKey !== process.env.AUTHENTICATION_KEY) {
    return res.json({
      message: 'Please provide valid API Key as apiKey: APIKEY',
    });
  }
  return next();
};

exports.checkForValueInBody = (req, res, next) => {
  if (req.body.firstValue !== null && req.body.secondValue !== null) {
    return next();
  } else {
    return res.json({
      message:
        'Provide values for operations as firstValue: VALUE secondValue: VALUE',
    });
  }
};

exports.addition = async (req, res) => {
  let result = parseInt(req.body.firstValue) + parseInt(req.body.secondValue);
  try {
    await saveToDB('+', req.body.firstValue, req.body.secondValue, result);
    res.json({ result });
  } catch (error) {
    res.json({ message: error.sqlMessage });
  }
};

exports.subtraction = async (req, res) => {
  let result = parseInt(req.body.firstValue) - parseInt(req.body.secondValue);
  try {
    await saveToDB('-', req.body.firstValue, req.body.secondValue, result);
    res.json({ result });
  } catch (error) {
    res.json({ message: error.sqlMessage });
  }
};

exports.multiplication = async (req, res) => {
  let result = parseInt(req.body.firstValue) * parseInt(req.body.secondValue);
  try {
    await saveToDB('*', req.body.firstValue, req.body.secondValue, result);
    res.json({ result });
  } catch (error) {
    res.json({ message: error.sqlMessage });
  }
};

exports.division = async (req, res) => {
  let result = parseInt(req.body.firstValue) / parseInt(req.body.secondValue);
  try {
    await saveToDB('/', req.body.firstValue, req.body.secondValue, result);
    res.json({ result });
  } catch (error) {
    res.json({ message: error.sqlMessage });
  }
};

exports.history = async (req, res) => {
  try {
    let rows = await db.execute('SELECT * FROM `history`');
    let historyArray = [];
    rows[0].map((row) => historyArray.push(Object.values(row)));
    res.json({ historyArray });
  } catch (error) {
    console.error(error);
    res.json({ message: error.sqlMessage });
  }
};

exports.clearAllHistory = async (req, res) => {
  try {
    await db.execute('TRUNCATE TABLE `history`');
    res.json({ message: 'Deleted all operation records' });
  } catch (error) {
    console.error(error);
    res.json({ message: error.sqlMessage });
  }
};

exports.deleteById = async (req, res) => {
  let id = req.body.id;
  try {
    await db.execute(`DELETE FROM \`history\` WHERE \`id\`=${id};`);
    res.json({ message: `Deleted operation by ID: ${id}` });
  } catch (error) {
    console.error(error);
    res.json({ message: error.sqlMessage });
  }
};
