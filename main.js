$(function() {
	var projectTop = $('#projects').offset().top;
	var contactTop = $('#contact').offset().top;
	var about = $('a[href="#about"]');
	var projects = $('a[href="#projects"]');
	var contact = $('a[href="#contact"]');

	//set the even div image to the correct location when page first loads,
	//and aligns it to be centered
	$(window).on('load', function() {
		moveImage();
	});

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

	//called each time the page is resized
	$(window).on('resize', function() {
		moveImage();
	});

	//places the image on even rows in the projects table in the left column when
	//window size is over 974 and below the description on anything less
	//calls the imageAlign function on complete if on devices larger than 974 pixels wide
	function moveImage() {
		if ($(window).width() <= 974) {
			$('.imgDiv').each(function() {
				if ($(this).hasClass('evenImg')) {
					$(this).insertAfter($(this).closest('.container').children('.evenDiv'));
				}
				$(this).css('margin-top', '35px');
			});
		} else {
			$('.evenImg').each(function() {
				$(this).insertBefore($(this).closest('.container').children('.evenDiv'));
			});
			imageAlign();
		}
	}

	//aligns the two columns in the projects table to both be centered in the containing row
	function imageAlign() {
		$('.row').children('.container').each(function() {
			var descDiv = $(this).find('.desc');
			var descHeight = $(this).find('.desc').height();
			var imageDiv = $(this).find('.imgDiv');
			var imageHeight = imageDiv.height();
			if (!imageDiv.prop('complete')) {
				imageDiv.on('load', function() {
					imageHeight = imageDiv.height();
				});
			} else {
				imageHeight = imageDiv.height();
			}
			if (imageHeight != 0) {
				if (imageHeight < descHeight) {
					imageDiv.css('margin-top', (descHeight - imageHeight) / 2 + 'px');
					descDiv.css('margin-top', '0px');
				} else if (descHeight < imageHeight) {
					imageDiv.css('margin-top', '0px');
					descDiv.css('margin-top', (imageHeight - descHeight) / 2 + 'px');
				} else {
					imageDiv.css('margin-top', '0px');
					descDiv.css('margin-top', '0px');
				}
			}
		});
	}
});
