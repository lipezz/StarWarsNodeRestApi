'use strict';

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var planetaSchema = new schema({
  nome: {
    type: String,
    required: 'Informe nome do planeta'
  },
  clima: {
    type: String,
    required: 'Informe clima do planeta'
  },
  terreno: {
    type: String,
    required: 'Informe terreno do planeta'
  },
  swApiId: {
    type: Number,
    required: 'Informe swApiId do planeta'
  },
  filmes: {
    type: [{
      type: String
    }]
  },  
  dataCriacao: {
    type: Date,
    default: Date.now
  }  
});

module.exports = mongoose.model('planeta', planetaSchema);