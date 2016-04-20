// After DOM is loaded
jQuery(document).ready(function($) {
  // TODO(HENRY): I think this has bugs with it
  // If you resize the browser window on the about page I see all of the images getting distorted
  $('.about_image').find('img').addClass('equal_height');
  set_bottom();
  equalDivs();

  // Handle sticky sidebars
  var sideBarEl = $('.sticky');
  sideBarEl.stick_in_parent();

  // Apply img as a bgimg for hero boxes
  $('.bgimg-main').each(function() {
    var imgSrc = $(this).find('.bg-img img').attr('src');
    $(this).css('background-image', 'url(' + imgSrc + ')');
  });

  // Homepage slider
  $('.industries-tabs li a').click(function() {
    $('.industries-content').removeClass('active');
    $('.industries-tabs li a').removeClass('active');
    $(this).addClass('active');
    var content = $(this).attr('rel');
    $('#' + content).addClass('active');
  });

  // TODO(DERRICK): Check this out
  // Scroll interaction
  var wi = $(window).width();
  if (wi > 761){
    $(window).scroll(function() {
      var fixedtop = $('.top');
      if ($(this).scrollTop() > 100) {
        fixedtop.addClass('fixed');
      } else {
        fixedtop.removeClass('fixed');
      }
    });
  } else {
    $(window).scroll(function() {
      var afteracroll = $('.body-container-wrapper').offset().top
      var afteracroll2 = afteracroll + 350

      var fixedtop = $('.top');
      if ($(this).scrollTop() > afteracroll2) {
        fixedtop.removeClass('fixed-mob');
        fixedtop.addClass('fixed-mob2');
      } else if ($(this).scrollTop() > afteracroll) {
        fixedtop.addClass('fixed-mob');
      } else {
        fixedtop.removeClass('fixed-mob2');
        fixedtop.removeClass('fixed-mob');
      }
    });
  }

  // Blog post read more functionality
  $('.readmore-link').click(function(){
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).text('Read More...');
      $(this).siblings('.blogpost-text').find('div.less').show();
      $(this).siblings('.blogpost-text').find('div.more').hide();
    } else {
      $(this).hide();
      $(this).addClass('active');
      $(this).text('Read Less');
      $(this).siblings('.blogpost-text').find('div.less').hide();
      $(this).siblings('.blogpost-text').find('div.more').show();
    }
  });

  // Photo carousel on careers page
  $('.careerslider-main .hs_cos_wrapper_widget_container').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  // TODO(Henry): Fix this. Not showing up on the blog page
  // Blog tabs
  $('.row-fluid .blogtabs-main ul li:first-child a').addClass('active');

  if ($('.blogtabs-main').length > 0) {
    $('.blogtabs-main ul li a').click(function() {
      $("body, html").animate({
        scrollTop: ($('#' +($(this).attr('rel'))).offset().top) - 80
      }, 600);
    });
  }

  // TODO(Henry): Please decribe what this is used for
  var type = window.location.hash.substr(1);
  var n = 180;
  if(type)
  {
      var $target = $('#'+type);
      if(type == 'schedule')
      {  n= 100  }
      $('html, body').animate({
        'scrollTop': $target.offset().top - n
    }, 900, 'swing');
  }

  // TODO(Henry): Please decribe what this is used for
  $('.footer-blinks ul li a, .footer-blinks ul li a[href^="#"] ').on('click',function (e) {
    var target = this.hash;
    var $target = $(target);
    $('html, body').animate({
        'scrollTop': $target.offset().top - 180
    }, 900, 'swing');
  });

  // News, press, events module interaction
  $(".news_list_section span div.hs_cos_wrapper:gt(3)").hide();
  $(document).on('click', '.news_link span a', function() {
    $(".news_list_section span div.hs_cos_wrapper:gt(3)").fadeIn(300);
    $(this).hide();
  });

  $(".press_list_section span div.hs_cos_wrapper:gt(3)").hide();
  $(document).on('click', '.press_release_link span a', function() {
    $(".press_list_section span div.hs_cos_wrapper:gt(3)").fadeIn(300);
    $(this).hide();
  });

  $(".event-list-section span div.hs_cos_wrapper:gt(3)").hide();
  $(document).on('click', '.view_events_link span a', function() {
    $(".event-list-section span div.hs_cos_wrapper:gt(3)").fadeIn(300);
    $(this).hide();
  });

  // Download functionality
  if($('.download_dropdown').length > 0) {
    $('.download_dropdown').each(function(){
      $(this).find('ul li:first').addClass('checked');
      $(this).find('ul').append('<span class="expand_link"><i class="fa fa-angle-down"></i></span>');
      $(this).find('ul li').not('.checked').slideUp(400);
      $(this).find('.expand_link').click(function(){
        $(this).addClass('checked');
        $(this).siblings('li').not('.checked').slideToggle(400);
      });

      $(this).find('ul li').click(function(event){
        $(this).parent().find('li').removeClass('checked');
        $(this).addClass('checked');
        $(this).siblings('li').not('.checked').slideUp(400);
        var path = $(this).find('a').attr('href').split('?')[0];

        $(this).parent('ul').next('a').attr('href', path);

        event.stopPropagation();
        return false;
      });
    });
  }
});

