const Cap = require('../models/Cap');

module.exports = {
  async store (req, res) {
    const {nome, numRegistro} = req.body;

    const cap = await Cap.create({nome, numRegistro});
    return res.json(cap);
  },

  async index (req,res) {
    const cap = await Cap.findAll();
    
    return res.json(cap);
  }
}