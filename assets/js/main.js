// Mobile nav toggle
(function() {
	var toggle = document.querySelector('[data-nav-toggle]');
	var menu = document.querySelector('[data-nav-menu]');
	if (!toggle || !menu) return;
	toggle.addEventListener('click', function() {
		var expanded = toggle.getAttribute('aria-expanded') === 'true';
		toggle.setAttribute('aria-expanded', String(!expanded));
		menu.hidden = expanded;
	});
})();

// Simple gallery lightbox (fundraisers/events)
(function() {
	var overlay = null;
	function openLightbox(src, alt) {
		if (!overlay) {
			overlay = document.createElement('div');
			overlay.style.position = 'fixed';
			overlay.style.inset = '0';
			overlay.style.background = 'rgba(0,0,0,0.85)';
			overlay.style.display = 'flex';
			overlay.style.alignItems = 'center';
			overlay.style.justifyContent = 'center';
			overlay.style.zIndex = '9999';
			overlay.addEventListener('click', closeLightbox);
			document.body.appendChild(overlay);
		}
		overlay.innerHTML = '';
		var img = document.createElement('img');
		img.src = src;
		img.alt = alt || '';
		img.style.maxWidth = '90vw';
		img.style.maxHeight = '90vh';
		overlay.appendChild(img);
		overlay.style.display = 'flex';
	}
	function closeLightbox() {
		if (overlay) overlay.style.display = 'none';
	}
	document.addEventListener('click', function(e) {
		var t = e.target;
		if (t && t.matches('[data-lightbox]')) {
			e.preventDefault();
			openLightbox(t.getAttribute('href') || t.getAttribute('data-src'), t.getAttribute('data-alt'));
		}
	});
})();



