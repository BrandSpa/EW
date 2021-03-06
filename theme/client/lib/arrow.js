
const arrowAction = () =>{

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return false;
    }

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

            $(document).on('click', '#backtotop', function(){
                $('html, body').animate({
                    scrollTop: 0
                }, 500);
            });

            var _targetURL = "",
                _target ="_self";

            $('.show_terms').click(function(e){
                e.preventDefault();e.stopPropagation();
                var terms = getCookie("esw_terms");
                var url = $(this).data('href');
                _targetURL = url;
                _target = $(this).attr('target')?$(this).attr('target'):'_self';
                if( !terms ){
                    $('.terms_and_conditions').modal('show');
                }else{
                    window.open(url, _target);
                }
            });

            $('.modal-footer .accept').click(function(e){
                setCookie('esw_terms', 'true', 60);
                
                var url = _targetURL;
                window.open(url, _target);
                $('.terms_and_conditions').modal('hide');

            })

        })(jQuery);
    }
    

}

export default arrowAction;