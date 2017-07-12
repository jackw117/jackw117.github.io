$(function() {
	var projectTop = $('#projects').offset().top;
	var contactTop = $('#contact').offset().top;
	var about = $('a[href="#about"]');
	var projects = $('a[href="#projects"]');
	var contact = $('a[href="#contact"]');

	$(document).on('click', '.navlink', function(event){
	    event.preventDefault();
	    var id = $($.attr(this, 'href'));
	    $('html, body').animate({
	        scrollTop: id.offset().top
	    }, 500, function() {
	    	linkDecoration();
	    });
	});

    $(document).on('mousewheel', function() {
    	linkDecoration();
    });

    function linkDecoration() {
    	var current = $(document).scrollTop(); 
    	if (current >= 0 && current < projectTop) {
    		about.css('text-decoration', 'underline');
    		projects.css('text-decoration', 'none');
    		contact.css('text-decoration', 'none');
    	} 
    	else if (current >= projectTop && current < contactTop) {
    		about.css('text-decoration', 'none');
    		projects.css('text-decoration', 'underline');
    		contact.css('text-decoration', 'none');
    	}
    	if ((current + $(window).height()) > $(document).height() - $('#contact').outerHeight()) {
    		about.css('text-decoration', 'none');
    		projects.css('text-decoration', 'none');
    		contact.css('text-decoration', 'underline');
    	}
    }
});