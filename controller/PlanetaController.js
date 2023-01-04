const Planeta = require('../models/Planeta');

module.exports = {
  async store(req, res) {
    const {nome, posicao} = req.body;

    const planeta = await Planeta.create({nome, posicao});
    return res.json(planeta);
  },

  async index(req, res) {
    const planetas = await Planeta.findAll();

    return res.json(planetas);
  },

  async put(req, res) {
    const {nome, tamanho, posicao} = req.body;

    await Planeta.update(
      {nome, tamanho, posicao},
      {
        where: {
          id: req.params.id,
        }
      }
    );

    return res.send('Atualização bem sucedida');
  },

  async delete(req, res) {
    await Planeta.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.send('Dado deletado');
  }

}