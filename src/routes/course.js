const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/courseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);

router.get('/update/:id', courseController.update)
router.put('/:id', courseController.saveUpdate)
router.delete('/:id', courseController.delete)
module.exports = router;