var mongoose = require('mongoose');

var nodSchema = new mongoose.Schema({
	day:String
});

var flightSchema = new mongoose.Schema({
	flightId : String,
	from : String,
	to : String,
	nonOperatingDays: [nodSchema],
	departureTime: String,
	arrivalTime: String,
	duration: String,
	class:[{
		classType: String,
		price: Number,
		noOfSeats: Number
	}]
});

var Flight = mongoose.model("Flight",flightSchema);

module.exports=Flight;