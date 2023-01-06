const Satelite = require('../models/Satelite');
const Planeta = require('../models/Planeta');

module.exports = {
  async store (req, res) {
    const {planetaId} = req.params;
    const {nome, numSerie} = req.body;

    const planeta = await Planeta.findByPk(planetaId);

    if(!planeta){
      res.send('Dado inexistente');
    }

    const satelite = await Satelite.create({
      nome,
      numSerie,
      planetaId
    });
    return res.json(satelite);
  },

  async index (req, res) {
    const {planetaId} = await req.params;

    if(!planetaId){
      res.send('Dado inexistente');
    }
    
    const planeta = await Planeta.findByPk(planetaId, {
      include: Satelite
    });
    return res.json(planeta);
  }

}