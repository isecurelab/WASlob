var noGimgResultMessage = "<div class='alert alert-danger'><span class='glyphicon glyphicon-alert'></span>&nbsp;No Images found</div>"
function loadGoogleImages(term) {
	url = GoogleImagesURLBase+term+" Information Security";
	console.log("Google Image Data URL: " + url);
	$.ajax({
		type: "GET",
        url: url,
        async: true,
     	success: function (imageData, textStatus, xhr) {
     		$('#GoogImgProg').hide();
     		//if(imageData.trim()!=='false'){
     			//xml=imageData;
	     		//xmlDoc = $.parseXML( xml ),
	     	    $xml = $( imageData );
	     		gimgfound = false;
	     		$images = $xml.find("entry");
	     		$images.each(function(){
	     			gimgfound = true;
     				$image = $(this);
     				img = $image.find("Attribute[name=src]").attr("value");
     				src = $image.find("id").text();
     				title = "thing";//$image.find("summary").text();
     				$("#GoogImgContainer").append(createImageTile(img, src, title)); 
     			});
	     		if (!gimgfound) {
	     			$("#GoogImgContainer").append(noGimgResultMessage); 
	     		}
     		//} else {
     		//	$("#GoogImgContainer").append("ERROR"); 
     		//}	
     	},
     	error: function(xhr, status, err) {
     		$('#GoogImgProg').hide();
     		$("#GoogImgContainer").append(err); 
     	}
	})
}
function createImageTile(img, src, title) {
	return "<div class='col-md-12' onclick='window.open(\""+src+"\");'>" +
			"<img src="+img+" title="+title+" width='100%' />" +
			"</div>";
}