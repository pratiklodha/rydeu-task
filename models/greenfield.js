const mongoose = require('mongoose');

const GreenfieldSchema = new mongoose.Schema({
    city: {
        type: String,
        required: [true, 'Please add city'],
        trim: true
    },
    organization_id: {
        type: Number,
        required: [true, 'Please add organization ID']
    },
    estimated_distance: {
        type: Number,
        required: [true, 'Please add estimated distance']
    },
    total_hours: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Greenfield', GreenfieldSchema);