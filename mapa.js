var mapOptions = {
    center: new google.maps.LatLng(-5.9150411, -35.2697495),
    zoom: 18,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),
                              mapOptions);

function moveToLocation(lat, lng){
    var center = new google.maps.LatLng(lat, lng);
    map.panTo(center);
}
$('#recenter').click( function() {
    moveToLocation( -34, 150 );
});

