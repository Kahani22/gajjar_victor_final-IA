(() => {
	console.log("javascript linked up");

	let button 		= document.querySelector("#navButton");
		mainNav		= document.querySelector("#mainNav");
		links		= document.querySelectorAll("#mainNav a");

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
		const offSet = 775;
		let currentOffset = this.dataset.offset * offSet;
		projects.style.right = currentOffset + "px";
	}

	// donate imgs animation
	function donImgAnim() {
		const Offset = 405;
		let currentOffSet = this.dataset.offset2 * Offset;
		donateImg.style.right = currentOffSet + "px";
	}

	// shop imgs animation
	function shopImgAnim() {
		const OffSet = 405;
		let currentoffSet = this.dataset.offset3 * OffSet;
		shopImg.style.right = currentoffSet + "px";
	}

	//links scroll function
	function scrolling(e) {
		e.preventDefault();
		let contentArea = e.currentTarget.id + "Con"
		TweenLite.to(window, 1, {scrollTo:{y:`#${contentArea}`, offsetY: 200, autoKill: false}});
	}



	button.addEventListener("click", navMenu);

	for(var i=0; i < accordions.length; i++) {
		accordions[i].addEventListener('click', accordion);
	}

	prjButtons.forEach(button => button.addEventListener('click', projectAnim));

	donButtons.forEach(button2 => button2.addEventListener('click', donImgAnim));

	shopButtons.forEach(button3 => button3.addEventListener('click', shopImgAnim));

	links.forEach(link => link.addEventListener('click', scrolling));

})();