// var elms = document.getElementsByClassName( 'splide' );
// for ( var i = 0, len = elms.length; i < len; i++ ) {
// 	new Splide( elms[ i ] ).mount();
// }
new Splide( '#splide', {
	perPage: 3,
	rewind : true,
	classes: {
		prev  : 'splide__arrow--prev your-class-prev',
		next  : 'splide__arrow--next your-class-next',
	}
} ).mount();

new Splide( '#splide', {
	type   : 'loop',
	padding: {
		right: '5rem',
		left : '5rem',
	},
} ).mount();
