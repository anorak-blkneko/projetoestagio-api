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

    client.query(`Select * from funcionario where id_pessoa=${req.params.id}`, (err, result)=>{
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
                       values(${funcionarios.id}, '${funcionarios.cpf}', ${funcionarios.idend}, ${funcionarios.idemail}, ${funcionarios.idtel})`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message), console.log(funcionarios.id), console.log(funcionarios.cpf)}
    })
    client.end;
    
});

//ALTERA 
router.patch('/:id', (req, res, next) =>{
    
    let user = req.body;
    let updateQuery = `update funcionario
                       set id_pessoa = '${user.id}',
                       cpf = '${user.cpf}',
                       id_endereco = '${user.idend}',
                       id_email = '${user.idemail}',
                       id_telefone = '${user.idtel}'
                       where id_pessoa = ${req.params.id}`

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

    let insertQuery = `delete from funcionario where id_pessoa=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});


module.exports = router;
