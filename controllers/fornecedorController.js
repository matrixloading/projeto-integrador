const fornecedores = [];

exports.criarFornecedor = (req, res) => {
    const { nome, cnpj, endereco, contato } = req.body;
    const novoFornecedor = { id: fornecedores.length + 1, nome, cnpj, endereco, contato };
    fornecedores.push(novoFornecedor);
    res.status(201).json(novoFornecedor);
};

exports.listarFornecedores = (req, res) => {
    res.json(fornecedores);
};
