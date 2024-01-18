$(function(){

  /* Include Files */
  $('.header-include').load('/include/header.html', function(){

    /* Mega Navigation : Mobile & PC Width Check */
    $(window).resize(function(){
      /* 디바이스 너비가 767 이상 일 때(태블릿, PC) */
      if($(window).innerWidth() > 767) {
        $('.trigger').click(function(){
          $(this).toggleClass('active');
          $('.mega-navi').stop().slideToggle(300);
        })
        $('section').click(function(){
          $('.mega-navi').stop().slideUp(300);
        });
      }
      /* 디바이스 너비가 767 이하 일 때(모바일) */
      else if($(window).innerWidth() < 767) {
        $('.trigger').click(function(){
          $('.mega-navi').animate({'left': 0}, 300);
        });
        $('section, .btn-mega-navi-close').click(function(){
          $('.mega-navi').animate({'left': -300}, 300);
        });
      }
    }).resize();

    /* Member Register */
    $('.toggle-pw').click(function(){
      // Toggle Icon Shape
      $(this).toggleClass('bi-eye');
      // Toggle Input Type
      var inputType = $(this).parent().children('input').attr('type');
      if(inputType == 'password') {
        $(this).parent().children('input').attr('type', 'text');
      }
      else {
        $(this).parent().children('input').attr('type', 'password');
      }
    });

    /* Header Login Modal */
    $('.btn-login, .login-member a').click(function(){
      $('.member-login-overlay').fadeIn();
      $('body').addClass('active');
    });
    $('.member-login .btn-modal-close').click(function(){
      $('.member-login-overlay').fadeOut();
      $('body').removeClass('active');
    });

    /* After Login Header UI */
    $('.btn-member-primary').click(function(){
      $('.member-login-overlay').fadeOut();
      $('.user-alarm').show();
      $('.login-register-buttons').hide();
      $('body').removeClass('active');
    })

    /* Mega Navi */
    $('.mega-navi-item b').click(function(){
      $('.mega-navi-item-wrap').slideUp(200);
      $(this).next().stop().slideDown(200);
      $(this).addClass('active');
      $(this).parent().siblings().children('b').removeClass('active');
    })

  });

  $('.footer-include').load('/include/footer.html', function(){
    /* Footer LNB */
    $('.link-item-title').click(function(){
      $(this).next().stop().slideToggle(200);
      $(this).toggleClass('active');
    })
    /* Company Info Trigger */
    $('.company-info-trigger').click(function(){
      $('address').toggle();
    })
  });

  /* Scroll Header Fixed */
  $(window).scroll(function(){
    if($(this).scrollTop() > 200) {
      $('header').addClass('active');
    }
    else {
      $('header').removeClass('active');
    }
  });

  /* Gototop Action */
  $('.gototop').click(function(){
    $('html, body').animate({scrollTop: 0}, 500);
  })

  /* Scroll Show Gototop */
  $(window).scroll(function(){
    if($(this).scrollTop() > 700) {
      $('.gototop').addClass('active');
    }
    else {
      $('.gototop').removeClass('active');
    }
  });

  /* The Final Countdown */
  $("#early-bird-countdown")
  .countdown("2023/11/01", function(event) {
    $(this).html(
      event.strftime('<b>종료까지</b> %D일 <em>%H</em>:<em>%M</em>:<em>%S</em> 남음')
    );
  });

  /* Category Detail Buttons */
  $('.btn-shortcut').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });

  /* Take Product & Cart Check All Function */
  /* $('.cart-item .btn-clear').click(function(){
    $(this).parents('.cart-item').hide();
  });
  $('.cart-wrap .btn-all-clear').click(function(){
    $('.cart-item').hide();
  }); */
  $('.cart-item .btn-clear').click(function(){
    $(this).parents('.cart-item').remove();
    if($('.cart-item').length == 0) {
      $('.cart-item-empty').show();
      $('.cart-header').hide();
    }
  });
  $('.cart-wrap .btn-all-clear').click(function(){
    $('.cart-item').remove();
    if($('.cart-item').length == 0) {
      $('.cart-item-empty').show();
      $('.cart-header').hide();
    }
  });
  
  $('.cart-chk-all').click(function(){
    $('.check-status .cart-chk').prop('checked', this.checked)
  });

  /* Product Share Modal */
  $('.btn-sidebar-badge.share').click(function(){
    $('.product-share-overlay').fadeIn();
    $('body').addClass('active');
  });
  $('.product-share .btn-modal-close').click(function(){
    $('.product-share-overlay').fadeOut();
    $('body').removeClass('active');
  });
  $('.share-link').click(function(){
    $('.copied-link').show();
  });

  /* Product Detail Navigation */
  $('.product-detail-navigation a').click(function(e){
    /* Active Style Change */
    $(this).addClass('active').siblings().removeClass('active');
    /* Smooth Scrolling */
    var linkLocation = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkLocation).offset().top
    }, 500);
    e.preventDefault();
  });

  /* Product Course */
  $('.course-title').click(function(){
    $(this).next().slideToggle(200);
    $(this).toggleClass('active');
  });

  /* Product Course : All Show/Hide */
  $('.btn-course-fold').click(function(){
    $('.course-content').slideUp(200);
    $(this).addClass('selected');
    $(this).siblings('button').removeClass('selected');
    $('.course-title').addClass('active')
  })
  $('.btn-course-expand').click(function(){
    $('.course-content').slideDown(200);
    $(this).addClass('selected');
    $(this).siblings('button').removeClass('selected');
    $('.course-title').removeClass('active')
  })

  /* Product FAQ */
  $('.faq-title').click(function(){
    // 기본적으로 모두 펼치기
    // $(this).next().stop().slideDown(200);
    // ▼ 클릭한 것 펼치고 나머지는 접기
    // $(this).siblings('.faq-content').stop().slideUp();
    // $(this).next().stop().slideDown(200);
    // ▼ 클릭한 것 펼치기
    $(this).next().stop().slideToggle(200);
  });

  /* Front Event Banner */
  $('.close-buttons a').click(function(){
    $('.front-event-banner').fadeOut();
  });

  /* Cart Confirm */
  $('.btn-primary.btn-cart').click(function(){
    $('.cart-confirm').show();
    setTimeout(function(){
      $('.cart-confirm').hide();
    }, 4000)
  })
  $('.cart-confirm .btn-close').click(function(){
    $('.cart-confirm').hide();
  });

  /* Product Zzim */
  $('.zzim').click(function(){
    $(this).children().toggleClass('bi-heart bi-heart-fill');
    $(this).children().css({
      'color': '#FF4C79'
    });
  });

  /* Front Slider */
  $('.front-slider-items').slick({
    infinite: true, // 마지막 슬라이드 다음에 처음으로 돌아가기
    arrows: false, // 다음 이전 버튼
    dots: false, // 동그라미 도트 버튼
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 슬라이드가 머무는 시간
    fade: false, // 크로스페이드로 할지 여부
    speed: 300, // 슬라이드 교차하는 시간
    pauseOnHover: true // 마우스 올라갔을 때 잠시 멈춤
  });

  /* Focus Class Slider */
  $('.focus-product-items').slick({
    slidesToShow: 4, // 최초에 보이는 개수
    slidesToScroll: 2, // 슬라이드할 때 몇개씩 슬라이드할지 개수
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false,
          arrows: false
        }
      }
    ]
  });

});
