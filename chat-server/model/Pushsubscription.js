const mongoose = require('mongoose');
const subsSchema = new mongoose.Schema({
    id:{
        type: String,
        unique: true,
    },
    userid:{
        type: String,
        required: [true, 'Please add the userid'],
    },
	endpoint: {
		type: String,
		required: [true, 'Please add the endpoint'],
	},
	expirationTime: {
		type: String,
		default: null,
	},
	
	keys: {
		type: Object,
		default: {},
	},
	
});

module.exports = mongoose.model('pushsubscription', subsSchema);