const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    application: "VISA CONNECT",
    status: "OK",
    message: "Le serveur fonctionne correctement"
  });
});

module.exports = router;
