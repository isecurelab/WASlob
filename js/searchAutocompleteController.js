function initSearchAutocomplete(target, prefix) {
	$( target ).prop("disabled", true);
	$( target ).attr("placeholder", "Loading Search...");
	var availableTags;
	$.ajax({
  		type: "GET",
   		url: searchAutocompleteURL,
		async: false,
		success: function (d) {
			availableTags=d.split(',');
			$( target ).autocomplete({
				source: availableTags
			});
			$( target ).prop("disabled", false);
			$( target ).attr("placeholder", "Search");
		},
   		error: function () {
       		//alert('Error');
   		}
	}); 
}