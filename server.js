require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./db");

const app = express();
app.use(express.json());

/* TEST */
app.get("/", (req, res) => {
  res.send("Giveaway server running");
});

/* REDEEM */
app.post("/redeem", (req, res) => {
  const { code } = req.body;

  db.query(
    "SELECT * FROM redeem_codes WHERE code=?",
    [code],
    (err, result) => {
      if (result.length === 0)
        return res.json({ error: "Invalid code" });

      if (result[0].is_used)
        return res.json({ error: "Already used" });

      db.query(
        "UPDATE redeem_codes SET is_used=1 WHERE code=?",
        [code]
      );

      res.json({ message: "Redeemed successfully" });
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
