// gsap.registerPlugin(ScrollTrigger);


// /*

// 	Featured Items

// */

// gsap.set(".item", {y: 100, autoAlpha: 0})

// gsap.to("#item-1", {
// 	scrollTrigger: {
// 		trigger       : "#hero",
// 		toggleActions : "play none none none",
// 		start         : "50% 50%",
// 		// markers       : true,
// 	},
// 	// Animation
// 	y         : 0,
// 	autoAlpha : 1,
// 	duration  : 0.5,
// 	ease      : "power1.out",
// 	z         : 0.01,
// });

// gsap.to("#item-2", {
// 	scrollTrigger: {
// 		trigger       : "#hero",
// 		toggleActions : "play none none none",
// 		start         : "50% 50%",
// 		// markers       : true,
// 	},
// 	// Animation
// 	y         : 0,
// 	autoAlpha : 1,
// 	duration  : 0.5,
// 	ease      : "power1.out",
// 	z         : 0.01,
// 	delay     : 0.5,
// });

// gsap.to("#item-3", {
// 	scrollTrigger: {
// 		trigger       : "#hero",
// 		toggleActions : "play none none none",
// 		start         : "50% 50%",
// 		// markers       : true,
// 	},
// 	// Animation
// 	y         : 0,
// 	autoAlpha : 1,
// 	duration  : 0.5,
// 	ease      : "power1.out",
// 	z         : 0.01,
// 	delay     : 1.0,
// });

// /*

// 	Order Now

// */

// gsap.set("#order .center", {y: 100, autoAlpha: 0})

// gsap.to("#order .center", {
// 	scrollTrigger: {
// 		trigger       : ".item-grid",
// 		toggleActions : "play none none none",
// 		start         : "50% 50%",
// 		// markers       : true,
// 	},
// 	// Animation
// 	y         : 0,
// 	autoAlpha : 1,
// 	duration  : 0.75,
// 	ease      : "power1.out",
// 	delay     : 0.25,
// 	z         : 0.01,
// });

// /*

// 	Split Container

// */


// gsap.set(".split-box", { width: 0, autoAlpha: 0 })
// gsap.set(".split-box .title", { x: -100, autoAlpha: 0 })
// gsap.set(".split-box .detail", { x: -100, autoAlpha: 0 })

// gsap.to("#delivery-box", {
// 	scrollTrigger: {
// 		trigger       : "#order",
// 		toggleActions : "play none none none",
// 		start         : "0 50%",
// 		// markers       : true,
// 	},
// 	// Animation
// 	width     : '100%',
// 	x 		  : 0,
// 	autoAlpha : 1,
// 	duration  : 0.75,
// 	ease      : "power1.out",
// 	delay     : 0.25,
// 	z         : 0.01,
// });

// gsap.to("#delivery-box .title", {
// 	scrollTrigger: {
// 		trigger       : "#order",
// 		toggleActions : "play none none none",
// 		start         : "50% 50%",
// 		// markers       : true,
// 	},
// 	// Animation
// 	x 		  : 0,
// 	autoAlpha : 1,
// 	duration  : 0.75,
// 	ease      : "power1.out",
// 	delay     : 0.75,
// 	z         : 0.01,
// });

// gsap.to("#delivery-box .detail", {
// 	scrollTrigger: {
// 		trigger       : "#order",
// 		toggleActions : "play none none none",
// 		start         : "50% 50%",
// 		// markers       : true,
// 	},
// 	// Animation
// 	x 		  : 0,
// 	autoAlpha : 1,
// 	duration  : 0.75,
// 	ease      : "power1.out",
// 	delay     : 0.75,
// 	z         : 0.01,
// });


// gsap.to("#signup-box", {
// 	scrollTrigger: {
// 		trigger       : "#order",
// 		toggleActions : "play none none none",
// 		start         : "0 50%",
// 		// markers       : true,
// 	},
// 	// Animation
// 	width     : '100%',
// 	x 		  : 0,
// 	autoAlpha : 1,
// 	duration  : 0.75,
// 	ease      : "power1.out",
// 	delay     : 0.75,
// 	z         : 0.01,
// });

// gsap.to("#signup-box .title", {
// 	scrollTrigger: {
// 		trigger       : "#order",
// 		toggleActions : "play none none none",
// 		start         : "50% 50%",
// 		// markers       : true,
// 	},
// 	// Animation
// 	x 		  : 0,
// 	autoAlpha : 1,
// 	duration  : 0.75,
// 	ease      : "power1.out",
// 	delay     : 1.5,
// 	z         : 0.01,
// });

// gsap.to("#signup-box .detail", {
// 	scrollTrigger: {
// 		trigger       : "#order",
// 		toggleActions : "play none none none",
// 		start         : "50% 50%",
// 		// markers       : true,
// 	},
// 	// Animation
// 	x 		  : 0,
// 	autoAlpha : 1,
// 	duration  : 0.75,
// 	ease      : "power1.out",
// 	delay     : 1.25,
// 	z         : 0.01,
// });


const menu = (function() {
	let isOpen = false;

	function init() {
		$('.hamburger').on('click', function(e) {
			if (isOpen === false) {
				isOpen = true;

				gsap.to($('#mobile-nav'), {
					duration  : 0.6,
					left     : '0%',
					ease      : 'expo.out',
					overwrite : true
				});

				$('#hamburger .hamburger').addClass('is-active');
				$('#hamburger').addClass('menu-active');

				$('body').addClass('stop-scrolling');
			} else {
				isOpen = false;

				gsap.to($('#mobile-nav'), {
					duration : 0.6,
					left     : '-100%',
					ease     : 'expo.out'
				});

				$('#hamburger .hamburger').removeClass('is-active');
				$('#hamburger').removeClass('menu-active');

				$('body').removeClass('stop-scrolling');
			}
		});
	}

	return {
		init : init
	};
})();

menu.init();
