(() => {
	console.log("javascript linked up");

	let button 		= document.querySelector("#navButton");
		mainNav		= document.querySelector("#mainNav");
		mainNav		= document.querySelector("#mainNav2");
		links		= document.querySelectorAll("#mainNav ul li a");
		links		= document.querySelectorAll("#mainNav2 ul li a");
		backToTop	= document.querySelector("#backToTop");
		homeArea	= document.querySelector("#homelinkCon");

<<<<<<< HEAD
		topBar		= document.querySelector("#topBar");

=======
>>>>>>> master
		video		= document.querySelector("#TRAAvideo");
		closeVid	= document.querySelector("#closeVideo")

	const	prjButtons  = document.querySelectorAll('.prjCircle'); 
			projects	= document.querySelector("#projectsImages");

			donButtons	= document.querySelectorAll('.donCircle');
			donateImg	= document.querySelector("#donateImages");

			shopButtons	= document.querySelectorAll('.shopCircle');
			shopImg		= document.querySelector("#shopImages");

	var		accordions	= document.querySelectorAll("#accordionTitle");

	// nav menu toggle
	function navMenu() {
		mainNav.classList.toggle("on");
	}

	//newsletters accordion function
	function accordion(e) {
		e.currentTarget.classList.toggle('plusMinus');
		e.currentTarget.nextElementSibling.classList.toggle('open');
	}

	// projects animation
	function projectAnim() {
		const offSet = 355;
		let currentOffset = this.dataset.offset * offSet;
		projects.style.right = currentOffset + "px";
	}

	// donate imgs animation
	function donImgAnim() {
		const Offset = 204;
		let currentOffSet = this.dataset.offset2 * Offset;
		donateImg.style.right = currentOffSet + "px";
	}

	// shop imgs animation
	function shopImgAnim() {
		const OffSet = 204;
		let currentoffSet = this.dataset.offset3 * OffSet;
		shopImg.style.right = currentoffSet + "px";
	}

	//links scroll function
	function scrolling(e) {
		e.preventDefault();
		let contentArea = e.currentTarget.id + "Con"
		TweenLite.to(window, 1, {scrollTo:{y:`#${contentArea}`, offsetY: 50, autoKill: false}});
	}

	//back to top function
	function scrollBackUp(e) {
		e.preventDefault();
		TweenLite.to(window, 1, {scrollTo:{y:topBar}, autoKill: false});
	}

	//close video lightbox

	function closeVideoBox() {
		video.classList.add('videoClose');
	 closeVideo.classList.add('closeClose');
	}


	button.addEventListener("click", navMenu);

	for(var i=0; i < accordions.length; i++) {
		accordions[i].addEventListener('click', accordion);
	}

	prjButtons.forEach(button => button.addEventListener('click', projectAnim));

	donButtons.forEach(button2 => button2.addEventListener('click', donImgAnim));

	shopButtons.forEach(button3 => button3.addEventListener('click', shopImgAnim));

	links.forEach(link => link.addEventListener('click', scrolling));

	backToTop.addEventListener('click', scrollBackUp);

	closeVid.addEventListener('click', closeVideoBox);

})();