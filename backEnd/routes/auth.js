const {Register} = require('../controllers/auth');
const {Login} = require('../controllers/auth');


const router = require('express').Router();


router.post('/register',Register);
router.post('/Login',Login);



module.exports = router


