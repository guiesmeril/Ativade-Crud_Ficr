const { Tarefa } = require('../../src/models');

module.exports = {
    async index(req, res) {
        const tarefa = await Tarefa.findAll();
        return res.json(tarefa);

    },
    async create(req, res) {
        const tarefa = await Tarefa.create(req.body);
        return res.send(req.body);
    },
    async detalhe(req, res) {
        const tarefa = await Tarefa.findByPk(req.params.id);
        return res.json(tarefa);

    },
    async update(req, res) {
        const tarefa = await Tarefa.update(req.body, {
            where: {
                id: req.params.id
            }

        });
        res.json(tarefa);
    },
    async delete(req, res) {
        const tarefa = await Tarefa.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.send('excluído com sucesso');
    }

};