	
	'use strict';	
	
	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});
	
	
	//INITIALIZE MAP
	function initialize() {
		
		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
    		zoom: 16.3,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
    		center: new google.maps.LatLng(42.814029, -1.6505427),
				panControl: true,
  			zoomControl: true,
  			mapTypeControl: true,
  			//scaleControl: false,
  			streetViewControl: false,
  			overviewMapControl: false,
			//rotateControl:true,
			
  		};

		//CREATE NEW MAP
		//=======================================================================================
  		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';
		
		//ADD NEW MARKER
		//=======================================================================================
  		/*var marker = new google.maps.Marker({
    		position: map.getCenter(),
   		 	map: map,
    		title: 'Click to zoom',
			icon: image
  		});
		
		var marker1 = new google.maps.Marker({
    		position: new google.maps.LatLng(-12.042559, -77.027426),
   		 	map: map,
    		title: 'Click to zoom'
  		});*/
		
		
		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		var marker1 = new MarkerWithLabel({
       		position: new google.maps.LatLng(42.811597, -1.650087),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#f0394d;"><i class="de-icon-heart"></i></div>',
       		labelAnchor: new google.maps.Point(20, 28),
       		labelClass: "labels" // the CSS class for the label
     		});
    
		var marker2 = new MarkerWithLabel({
       		position: new google.maps.LatLng(42.815753, -1.648923),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#f6700e"><i class="de-icon-food"></i></div>',
       		labelAnchor: new google.maps.Point(20, 28),
       		labelClass: "labels" // the CSS class for the label
     		});

		var marker3 = new MarkerWithLabel({
       		position: new google.maps.LatLng(42.816053, -1.648742),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#0d9a48"><i class="de-icon-asterisk-1"></i></div>',
       		labelAnchor: new google.maps.Point(0, 0),
       		labelClass: "labels" // the CSS class for the label
     		});
		
		
		//INFO WINDOWS
		//=======================================================================================
		var contentString1 = '<div style="font-weight: bold">'+
		'CEREMONIA';
      	'</div>';
		
		var contentString2 = '<div style="font-weight: bold">'+
		'COMDIDA Y FIESTA';
      	'</div>';

 	 	var infowindow1 = new google.maps.InfoWindow({
      		content: contentString1
  		});
		
		var infowindow2 = new google.maps.InfoWindow({
      		content: contentString2
  		});
		
		
		
		//OPEN INFO WINDOWS ON LOAD
		//=======================================================================================
  		infowindow1.open(map,marker1);
  		infowindow2.open(map,marker2);

		//ON CLICK MARKER, OPEN INFO WINDOWS
		//=======================================================================================
		google.maps.event.addListener(marker1, 'click', function() {
			infowindow1.open(map,marker1);
  		});
		google.maps.event.addListener(marker2, 'click', function() {
			infowindow2.open(map,marker2);
		});

		//ON MARKER CLICK EVENTS
		//=======================================================================================
  		/*google.maps.event.addListener(marker, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow.open(map,marker);
  		});
		
		google.maps.event.addListener(marker1, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow1.open(map,marker1);
  		});
		
		google.maps.event.addListener(marker2, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow1.open(map,marker2);
  		});*/
		
		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function() {  		
			if (is_windowresize)
			{
				//map.setCenter(marker.getPosition());
				window.setTimeout(function() {
      				map.panTo(marker1.getPosition());
    			}, 500);
			}
			is_windowresize=false;
		});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);
	
	
