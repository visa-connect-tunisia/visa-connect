const express = require("express");
const router = express.Router();

// Liste des demandes de visa
router.get("/", (req, res) => {
  res.json({
    message: "Liste des dossiers VISA CONNECT",
    visas: []
  });
});

// Créer un dossier de visa
router.post("/", (req, res) => {
  const { clientId, destination, visaType, travelDate } = req.body;

  if (!clientId || !destination || !visaType) {
    return res.status(400).json({
      error: "Client, destination et type de visa obligatoires"
    });
  }

  res.status(201).json({
    message: "Dossier créé avec succès",
    visa: {
      clientId,
      destination,
      visaType,
      travelDate,
      status: "En préparation"
    }
  });
});

module.exports = router;
