const express = require("express");
const router = express.Router();
const { authen } = require("../acc/protect-middleware");
const sawtoothCli = require("./sawtooth-cli");

router.get("/encrypted-data", authen, async (req, res) => {
  try {
    const publicKeyHex = req.query.publicKeyHex;
    console.log(publicKeyHex);
    const encryptData = await sawtoothCli.fetchEncryptDataOfAccount(publicKeyHex);
    res.json(encryptData);
  } catch (error) {
    res.status(500).json(error.toString());
  }
});

module.exports = router;