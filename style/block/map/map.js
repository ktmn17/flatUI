    var styles = [{
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.business",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffff80"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#ffff80"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#ffff80"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }]

    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });

    function init_map() {
        var myOptions = {
            zoom: 14,
            center: new google.maps.LatLng(37.791280, -122.414731),
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            },
            disableDefaultUI: true,
        };
        map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(37.791280, -122.414731),
            icon: 'style/img/marker.png'
        });
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');


        $('.map__link-img_my-location').click(function() {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                map.setCenter(pos);
            });
        });

        $('.map__link-img_our-location').click(function() {
            map.setCenter(marker.getPosition());
        });

        map.setMyLocationEnabled(true)
    }

    google.maps.event.addDomListener(window, 'load', init_map);
