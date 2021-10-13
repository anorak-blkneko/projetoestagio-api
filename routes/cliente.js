const express = require('express');
const router = express.Router();
const client = require('../connection');

client.connect();

//RETORNA TODOS OS CLIENTES
router.get('/', (req, res, next) =>{

    client.query(`Select * from cliente`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//RETORNA O CLIENTE NO ID
router.get('/:id', (req, res, next) =>{

    client.query(`Select * from cliente where id_cliente=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//INSERI UM CLIENTE
router.post('/', (req, res, next) =>{
    
    const clientes = req.body;
    let insertQuery = `insert into cliente ("id_pessoa", "cnpj", "id_endereco", "id_email", "id_telefone") 
                       values(${clientes.id_pessoa}, '${clientes.cnpj}', ${clientes.id_endereco}, ${clientes.id_email}, ${clientes.id_telefone})`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message), console.log(clientes.cnpj)}
    })
    client.end;

});

//ALTERA 
router.patch('/:id', (req, res, next) =>{
    
    let user = req.body;
    let updateQuery = `update cliente set
                       id_pessoa = '${user.id_pessoa}',
                       cnpj = '${user.cnpj}',
                       id_endereco = '${user.id_endereco}',
                       id_email = '${user.id_email}',
                       id_telefone = '${user.id_telefone}'
                       where id_cliente = ${req.params.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});

//DELETA
router.delete('/:id', (req, res, next) =>{
    
    let insertQuery = `delete from cliente where id_cliente=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});


module.exports = router;
