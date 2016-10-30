/**
 * Author: Yashraj Mahida
 * Purpose: Fetches the data from facebook and displays it on the page
 */

function LoadFacebookData(container)
{	
	$(container).empty();
	
	//1. get data async from the corresponding facebook servlet 
	//var fb_url = "/WSOntology/FetchFaceBookData/";
	var fb_url = FacebookURLBase;
	
	$.ajax({
        type: "GET",
        url: fb_url,        
        async: true,
        dataType: "json",
     	success: function (data) {
     		//2. data received. Now format it and display it on WASlob
     		//alert(data[0].PageID)
     		//alert(data[0].PageName)
     		
     		$.each(data, function(index, value) {
     			  //alert(value.PageID);
     			jQuery('<div/>', {
         		    class: 'fb_outercontainer'	    
         		}).appendTo(container);
     			
     			$(".fb_outercontainer").append("<a target = '_blank' href = 'http://facebook.com/"+value.PageID+"'><h4>"+value.PageName+"</h4></a>");
     		});
     		
     	}
     	});
	
	
}