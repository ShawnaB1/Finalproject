
//change route map to image on #1 Ronde Hoep
$(document).ready(function(){
	var element = document.getElementById("rondehoepimg");
	element.addEventListener("mouseover", function(){
 		this.src = 'images/rondehoep680x360.png';
	});
	element.addEventListener("mouseout", function(){
 		this.src = 'images/routes/1Rondehoep.png';
	});
//change route map to image on #2 Tour de Gooi
$(document).ready(function(){
		document.getElementById("tourdegooiimg").addEventListener("mouseover", function(){
    	//alert("Hello World!");
 		this.src = 'images/tourdegooi680x360.png';
	});

	document.getElementById("tourdegooiimg").addEventListener("mouseout", function(){
 		this.src = 'images/routes/tourdegooi.png';
	});
});


//change route map to image on #3 Waterland
$(document).ready(function(){
	document.getElementById("waterlandimg").addEventListener("mouseover", function(){
 		this.src = 'images/waterland680x360.png';
	});
	document.getElementById("waterlandimg").addEventListener("mouseout", function(){
 		this.src = 'images/routes/waterlandroute.png';
	});
//change route map to image on #4 Beach dunes
		document.getElementById("beachdunesimg").addEventListener("mouseover", function(){
 		this.src = 'images/beachdunes1.png';
	});
	document.getElementById("beachdunesimg").addEventListener("mouseout", function(){
 		this.src = 'images/routes/dunesroute.png';
	});
});


});

//change route map to image on #6 Leimuiden
$(document).ready(function(){
	document.getElementById("leimuidensimg").addEventListener("mouseover", function(){
 		this.src = 'images/leimuiden.png';
	});
	document.getElementById("leimuidensimg").addEventListener("mouseout", function(){
 		this.src = 'images/routes/leimuidenroute.png';
	});
});



	









//element.addEventListener("mouseover", myFunction);

//document.getElementById("rondehoepimg").addEventListener("mouseover", imageChange);


//$('#rondehoepimg').hover(function() {
//  $(this).attr('src', '/images/rondehoep.jpg');
//}, function() {
//  $(this).attr('src', '/images/routes/1Rondehoep.png');
//});


//this.src = '/images/'+this.id+'rondehoep680x360.png';
