let express = require('express');
let router = express.Router();
 
//Importar tablas
const usuarios = require('../controllers/usuario.controller.js');
const proyectos = require('../controllers/proyecto.controller.js');
const tareas = require('../controllers/tarea.controller.js');

//Tabla usuarios
router.post('/api/usuarios/create', usuarios.create);
router.get('/api/usuarios/onebyid/:id', usuarios.getUsuarioById);
router.put('/api/usuarios/update/:id', usuarios.updateById);
router.delete('/api/usuarios/delete/:id', usuarios.deleteById);

//tabla proyecto
router.post('/api/proyectos/create', proyectos.create);
router.get('/api/proyectos/onebyid/:id', proyectos.getUsuarioById);
router.put('/api/proyectos/update/:id', proyectos.updateById);
router.delete('/api/proyectos/delete/:id', proyectos.deleteById);

//tabla tarea
router.post('/api/tareas/create', tareas.create);
router.get('/api/tareas/onebyid/:id', tareas.getUsuarioById);
router.put('/api/tareass/update/:id', tareas.updateById);
router.delete('/api/tareas/delete/:id', tareas.deleteById);

module.exports = router;