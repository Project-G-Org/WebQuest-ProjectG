DROP DATABASE IF EXISTS users;

CREATE DATABASE users;

CREATE TABLE students (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    password VARCHAR(18) NOT NULL,
    is_admin BIT DEFAULT 0,
    data_Criação DATE DEFAULT GETDATE(),
    pontuation int(5) NOT NULL
);