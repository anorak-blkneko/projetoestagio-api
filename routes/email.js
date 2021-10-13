const express = require('express');
const router = express.Router();
const client = require('../connection');

client.connect();

//RETORNA TODOS OS EMAIL
router.get('/', (req, res, next) =>{

    client.query(`Select * from email`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//RETORNA O EMAIL NO ID
router.get('/:id', (req, res, next) =>{

    client.query(`Select * from email where id_email=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//INSERI UM EMAIL
router.post('/', (req, res, next) =>{
    
    const emails = req.body;
    let insertQuery = `insert into email ("id_pessoa", "email") 
                       values(${emails.id_pessoa}, '${emails.email}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message), console.log(emails.email)}
    })
    client.end;

});

//ALTERA 
router.patch('/:id', (req, res, next) =>{
    
    let user = req.body;
    let updateQuery = `update email set
                       id_pessoa = '${user.id_pessoa}',
                       email = '${user.email}'
                       where id_email = ${req.params.id}`

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
    
    let insertQuery = `delete from email where id_email=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});


module.exports = router;
