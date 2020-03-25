import { my_new_data } from "../scripts/read_json_file.js";
import("../Leaflet.heat-gh-pages/dist/leaflet-heat.js");
var map = L.map("map").setView([51.1639764, 71.3797994], 11);
L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=bumSo2J7hEDvw7C3kRDY",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  }
).addTo(map);
var heat = L.heatLayer(my_new_data, { max:0.7  }, { radius: 200 }).addTo(map);