// After CSS and images have loaded
jQuery(window).load(function() {
  // Handle google search styling and interaction
  $('.top-search .hs_cos_wrapper_widget > div').before('<span class="search-icon"></span>');

  $('.gsc-input').focus(function() {
    $('.top-search').addClass('top-search-focus');
    $('.top').addClass('top-focus');
  });
  $('.gsc-input').blur(function() {
    $('.top-search').removeClass('top-search-focus');
    $('.top').removeClass('top-focus');
    $('.gsc-input').val('');
  });

  set_bottom();
  $('.registeropportunity-page .row-fluid .hs_expeacted_close_date input.hs-input').attr("placeholder", "Expected Close Date");

  var wi = $(window).width();
  if (wi < 761){
    $('body').on('touchend', function() {
      $('.top-search').removeClass('active');
      $('.search-icon').next('div').hide(250);
      $('.search-icon').show();
      $('.mainmenu').show(200);
    });

    $('.row-fluid .top-search').on('touchend', function(event) {
      event.stopPropagation();
    });

    $('.top-search , .mainmenu').wrapAll('<div class="top-searchmenu"></div>');
  }

  // Misc dom manipulation
  $('<span class="browse_text" id="upload">BROWSE</span>').insertAfter('.form-main .hs_logo_upload .hs-input');
  $('<span id="display">empty</span>').insertAfter('.form-main .hs_logo_upload .hs-input');

  $('#upload').click(function(){
    $(".hs_logo_upload .hs-input").click();
  });

  $(".hs_logo_upload .hs-input").change(function(){
    $("#display").html($(".hs_logo_upload .hs-input").val().substring($(".hs_logo_upload .hs-input").val().lastIndexOf('\\')+1));
  });

  $(document).on('click', '.download-form span form.hs-custom-form input[type="submit"]', function(event){
    var t = 'http://cdn2.hubspot.net/hubfs/540072/readme.pdf';
    var link = $('<a href="'+t+'" download="'+t+'" onclick="show()" class="zip-file">Click here</a>');
    $('body').append(link);
    setTimeout(function(){
        link.trigger('click');
    }, 1900);

    return false;
  });
});

// Scroll events
$(window).scroll(function(){
  // TODO(Derrick): Figure out if you want to keep this still or restyle
  // Mobile top logo functionality
  if($('.header-icon').length >0 ){
    if($(this).scrollTop()> 100) {
        $('.header-icon').fadeOut(1000);
    }
  }

  // TODO(Henry): This is broken right now. Alignment issues when resize window
  // Blog share bar functionality
  if($('.blogpost-bot').length >0 ){
    var footer_top = $('.footer').offset().top - $(window).height() - 40;
    if($(this).scrollTop() > footer_top ) {
      $('.blogpost-bot').css('position','static');
      $('.blogpost-bot').addClass('nomargin');
    } else {
      $('.blogpost-bot').css('position','fixed');
      $('.blogpost-bot').removeClass('nomargin');
    }
  }
});

// Resize events
$(window).resize(function(){
  equalDivs();
  set_bottom();
});

// Helper methods
function equalDivs() {
  var highest = null;
  var hi = 0;
  $(".equal_height").each(function(){
    var h = $(this).outerHeight();
    if(h > hi){
      hi = h;
      highest = $(this);
    }
  });
  $(".equal_height").css('min-height', hi );
}

function set_bottom() {
  var wrapperpad = $(window).width() - $('.wrapper').width();
  var wrapperpad = wrapperpad /2;
  if($('.blogpost-bot').length > 0){
    var mxwidth = $('.blogpost-detail').width() + 40;
    if(wrapperpad > 0 ) {
        $('.hs-blog-post .row-fluid .blogpost-bot').css('left',wrapperpad);
    }
    if($(window).width() < 1200 ){
        $('.hs-blog-post .row-fluid .blogpost-bot').css('left','30px');
    }
    $('.hs-blog-post .row-fluid .blogpost-bot').css('max-width',mxwidth);
  }
}
