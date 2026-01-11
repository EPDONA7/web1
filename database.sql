CREATE DATABASE giveaway_db;
USE giveaway_db;

CREATE TABLE admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  password_hash VARCHAR(255),
  allowed_ip VARCHAR(50)
);

CREATE TABLE giveaways (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  description TEXT,
  reward VARCHAR(100)
);

CREATE TABLE redeem_codes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(50) UNIQUE,
  giveaway_id INT,
  is_used BOOLEAN DEFAULT FALSE,
  used_at TIMESTAMP NULL,
  FOREIGN KEY (giveaway_id) REFERENCES giveaways(id)
);
