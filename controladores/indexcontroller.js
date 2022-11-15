//requires     funcion require() 

const db = require('../database/models')
const op = db.Sequelize.Op;

//metodos

const indexController = {
  home: function(req, res) {
    db.Posteo.findAll({
      include: {
        all: true,
        nested: true
      },
      order:[['id', 'DESC']]
    })
    .then((posteos)=>{
      // res.send(posteos)
      res.render('index', {posteos: posteos})
    })
      //res.render('index', {posteos: index.posteos});
    },
    busqueda: function(req, res) {

      let busqueda = req.query.search

      db.Posteo.findAll({
        include: {
          all: true,
          nested: true
        },
        order:[['id', 'DESC']],
        where: {
          texto_imagen: {[op.like] : "%" + busqueda + "%"}
        }
      })
      .then((posteos)=>{
        // res.send(posteos)
        res.render('resultadoBusqueda', {posteos: posteos});
      })

    },
}

//exportaciones ---  objeto nativo .propiedad y variable

module.exports = indexController;