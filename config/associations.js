const Planeta = require('../models/Planeta');
const Satelite = require('../models/Satelite');
const Cap = require('../models/Cap');
const Nave = require('../models/Nave');

Planeta.hasOne(Satelite, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// Planeta.hasMany(Satelite, {
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE'
// });


Satelite.belongsTo(Planeta, {
  foreingKey: 'planetaId',
  as: 'planetas'
});

Cap.belongsToMany(Nave, {
  foreingKey: 'capId',
  through: 'capNave',
  as: 'naves'
});

Nave.belongsToMany(Cap, {
  foreingKey: 'naveId',
  through: 'capNave',
  as: 'caps'
})

module.exports = {Planeta, Satelite};