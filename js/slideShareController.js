function loadSlides(term, prefix) {
	console.log("SlideShare URL: " + url);
	var xml;
	$.ajax({
		type: "GET",
		url: SlideShareURLBase+term.replace(new RegExp(" ", 'g'), ""),
		async: true,
		success: function (d) {
			$('#slideshareProg').hide();
     		if(d.trim()!=='false'){
				xml=d;
				xmlDoc = $.parseXML( xml ),
				$xml = $( xmlDoc );
				$($xml).find("Slideshows>Slideshow").each(function(i){
					var url=$(this).find('Slideshows>Slideshow>URL').text();
					var VedTitle=$(this).find('Slideshows>Slideshow>Title').text();
					if(i<5){
						var count=i;
						count=count+1;
						var theURL =$(this).find("Description").text();
						var pieceOne = theURL.substr(0,80);
						var pieceTwo = theURL.substr(80, 75);
						//$("#slideContainer").append('<div><a target="_blank" href='+$(this).find("URL").text()+'><span class="tab truncate"><img alt="" width="25px"  height="25px" src="'+$(this).find("ThumbnailSmallURL").text()+'"> <b>'+$(this).find("Title").text()+'</b></span></a>'+'<br />'+'<span style="list-style-type: none; color:#545454 ;" >'+pieceOne +'-<br />' +pieceTwo+'</span>	</div>');
						$("#slideContainer").append(createSlideTile($(this).find("URL").text(), $(this).find("ThumbnailSmallURL").text(), $(this).find("Title").text(), pieceOne + pieceTwo));
					}else{
						
					} 
				});
			}else{
				noSlidesDataFound();
			}
		},
		error: function () {
			//  alert('Error');
		}
	});    
}

function createSlideTile(url, img, title, desc) {
	titlepart = title.substring(0,40);
	return "<div class='panel panel-default'>" +
			"	<div class='panel-heading' title='"+title+"'><a href='"+url+"'>"+titlepart+"...</a></div>" +
			"	<div class='panel-body'>"+desc+"</div>" +
			"</div>";
}