function loadDescription(term) {
	var url = DescriptionURLBase+term;
	console.log("Description data URL: " + url);
	var xml;
	$.ajax({
	        type: "GET",
	        url: url,

	        async: true,
	     	success: function (descriptionData) {
	     		$("#DescProg").hide();
	     		xml=descriptionData;
				xmlDoc = $.parseXML( xml ),
				$xml = $( xmlDoc );
				sansdesc = $xml.find("SANSDescription").text();
				desc = $xml.find("Description").text();
				nistdef = $xml.find("NistDef").text();
				superclass = $xml.find("SuperClass").text();
				subclass = $xml.find("SubClass").text();
				equiclass = $xml.find("EquivalentClass").text();
				$("#desc").html(desc);
				$("#nistdef").html(nistdef);
				$("#sansdesc").html(sansdesc);
				$("#superclass").html(superclass);
				$("#directsubclass").html(subclass);
				$("#equivalentclass").html(equiclass);
	        },
	        error: function () {
	         //   alert('Error');
	        }
	    });
	
}