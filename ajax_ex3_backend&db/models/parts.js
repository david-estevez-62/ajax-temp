var mongoose = require('mongoose');

var partSchema = mongoose.Schema({
  name: String
});


var Part = mongoose.model('part', partSchema);

module.exports = Part;