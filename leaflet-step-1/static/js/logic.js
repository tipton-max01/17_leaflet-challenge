//Part 1 Get the data set

// Store our API endpoint as queryUrl
var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Perform a GET request to the query URL
d3.json(geoData, function(data) {
  console.log(data.features);
  // Using the features array sent back in the API data, create a GeoJSON layer and add it to the map

});