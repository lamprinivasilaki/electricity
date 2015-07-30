var moment = require('moment');

module.exports = {
  getHousePerHouseIDRecords: function(req, res, next) {
    var date = req.param('date');
    var nodeID = req.param('nodeID');
    var houseID = req.param('houseID');
    var phase = req.param('phase');
    var parsedDate = moment(date, "DD-MM-YYYY");
    var formattedDate = parsedDate.format("YYYY-MM-DD HH:mm:ss");
    var formattedDateNext = parsedDate.add(1, 'days').format("YYYY-MM-DD HH:mm:ss");

    mySqlConnection.query('SELECT * FROM houses WHERE timestamp >= "'+formattedDate+'" && timestamp < "'+formattedDateNext+'" && nodeID= "'+nodeID+'" && houseID= "'+houseID+'" && phase= "'+phase+'" ',
      function(err, rows, fields) {
      if (err){
        throw err;
      }
      else {
        var modifiedRows = rows.map(function(row){
          row.Timestamp = moment(row.Timestamp).format('DD/ MM/ YYYY HH:mm:ss');
          return row;
        });
        res.json(modifiedRows);
      }
    });
  }
};
