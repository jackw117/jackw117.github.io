$(document).on('click', '.navlink', function(event){
    event.preventDefault();
    var id = $($.attr(this, 'href'));
    $('html, body').animate({
        scrollTop: id.offset().top - parseInt(id.css("margin-top"))
    }, 500);
});