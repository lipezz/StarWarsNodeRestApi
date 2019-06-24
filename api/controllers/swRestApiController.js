'use strict';

var mongoose = require('mongoose'), 
  planeta = mongoose.model('planeta');

class PlanetaController {  

  allPlanets(req, res) {
    planeta.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  createPlanet(req, res) {
    var newPlaneta = new planeta(req.body);
    newPlaneta.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  getPlanet(req, res) {
    planeta.findById(req.params.id, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  updatePlanet(req, res) {
    planeta.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  deletePlanet(req, res) {
    planeta.remove({
      _id: req.params.id
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Planeta deletado' });
    });
  };

  getSupposedIp(req,res){
    var Request = require("request");
    Request.get("http://httpbin.org/ip", (error, response, body) => {
      if(error) 
        res.send(err);
      res.json(body);
    });
  }

  getMovies(req,res){
    var Request = require("request");
    Request.get("http://httpbin.org/ip", (error, response, body) => {
      if(error) 
          return console.log(error);
      res.json(body);
    });
  }

  makePost(req,res){
    var Request = require("request");
    Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://httpbin.org/post",
        "body": JSON.stringify({
            "firstname": "Nic",
            "lastname": "Raboy"
        })
    }, (error, response, body) => {
        if(error) 
            return console.dir(error);        
        console.dir(JSON.parse(body));
    });
  }

}

module.exports = new PlanetaController();