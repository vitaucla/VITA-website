/*
    For scripts not originally included in the template.
    Import this at the bottom of index.html.
*/

/* ResponsiveSlides.js v1.55 */
$(function () {
    $(".rslides").responsiveSlides();
});

$(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 1000,            // Integer: Speed of the transition, in milliseconds
    timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
    pager: false,           // Boolean: Show pager, true or false
    nav: false,             // Boolean: Show navigation, true or false
    random: false,          // Boolean: Randomize the order of the slides, true or false
    pause: false,           // Boolean: Pause on hover, true or false
    pauseControls: false,    // Boolean: Pause when hovering controls, true or false
    prevText: "Previous",   // String: Text for the "previous" button
    nextText: "Next",       // String: Text for the "next" button
    maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
    navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: "",     // Selector: Declare custom pager navigation
    namespace: "rslides",   // String: Change the default namespace used
    before: function () { },   // Function: Before callback
    after: function () { }     // Function: After callback
});

/* Use Google Maps Javascript API to embed parking map */
function initMap() {
    var ucla_center = { lat: 34.0775, lng: -118.4575 };
    var map = new google.maps.Map(document.getElementById('parking_map'), {
        zoom: 15,
        center: ucla_center,
        styles: [
            {
                featureType: 'poi',
                stylers: [{ visibility: "off" }]
            }
        ]
    });
    var markers = [
        {
            "title": 'Ackerman Union',
            "lat": '34.070614',
            "lng": '-118.444522',
            "description": "VITA at UCLA's on-campus tax sites are located at Ackerman Union in Viewpoint Conference Rooms A and B (A-Level).",
            "icon": "images/marker_icon.png"
        },
        {
            "title": 'Parking Structure 4',
            "lat": '34.072461',
            "lng": '-118.444742',
            "description": 'Parking Structure 4 is the closest parking structure to our on-campus tax sites. After you park and exit up into Wilson Plaza, walk south towards the Bruin Bear to reach Ackerman Union.'
        },
        {
            "title": 'Parking Structure 7',
            "lat": '34.073042',
            "lng": '-118.446912',
            "description": 'Parking Structure 7 is a large underground lot underneath the IM field. After you park, exit the lot on the side facing Pauley Pavillion and walk east towards the Bruin Bear to reach Ackerman Union.'
        },
        {
            "title": 'Parking Structure 8',
            "lat": '34.067838',
            "lng": '-118.446573',
            "description": 'Parking Structure 8 is an outdoor lot near the Career Center. After you park, exit onto Westwood Plaza and walk north to reach Ackerman Union.'
        }
    ];
    var infowindow = new google.maps.InfoWindow();
    for (var i = 0; i < markers.length; i++) {
        var data = markers[i];
        var marker_icon = data.icon ? data.icon : "";
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(data.lat, data.lng),
            map: map,
            title: data.title,
            description: data.description,
            icon: marker_icon
        });
        google.maps.event.addListener(marker, 'click', (function (marker) {
            return function () {
                infowindow.setContent(marker.description);
                infowindow.open(map, marker);
            }
        })(marker));
    }
}