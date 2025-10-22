CREATE DATABASE teste;
USE teste;

CREATE TABLE usuario (
	id INT PRIMARY key AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45)
);

ALTER TABLE usuario RENAME COLUMN nome TO nome_completo;
ALTER TABLE usuario ADD COLUMN tipo_usuario VARCHAR(40);

select * from usuario;
