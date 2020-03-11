

var request = require("request");
var EventEmitter = require("events").EventEmitter;
var body = new EventEmitter();
var base_URL =
  "http://opendata.kz/api/sensor/history/list?opts=%7B%22where%22:%7B%22sensor_id%22:%7B%22%3D%22:"+String(68)+"%7D%7D,%22order%22:%5B%22created_at+DESC%22%5D,%22limit%22:6%7D";

  
let a = request(base_URL, function(err, res, data) {
  if (err) throw err;
  body.data = JSON.parse(data);
  body.emit("update");

  //   console.log(obj.list[0]);
});

var Obj = {};
body.on("update", function() {
  Obj = body.data;
});

function function2() {
  console.log(Obj);
}
// setTimeout(function2, 3000);
