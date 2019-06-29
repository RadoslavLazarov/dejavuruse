/* eslint-disable */

var map;
window.initMap = function () {
    var styledMapType = new google.maps.StyledMapType(
        [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#e9e0e9"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#e9e0e9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ],
        { name: 'DejaVu' });

    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 43.8524677, lng: 25.9605482 },
        zoom: 16,
        // mapTypeControl: false,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
        },
        // fullscreenControlOptions: {
        //     position: google.maps.ControlPosition.BOTTOM_LEFT
        // }
    });

    var image = "/static/favicon-32x32.png";
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29),
        icon: image,
        animation: google.maps.Animation.DROP,
        position: { lat: 43.8524677, lng: 25.9605482 },
    });

    // marker.addListener('click', toggleBounce);

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    // var geocoder = new google.maps.Geocoder();

    // google.maps.event.addListener(map, "click", function (event) {
    //     geocoder.geocode(
    //         {
    //             latLng: event.latLng
    //         },
    //         function (results, status) {
    //             if (status == google.maps.GeocoderStatus.OK) {
    //                 if (results[0]) {
    //                     input.value = results[0].formatted_address;
    //                 }
    //             }

    //             marker.setPosition(event.latLng);
    //         }
    //     );
    // });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');



    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent('<div style="text-align: center; color: #755275"><b>DejaVu - Сватбена и парти агенция</b><br>бул. „Съединение“ 25, 7002 Русе Център, Русе<br><a href="https://goo.gl/maps/aZMiRdwZmst26Gzk7" target="blank" style="text-decoration: underline; color: #755275">View on Google Maps</a></div>');
    infowindow.setZIndex(9999);
    infowindow.open(map, marker);

    var isOpenInfoWindow = true;
    google.maps.event.addListener(marker, 'click', function () {
        if (isOpenInfoWindow) {
            infowindow.close();
            isOpenInfoWindow = false;
        } else {
            infowindow.open(map, marker);
            isOpenInfoWindow = true;
        }
    });
}

