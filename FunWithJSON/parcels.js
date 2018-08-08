var parcelUrl = JSON.stringify("parcel.geojson");

var geoObject = JSON.parse(parcelUrl);
var features = [];

features = geoObject.features;



//var features = [];
//features = output.features;

//var parcelOutput = output[1].properties.own_name;

//function listOwners() {
//    for (i = 0; i < 5; i++) {
//        parcelOutput +=
//         "<ol>" +
//          "<li>KIVAPIN: " + output.features[i].kivapint + "</li>" +
//          "<ul>" +
//          "<li>Owner: " + output.features[i].properties.own_name + "</li>" +
//          "<li>Owner Address: " + output.features[i].properties.own_addr + "</li>" +
//          "<li>Owner City: " + output.features[i].properties.own_city + "</li>" +
//          "<li>Owner State: " + output.features[i].properties.own_state + "</li>" +
//          "</ul>" +
//          "</ol>"
//    };
//};

console.log(features[0].own_name);

document.getElementById("parcelOutput").innerHTML = parcelOutput;
