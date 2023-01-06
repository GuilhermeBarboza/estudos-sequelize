const Nave = require('../models/Nave');
const Cap = require('../models/Cap');

module.exports = {
  async store (req, res) {
    const {capId} = req.params;
    const {nome, capacidade} = req.body;
    const cap = await Cap.findByPk(capId);

    if(!cap){
      res.send('Erro!! Informação inexistente');
    }

    const [naves] = await Nave.findOrCreate({
      where: {nome, capacidade}
    })
    await cap.addNave(naves);
    return res.json(naves);
  },

  async index (req,res) {
    const {capId} = req.params;
    
    const cap = await Cap.findByPk(capId, {
      include: {association: 'naves'}
    })

    return res.json(cap);
  }
}