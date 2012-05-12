Event.domReady.add(function() {
		
	var html = 
		'<div class="cookie-compliance-sandbag"></div>' +
		'<div class="cookie-compliance">' +
			'<div>' + 
				'<a href="http://labs.snapshotmedia.co.uk/" class="cancel"><span>&#215;</span></a>' +
				'<button>Allow</button>' + 
				'<button>Deny</button>' +
				'<p class="cook-e-site">' +
					'<span class="cookie-compliance-hostname">' + window.location.hostname + '</span> wants to remember you. This helps the site work and track usage. <a href="#">Learn more</a>' +
				'</p>' + 
			'</div>' +
		'</div>';
	
	
	
	var fragment = document.createDocumentFragment(),
		temp = document.createElement('div');
	
	temp.innerHTML = html;
	while (temp.firstChild) {
		fragment.appendChild(temp.firstChild);
	}		
	
	document.body.insertBefore(fragment, document.body.childNodes[0]);

	
});