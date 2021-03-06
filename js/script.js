const swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.arrow-right',
		prevEl: '.arrow-left',
	},
});