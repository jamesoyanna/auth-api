const  express = require('express');
const router = express.Router();

const {signup} = require("../controllers/authController");

const {basicAuth} = require('../middlewares/auth');
router.post('/signup', signup);

module.exports = router;