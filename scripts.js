jQuery(document).ready(function($) {
    set_bottom();
    equalDivs();
    initParalaxBg(); // Background parallex Function initialization

    $('.bgimg-main').each(function() {
        var imgSrc = $(this).find('.bg-img img').attr('src');
        $(this).css('background-image', 'url(' + imgSrc + ')');
    });

    $('.mainmenu').addClass('js-enabled');
    $('.mainmenu .hs-menu-flow-horizontal').before('<a class="mobile-trigger"><i></i></a>');
    $('.mainmenu .hs-item-has-children > a').after('<a class="child-triggerm"><span></span></a>');
    $('a.mobile-trigger').click(function() {
        $(this).next('.mainmenu .hs-menu-flow-horizontal').slideToggle(250);
        $('body').toggleClass('mobile-open');
        $('a.child-triggerm').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(250);
        return false;
    });

    $('.industries-tabs li a').click(function() {
        $('.industries-content').removeClass('active');
        $('.industries-tabs li a').removeClass('active');
        $(this).addClass('active');
        var content = $(this).attr('rel');
        $('#' + content).addClass('active');
    });

    /*$('.readmore-link').click(function() {
        $(this).parents('.blogpost-box').find('.blogpostshort-content').hide();
        $(this).parents('.blogpost-box').find('.blogpost-full').show();
    });
   */
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

   $('.readmore-link').click(function(){
        if($(this).hasClass('active'))
        {
            $(this).removeClass('active');
            $(this).text('Read More...');
            $(this).siblings('.blogpost-text').find('div.less').show();
            $(this).siblings('.blogpost-text').find('div.more').hide();

        }else{
            $(this).hide();
            $(this).addClass('active');
            $(this).text('Read Less');
            $(this).siblings('.blogpost-text').find('div.less').hide();
            $(this).siblings('.blogpost-text').find('div.more').show();
        }
   });

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


  /* $('.post-listing .blogpost-box').each(function(){
      var path = $(this).find('div.blogpost-burl a ').attr('href');
      var tinyUrl = makeTinyUrl(path);
      $(this).find('div.blogpost-burl a').attr('href', tinyUrl);
      $(this).find('div.blogpost-burl a').text(tinyUrl);
   });
   */
   $('.row-fluid .blogtabs-main ul li:first-child a').addClass('active');

   if ($('.blogtabs-main').length > 0) {
        $('.blogtabs-main ul li a').click(function() {
            $("body, html").animate({
                scrollTop: ($('#' +($(this).attr('rel'))).offset().top) - 80
            }, 600);
        });
   }

   if($('.full_hero').length > 0) {
       var divHeight = $(window).height() - 142;
       $('.full_hero').css('height',divHeight);
   }

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

   $('.footer-blinks ul li a, .footer-blinks ul li a[href^="#"] ').on('click',function (e) {
        //e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').animate({
     		'scrollTop': $target.offset().top - 180
	    }, 900, 'swing');
	});

    /*if ($('.news_list_section').length > 0) {
        $('.news_list_section > span > div:gt(3)').slideUp();
    }
   if ($('.press_list_section').length > 0) {
        $('.press_list_section > span > div:gt(3)').slideUp();
    } */


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


    /*var node = document.getElementById('side'),
    nodeOffs = node.offsetTop,
    parent = node;

    while(parent = parent.offsetParent)
      if(parent.offsetTop)
        nodeOffs += parent.offsetTop;

    window.addEventListener('scroll', function(event){
        var scrollPos = document.body.scrollTop;

        if(scrollPos > (nodeOffs - 110) ){
            if(scrollPos < (document.body.scrollHeight - node.clientHeight - nodeOffs - 110)){
                node.style.top = (scrollPos - nodeOffs + 110) + 'px';
                node.style.marginTop =  '0px';
            }else{
               node.style.marginTop =  '-100px';
            }
        }else{
            node.style.top = '0px';
            node.style.marginTop =  '0px';
        }
    });
   */
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
             //  alert("in");
               $(this).parent().find('li').removeClass('checked');
               $(this).addClass('checked');
               $(this).siblings('li').not('.checked').slideUp(400);
               var path = $(this).find('a').attr('href').split('?')[0];

             //  alert(path);
               $(this).parent('ul').next('a').attr('href', path);
             //$(this).parent('ul').next('a').attr('download', 'http:'+path);
               event.stopPropagation();
               return false;
           });
       });

   }

});

