CREATE DATABASE cli_gestion_usuarios;

USE cli_gestion_usuarios;

CREATE TABLE users (
    id VARCHAR(40) PRIMARY KEY,
    username VARCHAR(40),
    email VARCHAR(40),
    password VARCHAR(40)
);
