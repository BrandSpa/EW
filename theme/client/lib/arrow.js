
const arrowAction = () =>{

    (function($){
        $(document).on('click', '.arrow svg', function(){
            $('html,body').animate({
            scrollTop: $(".project__content").offset().top-80},
            'slow');
        })
    })(jQuery)

}

export default arrowAction;