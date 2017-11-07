var express = require('express');
var router = express.Router();
var hotelControllers = require('../controllers/hotels.controllers.js');


router.route('/hotels').get(hotelControllers.getAllHotels);
router.route('/hotels/:hotelId').get(hotelControllers.getHotel);

router.route('/hotels/add')
    .post(hotelControllers.addHotel);


module.exports = router;