const express = require("express");
const router = express.Router();

// Liste des clients
router.get("/", (req, res) => {
  res.json({
    message: "Liste des clients VISA CONNECT",
    clients: []
  });
});

// Ajouter un client
router.post("/", (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Le nom et l'email sont obligatoires"
    });
  }

  res.status(201).json({
    message: "Client ajouté avec succès",
    client: { name, email, phone }
  });
});

module.exports = router;
