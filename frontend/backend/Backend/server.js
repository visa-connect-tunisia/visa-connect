JavaScript
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const healthRoute = require("./routes/health");

app.use("/api/health", healthRoute);

app.get("/", (req, res) => {
  res.json({
    application: "VISA CONNECT",
    status: "API opérationnelle"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`VISA CONNECT démarré sur le port ${PORT}`);
});
