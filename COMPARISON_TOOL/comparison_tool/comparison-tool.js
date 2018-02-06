function compare() {
			
	let leftText   = document.getElementById("left_box_textarea").value;
	let rightText  = document.getElementById("right_box_textarea").value;
	
	let leftXml  = new DOMParser().parseFromString(leftText, 'text/xml');
	let rightXml = new DOMParser().parseFromString(rightText, 'text/xml');

	leftText   = escape_tag(leftText);
	rightText  = escape_tag(rightText);
	
	set_compared_textare(leftText, rightText);
}

function escape_tag(str) {
	return str.replace(/[&'`"<>]/g, function(match) {
	    return {
	      '&': '&amp;',
	      "'": '&#x27;',
	      '`': '&#x60;',
	      '"': '&quot;',
	      '<': '&lt;',
	      '>': '&gt;',
	    }[match]
	  });
}

function set_compared_textare(leftText, rightText) {
	document.getElementById("compared_left_textarea").innerHTML  = leftText;
	document.getElementById("compared_right_textarea").innerHTML = rightText;
}