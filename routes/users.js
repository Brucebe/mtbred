var express = require('express');
var router = express.Router();
let userController = require('../controladores/userController')

let multer = require('multer');
let path = require('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/usuarios'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                /* imgPerfil-456456456456456.png  */             
    }
});

let upload = multer({storage: storage});

/* GET users listing. */
router.get('/login', userController.login);
router.get('/miPerfil/:id', userController.miPerfil);
router.get('/registracion', userController.registracion);
router.get('/editarPerfil', userController.editarPerfil);
router.get('/detalleUsuario/:id', userController.detalleUsuario);
router.post('/registrarUsuario', upload.single('photo'), userController.registrarUsuario);
router.post('/signin', userController.signin);
router.get('/logout', userController.logout);




module.exports = router;