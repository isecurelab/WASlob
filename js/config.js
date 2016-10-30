//SLOB Configuration file

//URL of tomcat server
var serverURL = "http://" + $.url("hostname") + ":8080/"; //"http://localhost:8080/";
var wsOntologyFolder = "WSOntology/";
var waSlobFolder = "WASlob/";

var RedditURL = "https://www.reddit.com/subreddits/search/.json?q=Information_Security&limit=10";
var TwitterURLBase		 = serverURL + wsOntologyFolder + "rest/api/getTwitterData/";

var searchAutocompleteURL= serverURL + waSlobFolder  + "WSOntologyCall?searchType=Json&searchFor=None";
var DescriptionURLBase	 = serverURL + wsOntologyFolder + "rest/api/getDescriptionFromOwl/";
//var GoogleImagesURLBase	 = serverURL + wsOntologyFolder + "rest/api/getGoogleImageData/";
var GoogleImagesURLBase	 = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDuKYIYV9CnO7mn7i15-SyUpzT5hGmFFhw&cx=015288325745957171690:-id5ex7dkc8&alt=atom&q=";
var ArticlesURLBase		 = serverURL + wsOntologyFolder + "rest/api/getArticleData/";

var YoutubeWebURLBase	 = serverURL + wsOntologyFolder + "rest/api/getVideoFromWeb/";
var YoutubeDBURLBase	 = serverURL + wsOntologyFolder + "rest/api/getVideoFromDB/";
var YoutubeSavedURLBase	 = serverURL + wsOntologyFolder + "rest/api/getPersonalizedvideoFromDB/";

var SlideShareURLBase	 = serverURL + wsOntologyFolder + "rest/api/getSlideShareData/";
var GoodrichBookURLBase	 = serverURL + wsOntologyFolder + "rest/api/getBookPageFromOwl/"; 
var GoogleBooksURLBase	 = serverURL + wsOntologyFolder + "rest/api/getGoogleBookData/";

var FacebookURLBase = serverURL + wsOntologyFolder + "FetchFaceBookData/";

var loadingIcon = "<img src='"+ serverURL + waSlobFolder+"img/ajax-loader.gif' >";

//"http://isecurelab.info:8080/WSOntologyPage/rest/api/book/"

//http://localhost:8080/WSOntology/rest/api/getBookPageFromOwl/Ping Flood