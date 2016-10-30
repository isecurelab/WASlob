function loadBooks(term){
	var url1 = "WSOntologyCall?searchType=Book&searchFor="+term.replace(new RegExp(" ", 'g'), "");
	var url2 = "WSOntologyCall?searchType=GoogleBookAPI&searchFor="+term.replace(new RegExp(" ", 'g'), "");
	var xml;
	$.ajax({
		type: "GET",
		url: url1,
		async: true,
		success: function (d) {
			$('#googBookProg').hide();
			if(d.trim()!=='false' && d.trim()!=='<OwlRootNode><BookPage></BookPage></OwlRootNode>'){
				xml=d;
				xmlDoc = $.parseXML( xml ),
				$xml = $( xmlDoc );
				var BookPage= $($xml).find("OwlRootNode>BookPage").text().split(',');
				var pageInformation='<span style=color:#1a0dab><b>\tGood Rich :- </b></span>';
				$.each(BookPage , function(i, val) { 
					if(i<10){
						var count=i;
						count=count+1;
						if(i===0 && BookPage[0]===''){
	     		    		 //alert('No Book Pages');
	     		    	 }else{
	     		    		 if(BookPage[i]!==''){
	     		    			 pageInformation= pageInformation+'<a style="color: #545454; text-decoration: none;"  href="#loginScreen" id="idPageNumberClick"><b>'+BookPage [i]+'</b></a>'+' | ';
	     		    		 }
	     		    	 }
					}else{
	     		  	
					} 
				});
				$("#idTableForPageDisplay").append('<td>'+pageInformation.replace('undefined','')+'</td>'); 
			}else{
				//	noBooksDataFound();
				$("#idTableForPageDisplay").append('<td style="color: #545454; ">No Prescribed Book</td>');
			}
		},
		error: function () {
			//    alert('Error');
		}
	});
    
	$.ajax({
		type: "GET",
		url: url2,
		async: true,
		success: function (googleBookAPIData) {
			xmlDoc = $.parseXML( googleBookAPIData ),
			$xml = $( xmlDoc );
			$($xml).find("Results>Row").each(function(i){
				var bookTitle=$(this).find('Results>Row>VolTitle').text();
				var bookAuthor=$(this).find('Results>Row>VolAuth').text();
				var bookURL=$(this).find('Results>Row>PreviewLink').text();
				if(i<5){
					//$("#idBooksList ul").append('<li style="list-style-type: none;"><a target="_blank" style="color: #1a0dab; text-decoration: none;" href='+bookURL+'><span class="tab truncate"><b>'+bookTitle+'</b></span></a><br /><span style="list-style-type: none; color:#545454 ;" >'+bookAuthor+'</span></li>');
					$("#googBookContainer").append(createBookTile(bookAuthor, bookTitle, bookURL));
				}else{
	     		    	
				}
			});
		},
		error: function () {
			//    alert('Error');
		}
	});
}
function createBookTile(author, title, url) {
	return "<div class='panel panel-default'>" +
			"	<div class='panel-body'><a href='"+url+"'>"+title+" - "+author+"</a></div>" +
			"</div>";
}