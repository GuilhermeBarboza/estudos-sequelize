// para inserir os dados

(async () => {
  const Planeta = require('./models/Planeta');

  const newPlanet = await Planeta.create ({
    nome: 'Venus',
    posicao: 5
  })
  console.log(newPlanet);
})();