var read = require('../Services/readgoods.js');
var create = require('../Services/creategoods.js');



exports.showgoods = async (req, res, next) => {
    try {
      let rows = await read.getAllgoods(req);
      res.send(rows);
    } catch (err) {
        console.log(err);
    }
  };
  
  exports.creategoods = async (req, res, next) => {
      console.log(req)
    try {
      let rows = await create.creategoods(req);
      res.send(rows);
    } catch (err) {
        console.log(err);
    }
  };
