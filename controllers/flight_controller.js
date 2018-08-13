var Flight = require('../models/flightSchema');

module.exports = {
	create(req,res){
		Flight.create({
		
			flightId : req.body.flightId,
			from : req.body.from,
			to : req.body.to,
			nonOperatingDays: req.body.nonOperatingDays,
			departureTime: req.body.departureTime,
			arrivalTime: req.body.arrivalTime,
			duration: req.body.duration,
			class:[{
				classType: req.body.class[0].classType,
				price: req.body.class[0].price,
				noOfSeats: req.body.class[0].noOfSeats
			},
			{
				classType: req.body.class[1].classType,
				price: req.body.class[1].price,
				noOfSeats: req.body.class[1].noOfSeats
			},
			{
				classType: req.body.class[2].classType,
				price: req.body.class[2].price,
				noOfSeats: req.body.class[2].noOfSeats
			}]
			}).then(function(add){
				if(!add){
					res.status(400).send();
				}
				else{
					res.status(200).send(add);
				}
			});

	},
	update(req,res){
		Flight.findOneAndUpdate({_id: req.params.id},{$set:{
		
			flightId : req.body.flightId,
			from : req.body.from,
			to : req.body.to,
			nonOperatingDays: req.body.nonOperatingDays,
			departureTime: req.body.departureTime,
			arrivalTime: req.body.arrivalTime,
			duration: req.body.duration,
			class:[{
				classType: req.body.class[0].classType,
				price: req.body.class[0].price,
				noOfSeats: req.body.class[0].noOfSeats
			},
			{
				classType: req.body.class[1].classType,
				price: req.body.class[1].price,
				noOfSeats: req.body.class[1].noOfSeats
			},
			{
				classType: req.body.class[2].classType,
				price: req.body.class[2].price,
				noOfSeats: req.body.class[2].noOfSeats
			}]
			}},{new: true}
			
			).then(function(add){
				if(!add){
					res.status(400).send();
				}
				else{
					res.status(200).send(add);
				}
			})
	},
	show(req,res){
		Flight.find({})
			.then(function(show){
				if(show=="" && !show){
					res.status(400).send();
				}
				else{
					res.status(200).send(show);
				}
			})
	},
	delete(req,res){
		Flight.findOneAndRemove({
			_id : req.params.id
		}).then(function(show){
			if(!show){
				res.status(400).send("cant delete");
			}else{
				res.status(200).send(show);
			}
		})
	},
	updateOne(req,res){
		Flight.findOneAndUpdate({
				_id: req.params.id
			},{$set:{from:req.params.from}},{new: true})
			.then(function(show){
				if(!show){
					res.status(400).send("cant update");
							}
			else{
				res.status(200).send(show);
			}
		})
	}

};