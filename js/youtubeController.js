/**
 * 
 * @param term
 * @param prefix
 * @param mode 1- Web Results, 2 - DB Results, 3 - Saved Results
 */
function loadVideos(term, prefix, mode){
	ytLoader = "<div class='col-md-12' id='youtubeProg'><img src='"+prefix+"img/ajax-loader.gif' ></div>";
	url="";
	if (mode==1) {
		url = YoutubeWebURLBase+term.replace(new RegExp(" ", 'g'), "");
	} else if (mode==2) {
		url = YoutubeDBURLBase+term.replace(new RegExp(" ", 'g'), "");
	} else if (mode==3) {
		if (LoggedInMail == "NOTLOGGEDIN") {
			alert("Please log in to use this feature.");
			return;
		}
		url = YoutubeSavedURLBase+term.replace(new RegExp(" ", 'g'), "") + "/" + LoggedInMail;
			
	}
	console.log("Youtube data URL: " + url);
	$('#videoContainer').empty();
	$('#videoContainer').append(ytLoader);
	var xml;
	 $.ajax({
		type: "GET",
		url: url,
		async: true,
		success: function (d) {
			$('#youtubeProg').hide();
     		if(d.trim()!=='false' && d.trim()!=="<Results/>"){
				xml=d;
				xmlDoc = $.parseXML( xml ),
				$xml = $( xmlDoc );
				var found = false
				$($xml).find("Results>Row").each(function(i){
					if(i<5){
						var count=i;
						count=count+1;
						var vidDesc = $(this).find("VedDesc").text();
						found = true;
						$('#videoContainer').append(createVideoTile($(this).find("VedURL").text(), $(this).find("VedThumbNail").text(), $(this).find("VedTitle").text(), vidDesc, mode, term, prefix));
						//$("#idVideoList ul").append('<li style="list-style-type: none;"><a target="_blank" style="color: #1a0dab; text-decoration: none;" href=https://www.youtube.com/watch?v='++'><span class="tab truncate"><img alt="" width="25px"  height="25px" src="'++'"><b> '++'</b></span></a>	'+'<br />'+'<span style="list-style-type: none; color:#545454 ;" >'+pieceOne +'-<br />' +pieceTwo+'</span></li>');
					}else{
					} 
				});
			}else{
			}
			if (!found) alert("EMPTY");
	     			
	     		
		},
		error: function () {
			//  alert('Error');
		}
	});
}
function createVideoTile(id, img, title, desc, mode, term, prefix) {
	toret = "<div class='panel panel-default'>" +
			"	<div class='panel-heading'><a href='https://www.youtube.com/watch?v="+id+"'>"+title+"</a></div>" +
			"	<div class='panel-body'>" +
			"		<div class='col-md-5'><img src='http://img.youtube.com/vi/"+id+"/default.jpg' /></div>" +
			"		<div class='col-md-6'>"+desc+"</div>";
	if (mode=="1" || mode=="2") {
		toret += "<div class='col-md-1'><a class='btn btn-default' onclick='savePersonalVideo(\"" + id + "\",\"" + term + "\",\"" + prefix + "\")'><span class='glyphicon glyphicon-floppy-disk' aria-hidden='true'></span></a></div>";
	} else if (mode=="3") {
		toret += "<div class='col-md-1'><a class='btn btn-default' onclick='deletePersonalVideo(\"" + id + "\",\"" + term + "\",\"" + prefix + "\")'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a></div>";
	}
	toret += "	</div>" +
			"</div>";
	return  toret;
			
}
function savePersonalVideo(id, term, prefix) {
	if (LoggedInMail == "NOTLOGGEDIN") {
		alert("Please log in to use this feature.");
		return;
	}
	url = prefix +  "../WSOntology/rest/api/setPersonalizedVideoToDB/"+term.replace(new RegExp(" ", 'g'), "") + "/" + LoggedInMail + "/" + id;
	
	$.get(url, function(data) {
		alert(data);
	});
}

function deletePersonalVideo(id, term, prefix) {
	url = prefix +  "../WSOntology/rest/api/deletePersonalizedVideoFromDB/"+term.replace(new RegExp(" ", 'g'), "") + "/" + LoggedInMail + "/" + id;
	
	$.get(url, function(data) {
		alert(data);
	});
}