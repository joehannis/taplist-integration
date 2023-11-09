const getAuth = require('../models/getAuth');
const db = require('../bin/db');

const tapsController = async (req, res) => {
  try {
    const details = await getAuth();
    console.log('this is from tapsController');
    console.log(details);
    const auth_token = details[0].auth_token;
    const response = await fetch(
      `https://api.taplist.io/api/v1/venues/${venue}/taps`,
      {
        headers: { Authorization: `Token ${auth_token}` },
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error('Error occurred while fetching taps:', err);
    res.status(500).json({
      error: `An error occurred while fetching taps: ${err.message}`,
    });
  }
};

module.exports = tapsController;
