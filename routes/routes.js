
var flight_controller = require('../controllers/flight_controller');
module.exports = (app)=>{
	
app.post("/post",flight_controller.create);
app.put("/post/:id",flight_controller.update);
app.get('/post',flight_controller.show);
app.delete('/post/:id',flight_controller.delete);
app.patch('/post/:id/:from',flight_controller.updateOne);
};