$(window).scroll(function(){
    if($('.header-icon').length >0 ){
        if($(this).scrollTop()> 100) {
            $('.header-icon').fadeOut(1000);
        }
    }

    if($('.blogpost-bot').length >0 ){
        var footer_top = $('.footer').offset().top - $(window).height() - 40;
        if($(this).scrollTop() > footer_top ) {
            $('.blogpost-bot').css('position','static');
            $('.blogpost-bot').addClass('nomargin');

        }else {
            $('.blogpost-bot').css('position','fixed');
            $('.blogpost-bot').removeClass('nomargin');

        }
    }

});

$(window).resize(function(){
     equalDivs();
     set_bottom();
});

jQuery(window).load(function() {

    set_bottom();
    $('.registeropportunity-page .row-fluid .hs_expeacted_close_date input.hs-input').attr("placeholder", "Expected Close Date");

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



    $('<span class="browse_text" id="upload">BROWSE</span>').insertAfter('.form-main .hs_logo_upload .hs-input');
    $('<span id="display">empty</span>').insertAfter('.form-main .hs_logo_upload .hs-input');


    $('#upload').click(function(){
           $(".hs_logo_upload .hs-input").click();
    });

    $(".hs_logo_upload .hs-input").change(function(){
        $("#display").html($(".hs_logo_upload .hs-input").val().substring($(".hs_logo_upload .hs-input").val().lastIndexOf('\\')+1));
    });

    $(document).on('click', '.download-form span form.hs-custom-form input[type="submit"]', function(event){
        //var t = $('.download-form span form.hs-custom-form select option:selected').val();
        //var url='http://cdn2.hubspot.net/hubfs/540072/confluent/images/about-icon5.jpg  ';
        //window.open(url,'_self');
       // alert(t);
        var t = 'http://cdn2.hubspot.net/hubfs/540072/readme.pdf';
        var link = $('<a href="'+t+'" download="'+t+'" onclick="show()" class="zip-file">Click here</a>');
        $('body').append(link);
        setTimeout(function(){
            link.trigger('click');
        }, 1900);

        /*$.fileDownload('http://cdn2.hubspot.net/hubfs/540072/readme.pdf', {
            preparingMessageHtml: "We are preparing your report, please wait...",
            failMessageHtml: "There was a problem generating your report, please try again."
        });
        return false;*/
        //event.stopPropagation();
        return false;
    });



});

// Paralax effect - Background moves down when scrolling
var moveBg = function(el,i) {
    var wHeight = $(window).height();  // Window height
	var elTop = $(el).offset().top;  // Element's top position in page ( Distance from top of page to element's top line )
	var elHeight = $(el).innerHeight();  // Element height
	if(elTop > wHeight) {
		var elReachBottom = elTop - wHeight; // Position of scroll when element appear in page from bottom
	} else {
		var elReachBottom = 0;
	}
	var elReachTop = elTop + elHeight;  // Element's bottom position in page ( Distance from top of the page to element's bottom line )

	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();  // Window top scroll position
		var moveDistance = ( wScroll - elReachBottom )/i; // Distance to move background down
		if (( wScroll > elReachBottom ) && ( wScroll < elReachTop )) {  // Verify if element is in viewport or is out
			$(el).css({"background-position-y":moveDistance, "background-attachment":"fixed"});
		}

	});
};

var initParalaxBg = function(x) {

	$(".bgimg-main").each(function() {
		var x = 10 ;
		if(x) {
			moveBg(this,x);
		} else {
			moveBg(this,20);
		}
	});
}

$(function() {
    var top = $('#side').offset().top - parseFloat($('#side').css('marginTop').replace(/auto/, 0));
    var footTop = $('.footer-container-wrapper').offset().top - 500 - parseFloat($('.footer-container-wrapper').css('marginTop').replace(/auto/, 0));

    var maxY = footTop - $('#side').outerHeight();
    var r = ($(window).width() - $('.wrapper').width()) / 2;

    $(window).resize(function(e) {
        r = ($(window).width() - $('.wrapper').width()) / 2;
        $('#side').css({right: r+'px'});
    });

    $(window).scroll(function(evt) {
        var y = $(this).scrollTop();
        if (y > top-110) {
            if (y < maxY) {
                $('#side').addClass('fixed').removeAttr('style');
                $('#side').css({
                    right: r+'px',
                    top: '110px'
                });
            } else {
                $('#side').removeClass('fixed').css({
                    position: 'relative',
                    top: (maxY - top) + 'px',
                    right: '0px'
                });
            }
        } else {
            $('#side').removeClass('fixed');
            $('#side').css({
                    right: '0px',
                    top: '0px'
            });
        }
    });
});

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
        $('.hs-blog-post .row-fluid .blogpost-bot').css('left',wrapperpad);
    }
}
