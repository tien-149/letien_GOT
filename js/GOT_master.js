(() => {
	console.log('fired');


// Grab the sheildsat the bottom of the page
	const shields = document.querySelectorAll('.sigil-container'),
		  lightBox = document.querySelector('.lightbox'),
		  video = document.querySelector('video');
	function openLightbox() {
		// lightBox.classList.add('show-lightbox');
		lightBox.classList.add('lightbox-on');
		video.play();

	}
	function closeLightbox() {
		// lightBox.classList.remove('show-lightbox');
		lightBox.classList.remove('lightbox-on');
		video.currentTime = 0;
		video.pause();
	}

	shields.forEach(sigil => sigil.addEventListener('click', openLightbox));

	video.addEventListener('ended', closeLightbox);
})();
