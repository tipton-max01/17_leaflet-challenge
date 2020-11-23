// Create a new map
var myMap = L.map("map", {
  center: [
    37.09, -95.71
  ],
  zoom: 5,
});

// Define darkmap layer
var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
}).addTo(myMap);

// //Function that will determine the size of a marker based on magnitude and depth of the quake.
// function quakeSize(mag) {
//   return ;
// }



//Part 1 Get the data set. 
//Load in the geojson data.
var eqData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Grab data with d3
d3.json(eqData, function(data) {
  console.log(data.features)

  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data).addTo(myMap)

//     style: function(feature) {
//       return {
//         color: "white",
//         fillColor: chooseColor(feature.properties.borough),
//         fillOpacity: 0.5,
//         weight: 1.5
//       };
//   }).addTo(myMap);
// });
})
