var hotelsData = require('../../hotel-data.json');

module.exports.getAllHotels = function (req, res) {
    resultArray = hotelsData;
    var queryString = req.query;
    if (queryString) {
        console.log("Query :" + JSON.stringify(queryString));
        var offset = parseInt(queryString.offset, 10);
        var count = parseInt(queryString.count, 10);
        if (queryString.offset && queryString.count) {

            var resultArray = hotelsData.slice(offset, offset + count);
        }
    }
    res.status(200).json(resultArray);
}


module.exports.getHotel = function (req, res) {
    var hotelId = req.params.hotelId;
    console.log("Hotel ID " + hotelId);
    var jsonObject = { "ID:": hotelId, "name": "Hotel California1", "emptyRooms": 4 };
    res.status(200).json(hotelsData[hotelId]);
}

module.exports.getHotels = function (req, res) {
    // var hotelId = req.params.hotelId;
    var queryString = req.query;
    var offset = queryString.offset;
    var count = queryString.count;
    var resultArray = hotelsData.slice(offset, offset + count);
    console.log("Query :" + queryString);
    res.status(200).json(resultArray);
}


module.exports.addHotel = function (req, res) {
    console.log("Inside Post");
    console.log(req.body);
    res.status(200).json(req.body);
}