// $(function(){
// 	$("#header-menu").on("click",function(){
// 		$("#header ul").toggleClass("show");
// 	});
	
// });


//-------------- accordian bit

$(function(){

	$("#main-side-selection h2").on("click",function(){

		$(this).next().toggleClass("hide");

	});

	$(".open-hide").addClass("hide");
	$("#main-faq-selection h3").on("click",function(){

		$(this).next().toggleClass("hide");

		if($(this).next().hasClass("hide")){
			$(this).find(".fa").removeClass("fa fa-angle-up").addClass("fa fa-angle-down");
		}else{
			$(this).find(".fa").removeClass("fa fa-angle-down").addClass("fa fa-angle-up");
		}


	});

	
});


var styles = [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 30
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    }
];


function initialize(){
	var mapOptions = {
		zoom: 17,
		center: new google.maps.LatLng(-36.767163, 174.755491),
		styles: styles
	};
	map = new google.maps.Map(document.getElementById('greentheme-map'), mapOptions);

}

google.maps.event.addDomListener(window,'load',initialize);

window.onload = function(){

	var request = {address: "102B East Coast Road, Forrest Hill"};
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode(request,function(results,status){

		if(status == "OK"){
			var destination = results[0].geometry.location;
			map.setCenter(destination);

			//destination marker
			var destinationMarker = new google.maps.Marker({map:map});
			destinationMarker.setPosition(destination);

			var destinationInfo = new google.maps.InfoWindow({content:'<p class="address">Greentheme Services</p> <p>102B East Coast Road, Forrest Hill, Auckland 0620</p><p>Phone: 0800 399 225</p>'});
				destinationInfo.open(map,destinationMarker);

			if(geo_position_js.init()){

			   geo_position_js.getCurrentPosition(function(position){
			   		var origin =  new google.maps.LatLng(position.coords.latitude, 
						   											position.coords.longitude);
			   		var originMarker = new google.maps.Marker({map:map});
					originMarker.setPosition(origin);



			   },function(error){
			   		console.log(error)

			   });
			}else{
				console.log("this feature is not supported");
			}
						   	
		}
	});
};

