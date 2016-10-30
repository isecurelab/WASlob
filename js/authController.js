var LoggedInMail = "NOTLOGGEDIN";
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  LoggedInMail =  profile.getEmail();
  if (loadGoogleLoginPanel) setAuthPanel();
  setProfileIcon();
}
function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      location.reload();
    });
}
$(function() {
		if (loadGoogleLoginPanel) $("#loggedInPanel").hide();
		$("#authProfileIconSignedIn").hide();
	});
function setAuthPanel() {
	var auth2 = gapi.auth2.getAuthInstance();
	googleUser = auth2.currentUser.get();
	var profile = googleUser.getBasicProfile();
	if (auth2.isSignedIn.get()) {
		$("#loggedOutPanel").hide();
		$("#GUserImage").attr("src", profile.getImageUrl());
		
		$("#GUserName").html(profile.getName());
		$("#GUserEmail").html(profile.getEmail());
		$("#loggedInPanel").show();
		
		
		
		
	}
}

function setProfileIcon() {
	var auth2 = gapi.auth2.getAuthInstance();
	googleUser = auth2.currentUser.get();
	var profile = googleUser.getBasicProfile();
	if (auth2.isSignedIn.get()) {
		$("#authProfileIconSignedOut").hide();
		$("#authProfileIconImage").attr("src", profile.getImageUrl());
		var emparts = profile.getEmail().split("@");
		$("#authProfileIconEMID").html(emparts[0]);
		$("#authProfileIconSignedIn").show();
		
	}
}