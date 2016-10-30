var noArticleResultMessage = "<div class='alert alert-danger'><span class='glyphicon glyphicon-alert'></span>&nbsp;No Article found</div>"
function loadArticles(term, prefix){
	url = ArticlesURLBase+term.replace(new RegExp(" ", 'g'), "");
	console.log("Article data URL: " + url);
	var xml;
	 $.ajax({
	        type: "GET",
	        url: url,
	        async: true,
	        success: function (ArticleData, textStatus, xhr) {
	        	$('#articleProg').hide();
	     		if(ArticleData.trim()!=='false'){
	     			xml=ArticleData;
	     			xmlDoc = $.parseXML( xml ),
	     			$xml = $( xmlDoc );
	     			if($($xml).find("result>hits").attr('computed')!=='0'){
	     				$($xml).find("result>hits>hit>info").each(function(i){			
	     					if(i<5){
	     						var author='';
	     						$(this).find("authors").each(function(i){
	     							author=author+$(this).find("author").text()+' <b>|</b> ';
	     						});
	     						var count=i;
	     						count=count+1;
	     						var theURL = $(this).find("title").text();
	     						var pieceOneTitle = theURL.substr(0,80);
	     						var pieceTwoTitle = theURL.substr(80, 75);
	     						//$("#articleContainer").append('<li style="list-style-type: none;"><a target="_blank" style="color: #1a0dab; text-decoration: none;" href='+$(this).find('title').attr('ee') +'><span class="tab truncate"><b>'+count+'.  '+pieceOneTitle+'-<br />' +pieceTwoTitle+'</b></span></a>		'+'<br />'+'<span style="list-style-type: none; color:#545454 ;" >'+author+'</span></li>');
	     						$("#articleContainer").append(createArticleTile(pieceOneTitle, pieceTwoTitle, author, $(this).find("url").text()));

	     					}else{
	     						$("#articleContainer").append(noArticleResultMessage);
	     					}    
	     				}); 
	     			}else{
	     				//noArticleDataFound();
 						$("#articleContainer").append(noArticleResultMessage);
	     			}
	     		}else{
	     			//noArticleDataFound();
						$("#articleContainer").append(noArticleResultMessage);
	     			
	     		}
	        },
	        error: function () {
	        //    alert('Error');
	        } 
	    });	  
}
function createArticleTile(p1title, p2title, author, ee) {
	fulltitle = p1title + p2title;
	fulltitlepart = fulltitle.substring(0,40);
	authorpart = author.substring(0,20);
	return "<div class='panel panel-default'>" +
			"	<div class='panel-heading' title='"+fulltitle+"'><a href='"+ee+"'>"+fulltitlepart+"...</a></div>" +
			"	<div class='panel-body' title='Authors:"+author+"'><span class='glyphicon glyphicon-user'></span>&nbsp;"+authorpart+"...</div>" +
			"</div>";
	
}