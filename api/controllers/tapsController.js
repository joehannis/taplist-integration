const Auth = require("../models/auth");

const tapsController = async (req, res) => {
  try {
    const details = await Auth.find();
    const venue = details[0].venue;
    const auth_token = details[0].auth_token;
    const response = await fetch(
      `https://api.taplist.io/api/v1/venues/${venue}/taps`,
      {
        headers: { Authorization: `Token ${auth_token}` },
      }
    );
    const data = await response.json(); // Use response.json() here
    console.log("response:", data);
    res.status(200).json(data);
  } catch (err) {
    console.error("Error occurred while fetching taps:", err);
    res.status(500).json({
      error: `An error occurred while fetching taps: ${err.message}`,
    });
  }
};

module.exports = tapsController;
