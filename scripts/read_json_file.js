  var xhr = new XMLHttpRequest();
xhr.open('GET', '../src/data.json', false);
xhr.send();

var data_collection = JSON.parse(xhr.responseText);

let my_new_data = [];
for (let key in data_collection) {
  my_new_data[key] = new Array();
  my_new_data[key].push(data_collection[key].lat);
  my_new_data[key].push(data_collection[key].long);
  my_new_data[key].push(data_collection[key].intense);
};

export {my_new_data}

