const express = require('express');
const router = express.Router();
const Greenfield = require('../models/greenfield');

// @Description: Get price for different vehicles
// @Method: GET
// @Access: Public
router.get('/', (req, res) => {
    const fixed_price = 15
    const minivan_price = fixed_price + (req.body.estimated_distance - 10) * 2;
    const sedan_price = fixed_price + (req.body.estimated_distance - 10) * 1;
    res.status(200).json({success: true, vehicle_price: [
        {vehicle_type: "minivan",
        total_price: minivan_price},
        {vehicle_type: "sedan",
        total_price: sedan_price}
    ]});
});

module.exports = router;