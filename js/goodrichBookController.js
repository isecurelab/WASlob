var noGoodrichResultMessage = "<div class='alert alert-danger'><span class='glyphicon glyphicon-alert'></span>&nbsp;&nbsp;No pages to show</div>"
function loadGoodrichBooks(term) {
	//url = GoogleImagesURLBase+term
	url = GoodrichBookURLBase+term;
	console.log("Goodrich Book Data URL: " + url);
	$.ajax({
		type: "GET",
       // url: GoodrichBookURLBase + term,
        url: url,
		async: true,
        dataType:"text",
     	success: function (gbData, textStatus, xhr) {
     		$('#goodrichProg').hide();
     		if(gbData.trim()!=='false'){
     			xml=gbData;
	     		xmlDoc = $.parseXML( xml ),
	     	    $xml = $( xmlDoc );
	     		gimgfound = false;
	     		pages = $xml.find("BookPage").text().split(",");
	     		for (i=0; i < pages.length; i++) {
	     			$("#goodrichContainer").append(createGoodrichTile(pages[i])); 
	     		}
	     		if (pages.length == 1) {
	     			$("#goodrichContainer").append(noGoodrichResultMessage); 
	     		}
     		} else {
     			$("#goodrichContainer").append("ERROR"); 
     		}	
     	},
     	error: function(xhr, status, err) {
     		$('#goodrichProg').hide();
     		$("#goodrichContainer").append(err); 
     	}
	})
}
/*function createGoodrichTile(pagenum) 
{
	return "<div class='col-md-4'><a title='Page "+pagenum+"' href='http://54.69.157.61:8080/PDFHighlight/NewFile.jsp?PageNumber="+pagenum+"&WordToHighLight=" + q_val+"' target='_blank'>" +
			pagenum +
			"</a></div>";
}*/

/*function createGoodrichTile(pagenum) {
	
	return "<div class='col-md-4'><a title='Page "+pagenum+"' href='http://localhost:8080/WASlob/GoodRichSinglePages2016/" + pagenum + ".pdf' target='_blank'>" +
	   pagenum +
	   "</a></div>";
}*/
function createGoodrichTile(pagenum) {
	
	return "<div class='col-md-4'><a title='Page "+pagenum+"' href='http://isecurelab.info:8080/WASlob/GoodRichSinglePages2016/" + pagenum + ".pdf' target='_blank'>" +
	   pagenum +
	   "</a></div>";
}



