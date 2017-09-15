$(function() {
	var projectTop = $('#projects').offset().top;
	var contactTop = $('#contact').offset().top;
	var about = $('a[href="#about"]');
	var projects = $('a[href="#projects"]');
	var contact = $('a[href="#contact"]');

	//animation for clicking on one of the nav bar links
	$(document).on('click', '.navlink', function(event){
	    event.preventDefault();
	    var id = $($.attr(this, 'href'));
	    $('html, body').animate({
	        scrollTop: id.offset().top
	    }, 500, function() {
	    	linkDecoration();
	    });
	});

		//any time the user scrolls
    $(document).scroll(function() {
    	linkDecoration();
    });

		//hides underline for nav links that are not in the current view of the webpage
		//displays the underline for the nav link that is currently being viewed
		//uses the top of each of the sections to determine which ones to hide/unhide
    function linkDecoration() {
    	var current = $(document).scrollTop();
    	if (current >= 0 && current < projectTop - 50) {
    		about.css('text-decoration', 'underline');
    		projects.css('text-decoration', 'none');
    		contact.css('text-decoration', 'none');
    	}
    	else if (current >= projectTop - 50 && current < contactTop - 50) {
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
