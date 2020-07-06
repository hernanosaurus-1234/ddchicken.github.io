const menu = (function() {
	let isOpen = false;

	function init() {
		$('.hamburger').on('click', function(e) {
			if (isOpen === false) {
				isOpen = true;

				gsap.to($('#mobile-nav'), {
					duration  : 0.6,
					left      : '0%',
					ease      : 'expo.out',
					overwrite : true
				});
				gsap.to($('#mobile-nav .nav-wrapper'), {
					duration  : 1.2,
					right     : '0%',
					delay     : 0.1,
					ease      : 'expo.out',
					overwrite : true
				});

				$('#hamburger .hamburger').addClass('is-active');
				$('#hamburger').addClass('menu-active');

				$('body').addClass('stop-scrolling');
			} else {
				isOpen = false;

				gsap.to($('#mobile-nav .nav-wrapper'), {
					duration : 0.6,
					right    : '-120%',
					ease     : 'expo.out'
				});
				gsap.to($('#mobile-nav'), {
					duration : 1.2,
					left     : '120%',
					delay    : 0.1,
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
