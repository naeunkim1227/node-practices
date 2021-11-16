const express = require('express');
const controller = require('../controllers/emaillist');
const router = express.Router();


//controller를 만들어 index 함수를 호출한다. 
router.route('').get(controller.index);
router.route('/add').get(controller.form);
router.route('/add').post(controller.add);

module.exports = router;