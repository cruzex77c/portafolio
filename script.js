$(document).ready(function(){

    if($(window).width() > 700){
        $('.list-social li').each(function(index, elemento){
            $(this).fadeIn(2000 + (index * 500));
        });
        arrow_movement();
        $(window).scroll(function(){
            var scroll = $(this).scrollTop();
            var opacidad = scroll * .01;
            $('.menu').css({'background': 'rgba(255,255,255,'+opacidad+')'});
        });
    }else{
        arrow_movementResponsive();
        $('.menu').css({'background': 'rgba(255,255,255,1)'});
    }

    $('.title').fadeIn(2000);

    $('.menu a').each(function(index, elemento){
        $(this).fadeIn(2000 + (index * 500));
    });

    $('#check-menu').click(function(){
        if($(this).prop('checked')){
            $('.menu').toggleClass('menu-s');
        }else{
            $('.menu').toggleClass('menu-s');
        }
    });
    $('.fa-facebook-square').click(function(){
        window.open('https://www.facebook.com/otonielvicente.dominguezgonzalez');
    });
    
    $('.fa-github').click(function(){
        window.open('https://github.com/cruzex77c');
    });
    
    $('.fa-instagram').click(function(){
        window.open('https://www.instagram.com/cruzex77c/');
    });

    $('.fa-codepen').click(function(){
        window.open('https://codepen.io/cruzex77c/');
    });

    $('.fa-twitter-square').click(function(){
        window.open('https://twitter.com/otonielex77c');
    });
            
    $('#inicio').click(function(event){
        event.preventDefault();
        var pos = $('.container').offset().top;
        $('html, body').animate({
            scrollTop: pos
        },500);
    });
    
    $('#perfil').click(function(event){
        event.preventDefault();
        var pos = $('.skills_title').offset().top;
        $('html, body').animate({
            scrollTop: pos
        },500);
    });
            
    $('#proyectos').click(function(event){
        event.preventDefault();
        var pos = $('.titulo_proyectos').offset().top;
        $('html, body').animate({
            scrollTop: pos
        },500);
    });
    
    $('#contacto').click(function(event){
        event.preventDefault();
        var pos = $('footer').offset().top;
        $('html, body').animate({
            scrollTop: pos
        },500);
    });

});

function arrow_movement(){
    $('.arrow').animate({
        top: "89%"
    },700);

    $('.arrow').animate({
        top: "90%"
    },700,arrow_movement);
}

function arrow_movementResponsive(){
    $('.arrow').animate({
        top: "79%"
    },700);

    $('.arrow').animate({
        top: "80%"
    },700,arrow_movementResponsive);
}
