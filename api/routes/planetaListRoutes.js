module.exports = function(app) {

   var planetaController = require('../controllers/swRestApiController');

   // todoList Routes
   app.route('/planetas')
      .get(planetaController.allPlanets)
      .post(planetaController.createPlanet);

   app.route('/planetas/:id')
      .get(planetaController.getPlanet)
      .put(planetaController.updatePlanet)
      .delete(planetaController.deletePlanet);

   app.route('/ip')
      .get(planetaController.getSupposedIp);   
      
   };        