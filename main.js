/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('#nav a, .scrolly').scrolly({
		speed: 1000,
		offset: function () { return $nav.height(); }
	});

})(jQuery);


// align items based on window width
function alignItems() {
	var para = document.querySelector(".description-phase")

	var windowWidth = window.innerWidth;

	if (windowWidth < 768) {
		para.style.textAlign = 'center';
	} else {
		para.style.textAlign = 'left';
	}
}

alignItems();

window.addEventListener('resize', alignItems);

// open new page with button click
// var button = document.querySelector(".work-button");

// button.addEventListener('click', openWorkPage);

// function openWorkPage() {
// 	window.open('work.html', '_self');
// }


// open external html
var extendButton = document.querySelector(".work-button");
var workArticle = document.querySelector(".work-article");
var origButtonContent = extendButton.textContent;

extendButton.addEventListener("click", function () {
	workArticle.classList.toggle('hide-article');
	
	if (workArticle.classList.contains('hide-article')) {
		extendButton.textContent = origButtonContent;
	} else {
		extendButton.textContent = "Close";
	}

	// if (!(workArticle.classList.contains("showed-article"))) {
	// 	workArticle.classList.add("showed-article")
	// 	extendButton.textContent = "Close";
	// }
	// else if (workArticle.classList.contains("showed-article")){
	// 	workArticle.classList.remove("showed-article");
	// 	extendButton.textContent = "See More";
	// }
});

// send email
function sendEmail() {
	// get the form data
	const form = document.querySelector("form");
	const formData = new FormData(form);

	// send post request to the server-side script
	fetch('/send-email', {
		method: 'POST',
		body: formData
	}).then(Response => {
		console.log(Response);
	}).catch(Error => {
		console.log(Error);
	})
}
	
