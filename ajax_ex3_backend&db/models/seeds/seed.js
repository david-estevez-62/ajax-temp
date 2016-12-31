var mongoose = require('mongoose');
var Part = require('../parts.js');

Part.find({}, function(err, parts){
  if(parts.length === 0){

    var rims = new Part ({
      name:"rims"
    });

    var taillight = new Part ({
      name:"taillight"
    });

    var turbo = new Part ({
      name:"turbo"
    });

    var transmission = new Part ({
      name:"transmission"
    });

    rims.save();
    taillight.save();
    turbo.save();
    transmission.save();

  }
})