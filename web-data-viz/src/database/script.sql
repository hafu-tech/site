CREATE DATABASE teste;
USE teste;

CREATE TABLE usuario (
	id INT PRIMARY key AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45)
);
