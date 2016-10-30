/**
 * This script controls calls to WSOntology for the Twitter API
 * Last Updated: October 16, 2015
 * This script gets URL from config.js
 */
var noTwitterResultMessage = "<div class='alert alert-danger'><span class='glyphicon glyphicon-alert'></span>&nbsp;No Tweets found</div>"
	
function loadTwitterData(term, container){
	term = term.replace(new RegExp("\\+", "g"), " ");
	$(container).empty();
	if (term != "_") $("#twit_q").html(term);
	var url = TwitterURLBase+term;
	$(container).append(loadingIcon);
	var xml;
		 $.ajax({
	        type: "GET",
	        url: url,
	        async: true,
	     	success: function (d) {
	     		$(container).empty();
			    if(d.trim()!=='false'){
					xml=d;
					xmlDoc = $.parseXML( xml ),
					$xml = $( xmlDoc );
					$tweets = $xml.find("tweets");
					tweetfound = false;
					$tweets.find("tweet").each(function(){
						tweetfound = true;
						$tweet = $(this);
						src = $tweet.find("src").text();
						$(container).append(createResultTile(src)); 
					});
					if (!tweetfound) {
						$(container).append(noTwitterResultMessage);
					}
					twttr.widgets.load();
				} else {
					$(container).append(noTwitterResultMessage);
				}	 
	     	},
	     	error: function () {
	     		$(container).append("ERROR");
	     	}
		 });
}
function createResultTile(src) {
	return "<div class='col-md-12 col-sm-12'><blockquote class='twitter-tweet' lang='en'><a href='"+src+"'/>Loading</blockquote></div>";
}