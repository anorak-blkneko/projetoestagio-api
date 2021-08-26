
----------------CREATE TABLE----------------
--PESSOA
CREATE TABLE pessoa (
	id_pessoa SERIAL PRIMARY KEY,
    nome_pessoa varchar(100) NOT NULL
);

--CLIENTE
CREATE TABLE cliente(
	id_pessoa INT NOT NULL,
	cnpj char(14) NOT NULL,
	id_endereco INT NOT NULL,
	id_email INT NOT NULL,
	id_telefone INT NOT NULL,
	FOREIGN KEY(id_pessoa) REFERENCES pessoa(id_pessoa)
	FOREIGN KEY(id_endereco) REFERENCES endereco(id_endereco)
	FOREIGN KEY(id_email) REFERENCES email(id_email)
	FOREIGN KEY(id_telefone) REFERENCES telefone(id_telefone)
);

--FUNCIONARIO
CREATE TABLE funcionario(
	id_pessoa INT NOT NULL,
	cpf char(11) NOT NULL,
	id_endereco INT NOT NULL,
	id_email INT NOT NULL,
	id_telefone INT NOT NULL,
	FOREIGN KEY(id_pessoa) REFERENCES pessoa(id_pessoa)
	FOREIGN KEY(id_endereco) REFERENCES endereco(id_endereco)
	FOREIGN KEY(id_email) REFERENCES email(id_email)
	FOREIGN KEY(id_telefone) REFERENCES telefone(id_telefone)
);

--ENDEREÇO
CREATE TABLE endereco(
	id_endereco SERIAL NOT NULL,
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
	id_telefone SERIAL NOT NULL,
	id_pessoa INT NOT NULL,
	telefone VARCHAR(11) NOT NULL,
	FOREIGN KEY(id_pessoa) REFERENCES pessoa(id_pessoa)
);

--EMAIL
CREATE TABLE email(
	id_email SERIAL NOT NULL,
	id_pessoa INT NOT NULL,
	email VARCHAR(50) NOT NULL,
	FOREIGN KEY(id_pessoa) REFERENCES pessoa(id_pessoa)
);

--SERVIÇO
CREATE TABLE servico(
	id_servico SERIAL NOT NULL,
  nome VARCHAR(100) NOT NULL,
  valor DECIMAL(12,2) NOT NULL,
  duracao VARCHAR(100) NOT NULL,
	contratante_id INT NOT NULL,
	status VARCHAR(50) NOT NULL,
	FOREIGN KEY(id_pessoa) REFERENCES pessoa(id_pessoa)
);

--ORÇAMENTO
CREATE TABLE orcamento(
	id_orcamento SERIAL NOT NULL,
	id_cliente INT NOT NULL,
  id_funcionario INT NOT NULL,
  id_servico INT NOT NULL,
	data DATE NOT NULL,
  valor DECIMAL(12,2) NOT NULL,
	FOREIGN KEY(id_cliente) REFERENCES cliente(id_cliente)
  FOREIGN KEY(id_funcionario) REFERENCES funcionario(id_funcionario)
  FOREIGN KEY(id_servico) REFERENCES servico(id_servico)
);

----------------INSERTS----------------
INSERT INTO pessoa (nome_pessoa) VALUES ('Augusto');
INSERT INTO pessoa (nome_pessoa) VALUES ('Renan');

INSERT INTO cliente VALUES (1,'12345678901234', 1, 1, 1);


SELECT * FROM pessoa;
SELECT * FROM cliente;