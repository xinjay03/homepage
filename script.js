$(document).ready(function() {

    $('#menu').click(function(){         /*當menu被按下*/
     $(this).toggleClass('fa-times');   /*menu變成x*/
     $('header').toggleClass('toggle');     
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});