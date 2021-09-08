
----------------CREATE TABLE----------------
--PESSOA
CREATE TABLE pessoa (
	id_pessoa SERIAL PRIMARY KEY,
    nome_pessoa varchar(100) NOT NULL
);

--ENDEREÇO
CREATE TABLE endereco(
	id_endereco SERIAL PRIMARY KEY NOT NULL,
	id_pessoa INT NOT NULL,
	uf CHAR(2) NOT NULL,
	complemento VARCHAR(50) NOT NULL,
	logradouro VARCHAR(50) NOT NULL,
	cep CHAR(8) NOT NULL,
	numero VARCHAR(10) NOT NULL,
	FOREIGN KEY(id_pessoa) REFERENCES pessoa(id_pessoa)
);


--TELEFONE
CREATE TABLE telefone(
	id_telefone SERIAL PRIMARY KEY NOT NULL,
	id_pessoa INT NOT NULL,
	telefone VARCHAR(11) NOT NULL,
	FOREIGN KEY(id_pessoa) REFERENCES pessoa(id_pessoa)
);




--EMAIL
CREATE TABLE email(
	id_email SERIAL PRIMARY KEY NOT NULL,
	id_pessoa INT NOT NULL,
	email VARCHAR(50) NOT NULL,
	FOREIGN KEY(id_pessoa) REFERENCES pessoa(id_pessoa)
);

--CLIENTE
CREATE TABLE cliente(
	id_pessoa INT PRIMARY KEY NOT NULL,
	cnpj char(14) NOT NULL,
	id_endereco INT NOT NULL,
	id_email INT NOT NULL,
	id_telefone INT NOT NULL,
	FOREIGN KEY(id_pessoa) REFERENCES pessoa(id_pessoa),
	FOREIGN KEY(id_endereco) REFERENCES endereco(id_endereco),	
	FOREIGN KEY(id_email) REFERENCES email(id_email),
	FOREIGN KEY(id_telefone) REFERENCES telefone(id_telefone)
);

--FUNCIONARIO
CREATE TABLE funcionario(
	id_pessoa INT PRIMARY KEY NOT NULL,
	cpf char(11) NOT NULL,
	id_endereco INT NOT NULL,
	id_email INT NOT NULL,
	id_telefone INT NOT NULL,
	FOREIGN KEY(id_pessoa) REFERENCES pessoa(id_pessoa),
	FOREIGN KEY(id_endereco) REFERENCES endereco(id_endereco),
	FOREIGN KEY(id_email) REFERENCES email(id_email),
	FOREIGN KEY(id_telefone) REFERENCES telefone(id_telefone)
);

--SERVIÇO
CREATE TABLE servico(
	id_servico SERIAL PRIMARY KEY NOT NULL,
  	nome VARCHAR(100) NOT NULL
);

--ORÇAMENTO
CREATE TABLE orcamento(
	id_orcamento SERIAL PRIMARY KEY NOT NULL,
	id_cliente INT NOT NULL,
  	id_funcionario INT NOT NULL,
  	id_servico INT NOT NULL,
	data_criacao DATE NOT NULL,
	data_entrega DATE,
  	valor DECIMAL(12,2) NOT NULL,
	status_andamento VARCHAR(50) NOT NULL,
	FOREIGN KEY(id_cliente) REFERENCES cliente(id_pessoa),
  	FOREIGN KEY(id_funcionario) REFERENCES funcionario(id_pessoa),
  	FOREIGN KEY(id_servico) REFERENCES servico(id_servico)
);


----------------INSERTS----------------
INSERT INTO pessoa (nome_pessoa) VALUES ('Augusto');
INSERT INTO pessoa (nome_pessoa) VALUES ('Renan');

INSERT INTO endereco (id_pessoa, uf, complemento, logradouro, cep, numero) VALUES (1, 'sp', 'casa', 'teste', '12345678', '111');

INSERT INTO telefone (id_pessoa, telefone) VALUES (1, '33433333');

INSERT INTO email (id_pessoa, email) VALUES (1, 'nome@gmail.com');

INSERT INTO cliente VALUES (1,'12345678901234', 1, 1, 1);

INSERT INTO servico (nome) VALUES ('serv1');

INSERT INTO orcamento (id_cliente, id_funcionario, id_servico, data_criacao, data_entrega, valor, status_andamento) VALUES (1,1,1, '2021-09-08', '2021-12-10', 1000, 'Em Andamento');



SELECT * FROM pessoa;
SELECT * FROM cliente;
SELECT * FROM endereco;
SELECT * FROM telefone;
SELECT * FROM email;
SELECT * FROM orcamento;
SELECT * FROM servico

----------------DROPS----------------
DROP TABLE pessoa;
DROP TABLE cliente;
DROP TABLE endereco;
DROP TABLE email;
DROP TABLE telefone;
DROP TABLE funcionario;

