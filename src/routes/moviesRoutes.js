const express = require('express');
const router = express.Router();
const {list, new: newest, recomended, detail, add, create, edit, update, delete: remove, destroy} = require('../controllers/moviesController');

router.get('/movies', list);
router.get('/movies/new', newest);
router.get('/movies/recommended', recomended);
router.get('/movies/detail/:id', detail);
//Rutas exigidas para la creación del CRUD
router.get('/movies/add', add);
router.post('/movies/create', create);
router.get('/movies/edit/:id', edit);
router.put('/movies/update/:id', update);
router.get('/movies/delete/:id', remove);
router.delete('/movies/delete/:id', destroy);

module.exports = router;