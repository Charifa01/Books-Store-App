const router = require('express').Router();

const { addComment , getUsers } = require('../controllers/userControler');

router.post('/addComment', addComment);
router.get('/allUsers', getUsers);


module.exports = router;