const fs = require('fs'); // Módulo para manipular arquivos
const path = require('path'); // Caminho do arquivo
const filePath = path.join(__dirname, '../produtos.json');

// Função para carregar produtos do arquivo JSON
const loadProducts = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return []; // Se der erro (ex: arquivo não existe), retorna um array vazio
    }
};

// Função para salvar produtos no arquivo JSON
const saveProducts = (produtos) => {
    fs.writeFileSync(filePath, JSON.stringify(produtos, null, 2));
};

// Carregar os produtos na inicialização
let produtos = loadProducts();

exports.criarProduto = (req, res) => {
    const { nome, descricao, preco, codigoBarras } = req.body;
    const novoProduto = { id: produtos.length + 1, nome, descricao, preco, codigoBarras };
    
    produtos.push(novoProduto);
    saveProducts(produtos); // Salva no arquivo JSON
    
    res.status(201).json(novoProduto);
};

exports.listarProdutos = (req, res) => {
    res.json(produtos);
};

