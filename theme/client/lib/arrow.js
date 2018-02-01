
const arrowAction = () =>{
    window.onload = function(){
        (function($){
            $(document).on('click', '.arrow svg', function(){
                $('html,body').animate({
                scrollTop: $(".project__content").offset().top-100},
                'slow');
            })
        })(jQuery);
    }
    

}

export default arrowAction;