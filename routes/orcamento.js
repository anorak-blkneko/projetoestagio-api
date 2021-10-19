const express = require('express');
const router = express.Router();
const client = require('../connection');

client.connect();

//RETORNA TODOS OS ORÇAMENTOS
router.get('/', (req, res, next) =>{

    client.query(`Select * from orcamento`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//RETORNA O ORCAMENTO NO ID
router.get('/:id', (req, res, next) =>{

    client.query(`Select * from orcamento where id_orcamento=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//INSERI UM ORCAMENTO
router.post('/', (req, res, next) =>{
    
    const orcamentos = req.body;
    let insertQuery = `insert into orcamento ("id_cliente", "id_funcionario", "id_servico", "data_criacao", "data_entrega", "valor", "status_andamento") 
                       values(${orcamentos.id_cliente}, ${orcamentos.id_funcionario}, ${orcamentos.id_servico}, '${orcamentos.data_criacao}', '${orcamentos.data_entrega}', ${orcamentos.valor}, '${orcamentos.status_andamento}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message)}
    })
    client.end;

});

//ALTERA 
router.patch('/:id', (req, res, next) =>{
    
    let user = req.body;
    let updateQuery = `update orcamento set
                       id_cliente = '${user.id_cliente}',
                       id_funcionario = '${user.id_funcionario}',
                       id_servico = '${user.id_servico}',
                       data_criacao = '${user.data_criacao}',
                       data_entrega = '${user.data_entrega}',
                       valor = '${user.valor}',
                       status_andamento = '${user.status_andamento}'
                       where id_orcamento = ${req.params.id}`

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
    
    let insertQuery = `delete from orcamento where id_orcamento=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});


module.exports = router;
