const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const info = {
    status: "Healthy",
    documentatioPath: "/api-docs/",
    apiVersion: "V1",
  };
  return res.status(200).json(info);
});

module.exports = router;
