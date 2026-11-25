const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Bienvenue sur VISA CONNECT",
    status: "API opérationnelle"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`VISA CONNECT démarré sur le port ${PORT}`);
});
