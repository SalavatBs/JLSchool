// var elms = document.getElementsByClassName( 'splide' );
// for ( var i = 0, len = elms.length; i < len; i++ ) {
// 	new Splide( elms[ i ] ).mount();
// }
new Splide( '.splide.swiper-container--intro' ).mount();

new Splide( '.splide.swiper-container--reviews', {
	type   : 'loop',
	padding: {
		right: '5rem',
		left : '5rem',
	},
} ).mount();

new Splide( '.splide.swiper-container--mobile' ).mount();
