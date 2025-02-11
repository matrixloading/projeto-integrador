const associacoes = [];

exports.associarFornecedorProduto = (req, res) => {
    const { produtoId, fornecedorId } = req.body;
    const novaAssociacao = { id: associacoes.length + 1, produtoId, fornecedorId };
    associacoes.push(novaAssociacao);
    res.status(201).json(novaAssociacao);
};

exports.listarAssociacoes = (req, res) => {
    res.json(associacoes);
};

