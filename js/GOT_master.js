(() => {
	// stub
	console.log('fired!');

	const 	sigils 		= document.querySelectorAll('.sigil-container'),
			lightbox 	= document.querySelector('.lightbox'),
			video		= document.querySelector('video');
			closeLB     = document.querySelector('.lightbox-close');
			banners		= document.querySelector('#houseImages');

	// function slideIMG() {
	// 	let targetIMG = this.id();
	// 	let targetImages = targetIMG; 
	// 	image.src = `images/${}.jpg`;
	// 	image.show();
	// }

	function openLightbox() {
		//Grap the right video source
		// debugger;
		//Let the lowercase house namw form the class List
		let targetHouse =this.className.split(" ")[1];
		console.log(targetHouse);


		// stack become Stark -> first make a capital S, then add ark or any house name
		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetSrc}.mp4`;

		lightbox.classList.add('lightbox-on');
		video.load();
		video.play();

	}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');
		video.currentTime = 0;
		video.pause();
	}
	function animateBanner() {
		const offSet = 600; //thus us the offset / width of one image

		//this is the total distance the images need to mive as a puxel value 
		//dataset.offset is comming from each sheild we click on 
		totalOffset = this.dataset.offset * offSet + "px";
		banners.style.right = totalOffset;
	}
	// sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));
	sigils.forEach(sigil => sigil.addEventListener('click', animateBanner));

	video.addEventListener('ended', closeLightbox);
	closeLB.addEventListener('click', closeLightbox);
})();