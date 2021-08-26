const express = require('express');
const router = express.Router();
const client = require('../connection');

client.connect();



//RETORNA TODOS OS USUARIOS
router.get('/', (req, res, next) =>{

    client.query(`Select * from usuarios`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//RETORNA O USUARIOS NO ID
router.get('/:id', (req, res, next) =>{

    client.query(`Select * from usuarios where id_usuario=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//INSERI UM USUARIOS
router.post('/', (req, res, next) =>{

    const usuarios = req.body;
    let insertQuery = `insert into usuarios("id_usuario", "nome_usuario", "senha_usuario") 
                       values(${usuarios.id}, '${usuarios.nome}', '${usuarios.senha}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message), console.log(usuarios.id), console.log(usuarios.nome) , console.log(usuarios.senha)}
    })
    client.end;
    
});

//ALTERA 
router.patch('/:id', (req, res, next) =>{
    
    let user = req.body;
    let updateQuery = `update usuarios
                       set id_usuario = '${user.id}',
                       nome_usuario = '${user.nome}',
                       senha_usuario = '${user.senha}'
                       where id_usuario = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message), console.log(usuarios.id), console.log(usuarios.nome) , console.log(usuarios.senha) }
    })
    client.end;

});

//DELETA
router.delete('/:id', (req, res, next) =>{

    let insertQuery = `delete from usuarios where id_usuario=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});


module.exports = router;
