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

// // Function that will determine the color of a neighborhood based on the borough it belongs to
// function chooseColor(borough) {
//   switch (borough) {
//   case "Brooklyn":
//     return "yellow";
//   case "Bronx":
//     return "red";
//   case "Manhattan":
//     return "orange";
//   case "Queens":
//     return "green";
//   case "Staten Island":
//     return "purple";
//   default:
//     return "black";
//   }
// }



//Part 1 Get the data set. 
//Load in the geojson data.
var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Grab data with d3
d3.json(geoData, function(data) {
  console.log(data.features);

  // Creating a geoJSON layer with the retrieved data
  features = L.geoJson(data, {


    // // Style each feature (in this case a neighborhood)
    // style: function(feature) {
    //   return {
    //     color: "white",
    //     // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
    //     fillColor: chooseColor(feature.properties.borough),
    //     fillOpacity: 0.5,
    //     weight: 1.5
    //   };
    // },
    // // Called on each feature
    // onEachFeature: function(feature, layer) {
    //   // Set mouse events to change map styling
    //   layer.on({
    //     // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
    //     mouseover: function(event) {
    //       layer = event.target;
    //       layer.setStyle({
    //         fillOpacity: 0.9
    //       });
    //     },
    //     // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
    //     mouseout: function(event) {
    //       layer = event.target;
    //       layer.setStyle({
    //         fillOpacity: 0.5
    //       });
    //     },
    //     // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
    //     click: function(event) {
    //       myMap.fitBounds(event.target.getBounds());
    //     }
    //   });
    //   // Giving each feature a pop-up with information pertinent to it
    //   layer.bindPopup("<h1>" + feature.properties.neighborhood + "</h1> <hr> <h2>" + feature.properties.borough + "</h2>");

    // }
  }).addTo(myMap);
});

// Loop through the geoJson array and create one marker for each earthquake feature
for (var i = 0; i < features.length; i++) {
  L.circle(features[i].geometry.coordinates, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
    radius: markerSize(features[i].properties.mag)
  }).bindPopup("<h1>" + features[i].title + "</h1> <hr> <h3>mag: " + features[i].properties.mag + "</h3>").addTo(myMap);
}