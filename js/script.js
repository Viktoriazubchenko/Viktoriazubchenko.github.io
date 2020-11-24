
$(document).ready(function() {

  // modal windows with info about sites
  
  $('.more').each(function(i){
    $(this).on('click', function(){
      $(".work-card__overlay").fadeIn();
      $(".work-card").eq(i).fadeIn();
      $('html, body').css({
           overflow: 'hidden'
      });
    });
  });

  $(".close").click(function(){
    $(".work-card__overlay").fadeOut();
    $(".work-card").fadeOut();
    $('html, body').css({
      overflow: 'auto'
    });
  });
  

// Header Scroll

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $(".header").addClass("bright");
            $(".header__link").addClass("bright-links");
        } else {
            $(".header").removeClass("bright");
            $(".header__link").removeClass("bright-links");
        }
    });

    
    // Page up

    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
      });
      
      $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });



});

