require("dotenv").config();
const express = require("express");
const { Client } = require("discord.js");

const app = express();
const port = process.env.PORT || 10000; // Render gebruikt een dynamische poort

const client = new Client({ intents: [] });

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { botStatus: client.user ? "✅ Online" : "❌ Offline" });
});

app.listen(port, () => {
  console.log(`🌍 Dashboard draait op poort ${port}`);
});