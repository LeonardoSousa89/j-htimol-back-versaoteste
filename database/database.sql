CREATE DATABASE jh;
DROP DATABASE jh;

CREATE TABLE IF NOT EXISTS jhtimol(
    id SERIAL,
    nome VARCHAR(50),
    email VARCHAR(100),
    mensagem VARCHAR(3000)
);

INSERT INTO jhtimol VALUES(2,'Gilmar Mendes','mendesstf@gmail.com','excelente sistema');

SELECT * FROM jhtimol;