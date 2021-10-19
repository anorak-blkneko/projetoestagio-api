const express = require('express');
const router = express.Router();
const client = require('../connection');

client.connect();



//RETORNA TODOS OS FUNCIONARIO
router.get('/', (req, res, next) =>{

    client.query(`Select * from funcionario`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//RETORNA O FUNCIONARIO NO ID
router.get('/:id', (req, res, next) =>{

    client.query(`Select * from funcionario where id_funcionario=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//INSERI UM FUNCIONARIO
router.post('/', (req, res, next) =>{

    const funcionarios = req.body;
    let insertQuery = `insert into funcionario("id_pessoa", "cpf", "id_endereco", "id_email", "id_telefone") 
                       values(${funcionarios.id_pessoa}, '${funcionarios.cpf}', ${funcionarios.id_endereco}, ${funcionarios.id_email}, ${funcionarios.id_telefone})`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message), console.log(funcionarios.id_pessoa), console.log(funcionarios.cpf)}
    })
    client.end;
    
});

//ALTERA 
router.patch('/:id', (req, res, next) =>{
    
    let user = req.body;
    let updateQuery = `update funcionario set
                       id_pessoa = '${user.id_pessoa}',
                       cpf = '${user.cpf}',
                       id_endereco = '${user.id_endereco}',
                       id_email = '${user.id_email}',
                       id_telefone = '${user.id_telefone}'
                       where id_funcionario = ${req.params.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message), console.log(user.id_pessoa)}
    })
    client.end;

});

//DELETA
router.delete('/:id', (req, res, next) =>{

    let insertQuery = `delete from funcionario where id_funcionario=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});


module.exports = router;
