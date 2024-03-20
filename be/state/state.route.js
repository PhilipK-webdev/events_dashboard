const express = require("express");
const router = express.Router();
const service = require("./state.service");
//check for useragent.express - express-useragent
router.route("/").get(async (req, res) => {
  try {
    const result = await service.stateService(req);
    return res.json(result);
  } catch (error) {}
});

module.exports = router;
