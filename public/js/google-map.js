var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var myLatlng = new google.maps.LatLng(19.017200, 72.850940);


    //Styling
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [{
                    "visibility": "simplified"
                },
                {
                    "hue": "#ff0000"
                }
            ]
        }]
    };



    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');


    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var addresses = ['Mumbai'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + addresses[x] + '&sensor=false', null, function (data) {
            if (data.results.length > 0) {
                var p = data.results[0].geometry.location
                var latlng = new google.maps.LatLng(p.lat, p.lng);
                new google.maps.Marker({
                    position: latlng,
                    map: map,
                    animation: google.maps.Animation.DROP,
                    icon: iconBase + 'maps-marker.png',
                    url: link
                });
            }

        });
    }




}
google.maps.event.addDomListener(window, 'load', init);