(function(){
	$('.btn-nav').click(function(e) {
		e.preventDefault();
		$('.drawer').toggleClass('nav-is-open');
	});
})();