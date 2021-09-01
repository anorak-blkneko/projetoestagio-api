const express = require('express');
const router = express.Router();
const client = require('../connection');

client.connect();

//RETORNA TODOS AS PESSOAS
router.get('/', (req, res, next) =>{

    client.query(`Select * from pessoa`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//RETORNA O PESSOA NO ID
router.get('/:id', (req, res, next) =>{

    client.query(`Select * from pessoa where id_pessoa=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//INSERI UM PESSOA
router.post('/', (req, res, next) =>{
    
    const pessoas = req.body;
    let insertQuery = `insert into pessoa ("id_pessoa", "nome_pessoa") 
                       values(${pessoas.idpessoa}, '${pessoas.nome}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message), console.log(pessoas.nome)}
    })
    client.end;

});

//ALTERA 
router.patch('/:id', (req, res, next) =>{
    
    let user = req.body;
    let updateQuery = `update pessoa set
                       id_pessoa = '${user.idpessoa}',
                       nome = '${user.nome}'
                       where id_pessoa = ${req.params.id}`

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
    
    let insertQuery = `delete from pessoa where id_pessoa=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});


module.exports = router;
