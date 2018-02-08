
const arrowAction = () =>{
    window.onload = function(){
        (function($){
            $(document).on('click', '.arrow svg', function(){
                $('html,body').animate({
                scrollTop: $(".project__content").offset().top-100},
                'slow');
            })

            $(document).on('click', 'a[href^="#"]', function (event) {
                event.preventDefault();
            
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
            });

            $(window).on('scroll', function() {
                if ($(this).scrollTop() > 300) {
                    $('#backtotop:hidden').stop(true, true).fadeIn();
                } else {
                    $('#backtotop').stop(true, true).fadeOut();
                }
            });

        })(jQuery);
    }
    

}

export default arrowAction;