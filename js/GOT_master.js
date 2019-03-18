(() => {
	console.log('fired');


// Grab the sheildsat the bottom of the page
	const shields = document.querySelectorAll('.sigil-container'),
		  lightBox = document.querySelector('.lightbox'),
		  video = document.querySelector('.video');
	function showLightbox() {
		lightBox.classList.add('show-lightbox');
		// lightBox.classList.add('lightbox-on');
	}
	function hideLightbox() {
		lightBox.classList.remove('show-lightbox');
		// lightBox.classList.remove('lightbox-on');
	}

	shields.forEach(shield => shield.addEventListener('click', showLightbox));

	video.addEventListener('ended', hideLightbox);
})();
