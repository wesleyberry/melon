DROP DATABASE IF EXISTS melons_db;
CREATE DATABASE melons_db;
USE melons_db;

CREATE TABLE melons(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    melon_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL
);