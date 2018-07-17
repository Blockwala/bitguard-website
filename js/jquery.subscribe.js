
$(document).ready(function() {
    var email = $('#subemail');
    var subsubmit = $('#subsubmit');
    subsubmit.click(function() {
     // $.get("http://wallet.blockwala.io:9000/config/subscribe_user/?email="+email, function(data, status) {
     //     	alert("Data: " + data + "\nStatus: " + status);
    	// });
     $.ajax({
     		var data = new FormData();
			data.append("email : " , email);
			console.log(email)
			var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
			xhr.open( 'post', 'emails.txt', true );
			xhr.send(data);
        });
    });
});

