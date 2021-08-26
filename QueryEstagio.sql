CREATE TABLE pessoa (
	id_pessoa SERIAL PRIMARY KEY,
    nome_pessoa varchar(100) NOT NULL
);

CREATE TABLE cliente(
	id_pessoa INT NOT NULL,
	cnpj char(14),
	id_endereco INT NOT NULL,
	id_email INT NOT NULL,
	id_telefone INT NOT NULL,
	FOREIGN KEY(id_pessoa) REFERENCES pessoa(id_pessoa)
	FOREIGN KEY(id_endereco) REFERENCES endereco(id_endereco)
	FOREIGN KEY(id_email) REFERENCES email(id_email)
	FOREIGN KEY(id_telefone) REFERENCES telefone(id_telefone)
);

CREATE TABLE endereco(
	id_endereco SERIAL NOT NULL,
	id_pessoa INT NOT NULL,
	uf CHAR(2),
	complemento VARCHAR(50) NOT NULL,
	logradouro VARCHAR(50) NOT NULL,
	cep CHAR(8) NOT NULL,
	numero VARCHAR(10) NOT NULL,
	FOREIGN KEY(id_pessoa) REFERENCES pessoa(id_pessoa)
);

CREATE TABLE telefone(
	id_telefone SERIAL NOT NULL,
	id_pessoa INT NOT NULL,
	telefone VARCHAR(11),
	FOREIGN KEY(id_pessoa) REFERENCES pessoa(id_pessoa)
);

CREATE TABLE email(
	id_email SERIAL NOT NULL,
	id_pessoa INT NOT NULL,
	email VARCHAR(50),
	FOREIGN KEY(id_pessoa) REFERENCES pessoa(id_pessoa)
);

INSERT INTO pessoa (nome_pessoa) VALUES ('Augusto');
INSERT INTO pessoa (nome_pessoa) VALUES ('Renan');

INSERT INTO cliente VALUES (1,'12345678901234', 1, 1, 1);


SELECT * FROM pessoa;
SELECT * FROM cliente;