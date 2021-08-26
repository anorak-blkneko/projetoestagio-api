const express = require('express');
const router = express.Router();
const client = require('../connection');

client.connect();

//RETORNA TODOS OS TELEFONES
router.get('/', (req, res, next) =>{

    client.query(`Select * from telefone`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//RETORNA O TELEFONE NO ID
router.get('/:id', (req, res, next) =>{

    client.query(`Select * from telefone where id_telefone=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//INSERI UM TELEFONE
router.post('/', (req, res, next) =>{
    
    const telefones = req.body;
    let insertQuery = `insert into telefone ("id_pessoa", "telefone") 
                       values(${telefones.idpessoa}, '${telefones.telefone}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message), console.log(telefones.telefone)}
    })
    client.end;

});

//ALTERA 
router.patch('/:id', (req, res, next) =>{
    
    let user = req.body;
    let updateQuery = `update telefone set
                       id_pessoa = '${user.idpessoa}',
                       telefone = '${user.telefone}'
                       where id_telefone = ${req.params.id}`

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
    
    let insertQuery = `delete from telefone where id_telefone=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});


module.exports = router;
