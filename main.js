$(function() {
	var projectTop = $('#projects').offset().top;
	var contactTop = $('#contact').offset().top;
	var about = $('a[href="#about"]');
	var projects = $('a[href="#projects"]');
	var contact = $('a[href="#contact"]');

	//set the even div image to the correct location when page first loads,
	//and aligns it to be centered
	moveImg();

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
	$(window).resize(function() {
		moveImg();
	});

	//places the image on even rows in the projects table in the left column when
	//window size is over 974 and below the description on anything less
	//calls the imageAlign function on complete
	function moveImg() {
		if ($(window).width() <= 974) {
			$('.evenImg').each(function() {
				$(this).insertAfter($(this).closest('.container').children('.evenDiv'));
			});
		} else {
			$('.evenImg').each(function() {
				$(this).insertBefore($(this).closest('.container').children('.evenDiv'));
			});
			imageAlign();
		}
	}

	//aligns an image in the center of the containing div
	function imageAlign() {
		$('.row').children('.container').each(function() {
			var divHeight = $(this).height();
			var imageHeight = 0;
			var image = $(this).find('img');
			if (!image.prop('complete')) {
				image.on('load', function() {
					console.log(image.height());
					imageHeight = image.height();
				});
			} else {
				imageHeight = image.height();
			}
			console.log(imageHeight);
			if (imageHeight != 0) {
				image.css('margin-top', (divHeight - imageHeight) / 2);
			}
		});
	}
});
