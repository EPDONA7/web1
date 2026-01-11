const bcrypt = require("bcrypt");
const db = require("./db");

(async () => {
  const hash = await bcrypt.hash("admin123", 10);
  db.query(
    "INSERT INTO admin (username, password_hash, allowed_ip) VALUES (?,?,?)",
    ["admin", hash, "127.0.0.1"],
    () => {
      console.log("Admin created");
      process.exit();
    }
  );
})();
