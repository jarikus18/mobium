$(document).ready(function(){

 $(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('#headerline').addClass("sticky");
}
else{
$('#headerline').removeClass("sticky");
}
});



      $('.language').mouseenter(function() {   
      $('.language__ru .fa-angle-down').addClass('fa-angle-up');
      $('.language-ul').fadeIn('d-block');
    });

    $('.language').mouseleave(function() {   
      $('.language__ru .fa-angle-down').removeClass('fa-angle-up');
      $('.language-ul').fadeOut('d-block');
    });
 

// о нас
	var individual_price_table = $('.j-faq').find('.spoiler-body3'); // создаем переменую individual_price_table
// показать скрытую галерею
$('.spoiler-body3').hide();
$('.spoiler-title3').click(function(){
	individual_price_table.addClass('active');
	
    $(this).toggleClass('opened').toggleClass('closed');
   $( ".spoiler-body3" ).slideToggle();
    if($(this).hasClass('opened')) {
        $(this).html('О нас');
        individual_price_table.removeClass('active');        
    }
    else {
        $(this).html('О нас');
    }
});

var individual_price_table4 = $('.j-faq').find('.spoiler-body4'); // создаем переменую individual_price_table
// показать скрытую галерею
$('.spoiler-body4').hide();
$('.spoiler-title4').click(function(){
  individual_price_table4.addClass('active');
  
    $(this).toggleClass('opened').toggleClass('closed');
   $( ".spoiler-body4" ).slideToggle();
    if($(this).hasClass('opened')) {
        $(this).html('Язык');
        individual_price_table4.removeClass('active');        
    }
    else {
        $(this).html('Язык');
    }
});
  
    //menu 
  
$('.menu-open').click(function () {
$('.hamburger').toggleClass('is-active');	});


$('.menu-open').click(function () {

$('.menu-collapse').toggleClass('d-block');	

$('.menu-collapse').toggleClass('scroll');
$('ul.menu').toggleClass('scroll__y');
});


    //slider
    $('.slider').slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider-arrow-right.png" alt="arrow"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider-arrow-left.png" alt="arrow"></button>',
        dots: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },{

      breakpoint: 768,
      settings: {
        nextArrow: '<button type="button" class="slick-next"><img src="img/rrr.png" alt="arrow"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/ppp.png" alt="arrow"></button>',
		slidesToShow: 1,
              slidesToScroll: 1
      }
		  }
      ]
    });

    //rates
    $('.rate-control-1').bind("click", function() {
      $('.active').removeClass('active');
      $('.one-mounth').addClass('active');
    });
    $('.rate-control-2').bind("click", function() {
      $('.active').removeClass('active');
      $('.six-mounth').addClass('active');
    });
    $('.rate-control-3').bind("click", function() {
      $('.active').removeClass('active');
      $('.one-year').addClass('active');
    });

    //included
    $(".included-catalog").bind("click", function() {
      $("#included-iphone").attr("src","img/1screen.png");
      $('.included-block').removeClass('active-block');
      $('.included-block-catalog').addClass('active-block');
    });
    $(".included-payment").bind("click", function() {
      $("#included-iphone").attr("src","img/4screen.png");
      $('.included-block').removeClass('active-block');
      $('.included-block-payment').addClass('active-block');
      
    });
    $(".included-design").bind("click", function() {
      $("#included-iphone").attr("src","img/2screen.png");
      $('.included-block').removeClass('active-block');
      $('.included-block-design').addClass('active-block');
      
    });
    $(".included-message").bind("click", function() {
      $("#included-iphone").attr("src","img/3screen.png");
      $('.included-block').removeClass('active-block');
      $('.included-block-message').addClass('active-block');
      
    });
    $(".included-geolocation").bind("click", function() {
      $("#included-iphone").attr("src","img/5screen.png");
      $('.included-block').removeClass('active-block');
      $('.included-block-geolocation').addClass('active-block');
      
    });
    $(".included-percent").bind("click", function() {
      $("#included-iphone").attr("src","img/6screen.png");
      $('.included-block').removeClass('active-block');
      $('.included-block-percent').addClass('active-block');
      
    });


    $('.included .included-item').click(function() {
      $('.included .included-item').removeClass('included-active');
      $(this).addClass('included-active');
    });
	
	
	



	    $("form.callback").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() {
        // Done Functions
        $(th).find('.success').removeClass('active').fadeOut();
        th.trigger("reset");
      }, 3000);

      
    });
    
    return false;
   
  });
     //slider
    $('.supre_pes').slick({
       infinite:  true,
      slidesToShow: 1,
      slidesToScroll: 1,
              adaptiveHeight: true,
      arrows: true,
        nextArrow: '<button type="button" class="slick-next"><img src="img/rrr.png" alt="arrow"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/ppp.png" alt="arrow"></button>',
        dots: true
    });
	
	  //slider
    $('.supre_pese').slick({
      infinite:  true,	  
      slidesToShow: 1,
      slidesToScroll: 1,
              adaptiveHeight: true,
      arrows: true,
        nextArrow: '<button type="button" class="slick-next"><img src="img/rrr.png" alt="arrow"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/ppp.png" alt="arrow"></button>',
        dots: true
    });
    $('.supre_pesek').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1, 
              adaptiveHeight: true,
      autoplay: true,
      arrows: true,
        nextArrow: '<button type="button" class="slick-next"><img src="img/rrr.png" alt="arrow"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/ppp.png" alt="arrow"></button>',
        dots: true
    });
	

$ ("label.rate-control-1"). click (function () { 
$ ('.supre_pes'). slick ('refresh'); 
});

$ ("label.rate-control-2"). click (function () { 
$ ('.supre_pese'). slick ('refresh'); 
});
$ ("label.rate-control-3"). click (function () { 
$ ('.supre_pesek'). slick ('refresh'); 
});


  });

  //map
  var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 59.9402951, lng: 30.2756072},
          zoom: 17,
          zoomControl: false,
        scaleControl: false,
      navigationControl: false,
        mapTypeControl: false,
        scaleControl: true,
        draggable: false,
        disableDefaultUI: true
        });

       var image = 'img/pin.svg';
        var marker = new google.maps.Marker ({
            position: {lat: 59.9402951, lng: 30.2756072},
            map: map,
            icon: image,
            title: '<h3>Mobium</h3><br><p>Разработка мобильного приложения для интернет-магазина iOS и Android за 14 дней<p>'
        });
        
        var InfoWindow = new google.maps.InfoWindow({
            content: '<h3>Mobium</h3><h6>Разработка мобильных приложений</h6>'
        });
        

        marker.addListener('click', function(){
            InfoWindow.open(map, marker);
        });
      }

