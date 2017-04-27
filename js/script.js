$.fn.Accordion = function(e) {
    var self = this;
    $('.title').click(function(e) {
        $('.text').slideUp();
        $(this).next('.text').slideToggle();
    });
}
$(document).ready(function() {
    $('.accoridon').Accordion();
});