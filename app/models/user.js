// get an istance of mongoose and mongoose.SChema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//pass using module.exports
module.exports = mongoose.model('User', new Schema({
	name: String,      //name and password are String
	password: String,
	admin: Boolean   //this is value Boolean 'true' or 'false'
}));