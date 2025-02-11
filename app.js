const express = require('express');
const app = express();

const produtoController = require('./controllers/produtoController');
const fornecedorController = require('./controllers/fornecedorController');
const associacaoController = require('./controllers/associacaoController');

app.use(express.json());

app.post('/produtos', produtoController.criarProduto);
app.get('/produtos', produtoController.listarProdutos);

app.post('/fornecedores', fornecedorController.criarFornecedor);
app.get('/fornecedores', fornecedorController.listarFornecedores);

app.post('/associacoes', associacaoController.associarFornecedorProduto);
app.get('/associacoes', associacaoController.listarAssociacoes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
