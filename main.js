"use strict";var lastScroll=0;var isMobile=!1;var isiPhoneiPad=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){isMobile=!0}if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){isiPhoneiPad=!0}function SetMegamenuPosition(){if($(window).width()>991){setTimeout(function(){var totalHeight=$('nav.navbar').outerHeight();$('.mega-menu').css({top:totalHeight});if($('.navbar-brand-top').length===0)$('.dropdown.simple-dropdown > .dropdown-menu').css({top:totalHeight})},200)}else{$('.mega-menu').css('top','');$('.dropdown.simple-dropdown > .dropdown-menu').css('top','')}}function pad(d){return(d<10)?'0'+d.toString():d.toString()}function isIE(){var ua=window.navigator.userAgent;var msie=ua.indexOf("MSIE ");if(msie>0||!!navigator.userAgent.match(/Trident.*rv\:11\./)){return!0}else{return!1}}function setPageTitleSpace(){if($('.navbar').hasClass('navbar-top')||$('nav').hasClass('navbar-fixed-top')){if($('.top-space').length>0){var top_space_height=$('.navbar').outerHeight();if($('.top-header-area').length>0){top_space_height=top_space_height+$('.top-header-area').outerHeight()}$('.top-space').css('margin-top',top_space_height+"px")}}}function setButtonPosition(){if($(window).width()>767&&$(".swiper-auto-height-container").length>0){var leftPosition=parseInt($('.swiper-auto-height-container .swiper-slide').css('padding-left'));var bottomPosition=parseInt($('.swiper-auto-height-container .swiper-slide').css('padding-bottom'));var bannerWidth=parseInt($('.swiper-auto-height-container .slide-banner').outerWidth());$('.navigation-area').css({'left':bannerWidth+leftPosition+'px','bottom':bottomPosition+'px'})}else if($(".swiper-auto-height-container").length>0){$('.navigation-area').css({'left':'','bottom':''})}}$(window).on("scroll",init_scroll_navigate);function init_scroll_navigate(){var menu_links=$(".navbar-nav li a");var scrollPos=$(document).scrollTop();scrollPos=scrollPos+60;menu_links.each(function(){var currLink=$(this);var hasPos=currLink.attr("href").indexOf("#");if(hasPos>-1){var res=currLink.attr("href").substring(hasPos);if($(res).length>0){var refElement=$(res);if(refElement.offset().top<=scrollPos&&refElement.offset().top+refElement.height()>scrollPos){menu_links.not(currLink).removeClass("active");currLink.addClass("active")}else{currLink.removeClass("active")}}}});var $window=$(window),$body=$('.bg-background-fade'),$panel=$('.color-code');var scroll=$window.scrollTop()+($window.height()/2);$panel.each(function(){var $this=$(this);if($this.position().top<=scroll&&$this.position().top+$this.height()>scroll){$body.removeClass(function(index,css){return(css.match(/(^|\s)color-\S+/g)||[]).join(' ')});$body.addClass('color-'+$(this).data('color'))}});var headerHeight=$('nav').outerHeight();if(!$('header').hasClass('no-sticky')){if($(document).scrollTop()>=headerHeight){$('header').addClass('sticky')}else if($(document).scrollTop()<=headerHeight){$('header').removeClass('sticky');setTimeout(function(){setPageTitleSpace()},500)}SetMegamenuPosition()}var st=$(this).scrollTop();if(st>lastScroll){$('.sticky').removeClass('header-appear')}else $('.sticky').addClass('header-appear');lastScroll=st;if(lastScroll<=headerHeight)$('header').removeClass('header-appear')}function parallax_text(){var window_width=$(window).width();if(window_width>1024){if($('.swiper-auto-slide .swiper-slide').length!==0){$(document).on("mousemove",".swiper-auto-slide .swiper-slide",function(e){var positionX=e.clientX;var positionY=e.clientY;positionX=Math.round(positionX/10)-80;positionY=Math.round(positionY/10)-40;$(this).find('.parallax-text').css({'transform':'translate('+positionX+'px,'+positionY+'px)','transition-duration':'0s'})});$(document).on("mouseout",".swiper-auto-slide .swiper-slide",function(e){$('.parallax-text').css({'transform':'translate(0,0)','transition-duration':'0.5s'})})}}}function ScrollStop(){return!1}function ScrollStart(){return!0}function validationSearchForm(){var error=!0;$('#search-header input[type=text]').each(function(index){if(index===0){if($(this).val()===null||$(this).val()===""){$("#search-header").find("input:eq("+index+")").css({"border":"none","border-bottom":"2px solid red"});error=!1}else{$("#search-header").find("input:eq("+index+")").css({"border":"none","border-bottom":"2px solid #000"})}}});return error}function stellarParallax(){if($(window).width()>1024){$.stellar()}else{$.stellar('destroy');$('.parallax').css('background-position','')}}function fullScreenHeight(){var element=$(".full-screen");var $minheight=$(window).height();element.parents('section').imagesLoaded(function(){if($(".top-space .full-screen").length>0){var $headerheight=$("header nav.navbar").outerHeight();$(".top-space .full-screen").css('min-height',$minheight-$headerheight)}else{element.css('min-height',$minheight)}});var minwidth=$(window).width();$(".full-screen-width").css('min-width',minwidth);var sidebarNavHeight=$('.sidebar-nav-style-1').height()-$('.logo-holder').parent().height()-$('.footer-holder').parent().height()-10;$(".sidebar-nav-style-1 .nav").css('height',(sidebarNavHeight));var style2NavHeight=parseInt($('.sidebar-part2').height()-parseInt($('.sidebar-part2 .sidebar-middle').css('padding-top'))-parseInt($('.sidebar-part2 .sidebar-middle').css('padding-bottom'))-parseInt($(".sidebar-part2 .sidebar-middle .sidebar-middle-menu .nav").css('margin-bottom')));$(".sidebar-part2 .sidebar-middle .sidebar-middle-menu .nav").css('height',(style2NavHeight))}function SetResizeContent(){SetMegamenuPosition();setPageTitleSpace();setButtonPosition();parallax_text();stellarParallax();fullScreenHeight()}$(window).resize(function(event){setTimeout(function(){SetResizeContent()},500);$('.menu-back-div').each(function(){$(this).attr('style','')});$('.navbar-collapse').collapse('hide');event.preventDefault()});$(document).ready(function(){"use strict";var pgurl=window.location.href.substr(window.location.href.lastIndexOf("/")+1);var $hash=window.location.hash.substring(1);if($hash){$hash="#"+$hash;pgurl=pgurl.replace($hash,"")}else{pgurl=pgurl.replace("#","")}$(".nav li a").each(function(){if($(this).attr("href")==pgurl||$(this).attr("href")==pgurl+'.html'){$(this).parent().addClass("active");$(this).parents('li.dropdown').addClass("active")}});$(window).scroll(function(){if($(this).scrollTop()>150)$('.scroll-top-arrow').fadeIn('slow');else $('.scroll-top-arrow').fadeOut('slow')});$(document).on('click','.scroll-top-arrow',function(){$('html, body').animate({scrollTop:0},800);return!1});var swiperFull=new Swiper('.swiper-full-screen',{loop:!0,slidesPerView:1,preventClicks:!1,allowTouchMove:!0,pagination:{el:'.swiper-full-screen-pagination',clickable:!0},autoplay:{delay:5000},keyboard:{enabled:!0},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},on:{resize:function(){swiperFull.update()}}});var swiperAutoFade=new Swiper('.swiper-auto-fade',{allowTouchMove:!0,loop:!0,slidesPerView:1,preventClicks:!1,effect:'fade',autoplay:{delay:5000},keyboard:{enabled:!0},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},pagination:{el:'.swiper-auto-pagination',clickable:!0},on:{resize:function(){swiperAutoFade.update()}}});var swiperSecond=new Swiper('.swiper-slider-second',{allowTouchMove:!0,slidesPerView:1,preventClicks:!1,keyboard:{enabled:!0},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},pagination:{el:'.swiper-pagination-second',clickable:!0},on:{resize:function(){swiperSecond.update()}}});var swiperThird=new Swiper('.swiper-slider-third',{allowTouchMove:!0,slidesPerView:3,preventClicks:!1,keyboard:{enabled:!0},breakpoints:{'640':{slidesPerView:1,}},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},pagination:{el:'.swiper-pagination-third',clickable:!0},on:{resize:function(){swiperThird.update()}}});var swiperNumber=new Swiper('.swiper-number-pagination',{allowTouchMove:!0,preventClicks:!1,autoplay:{delay:4000,disableOnInteraction:!0},pagination:{el:'.swiper-number',clickable:!0,renderBullet:function(index,className){return'<span class="'+className+'">'+pad((index+1))+'</span>'}},on:{resize:function(){swiperNumber.update()}}});var swiperVerticalPagination=new Swiper('.swiper-vertical-pagination',{allowTouchMove:!0,direction:'vertical',slidesPerView:1,spaceBetween:0,preventClicks:!1,mousewheel:{mousewheel:!0,sensitivity:1,releaseOnEdges:!0},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},pagination:{el:'.swiper-pagination-vertical',clickable:!0},on:{resize:function(){swiperVerticalPagination.update()}}});var swiperClients=new Swiper('.swiper-slider-clients',{allowTouchMove:!0,slidesPerView:4,paginationClickable:!0,preventClicks:!0,autoplay:{delay:3000,disableOnInteraction:!0},pagination:{el:null},breakpoints:{1199:{slidesPerView:3},991:{slidesPerView:2},767:{slidesPerView:1}},on:{resize:function(){swiperClients.update()}}});var swiperClients2=new Swiper('.swiper-slider-clients-second',{allowTouchMove:!0,slidesPerView:4,paginationClickable:!0,preventClicks:!0,autoplay:{delay:3000,disableOnInteraction:!0},pagination:{el:null},breakpoints:{1199:{slidesPerView:3},991:{slidesPerView:2},767:{slidesPerView:1}},on:{resize:function(){swiperClients2.update()}}});var swiperThreeSlides=new Swiper('.swiper-three-slides',{allowTouchMove:!0,slidesPerView:3,preventClicks:!1,pagination:{el:'.swiper-pagination-three-slides',clickable:!0},autoplay:{delay:3000},keyboard:{enabled:!0},navigation:{nextEl:'.swiper-three-slide-next',prevEl:'.swiper-three-slide-prev'},breakpoints:{991:{slidesPerView:2},767:{slidesPerView:1}},on:{resize:function(){swiperThreeSlides.update()}}});var swiperFourSlides=new Swiper('.swiper-four-slides',{allowTouchMove:!0,slidesPerView:4,preventClicks:!1,pagination:{el:'.swiper-pagination-four-slides',clickable:!0},autoplay:{delay:3000},keyboard:{enabled:!0},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},breakpoints:{1199:{slidesPerView:3},991:{slidesPerView:2},767:{slidesPerView:1}},on:{resize:function(){swiperFourSlides.update()}}});var swiperDemoHeaderStyle=new Swiper('.swiper-demo-header-style',{allowTouchMove:!0,loop:!0,slidesPerView:4,preventClicks:!0,slidesPerGroup:4,pagination:{el:'.swiper-pagination-demo-header-style',clickable:!0},autoplay:{delay:3000},keyboard:{enabled:!0},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},breakpoints:{1199:{slidesPerGroup:2,slidesPerView:2},767:{slidesPerGroup:1,slidesPerView:1}},on:{resize:function(){swiperDemoHeaderStyle.update()}}});var $swiperAutoSlideIndex=0;var swiperAutoSlide=new Swiper('.swiper-auto-slide',{allowTouchMove:!0,slidesPerView:'auto',centeredSlides:!0,spaceBetween:80,preventClicks:!1,observer:!0,speed:1000,pagination:{el:null},scrollbar:{el:'.swiper-scrollbar',draggable:!0,hide:!1,snapOnRelease:!0},autoplay:{delay:3000},mousewheel:{invert:!1},keyboard:{enabled:!0},navigation:{nextEl:'.swiper-next-style2',prevEl:'.swiper-prev-style2'},breakpoints:{1199:{spaceBetween:60},960:{spaceBetween:30},767:{spaceBetween:15}},on:{resize:function(){swiperAutoSlide.update()}}});if($(window).width()>767){var swiperBottomScrollbarFull=new Swiper('.swiper-bottom-scrollbar-full',{allowTouchMove:!0,slidesPerView:'auto',grabCursor:!0,preventClicks:!1,spaceBetween:30,keyboardControl:!0,speed:1000,pagination:{el:null},scrollbar:{el:'.swiper-scrollbar',draggable:!0,hide:!1,snapOnRelease:!0},mousewheel:{enable:!0},keyboard:{enabled:!0},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}})}var swiperAutoHieght=new Swiper('.swiper-auto-height-container',{allowTouchMove:!0,effect:'fade',loop:!0,autoHeight:!0,pagination:{el:'.swiper-auto-height-pagination',clickable:!0},autoplay:{delay:3000},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},on:{resize:function(){swiperAutoHieght.update()}}});var swiperMultyRow=new Swiper('.swiper-multy-row-container',{allowTouchMove:!0,slidesPerView:4,spaceBetween:15,pagination:{el:'.swiper-multy-row-pagination',clickable:!0},autoplay:{delay:3000,disableOnInteraction:!0},navigation:{nextEl:'.swiper-portfolio-next',prevEl:'.swiper-portfolio-prev'},breakpoints:{991:{slidesPerView:2},767:{slidesPerView:1}},on:{resize:function(){swiperMultyRow.update()}}});var resizeId;$(window).resize(function(){if($(".swiper-auto-slide").length>0&&swiperAutoSlide){$swiperAutoSlideIndex=swiperAutoSlide.activeIndex;swiperAutoSlide.detachEvents();swiperAutoSlide.destroy(!0,!1);swiperAutoSlide=undefined;$(".swiper-auto-slide .swiper-wrapper").css("transform","").css("transition-duration","");$(".swiper-auto-slide .swiper-slide").css("margin-right","");setTimeout(function(){swiperAutoSlide=new Swiper('.swiper-auto-slide',{allowTouchMove:!0,slidesPerView:'auto',centeredSlides:!0,spaceBetween:80,preventClicks:!1,mousewheelControl:!0,observer:!0,speed:1000,pagination:{el:null},scrollbar:{el:'.swiper-scrollbar',draggable:!0,hide:!1,snapOnRelease:!0},autoplay:{delay:3000},keyboard:{enabled:!0},navigation:{nextEl:'.swiper-next-style2',prevEl:'.swiper-prev-style2'},breakpoints:{1199:{spaceBetween:60},960:{spaceBetween:30},767:{spaceBetween:15}},on:{resize:function(){swiperAutoSlide.update()}}});swiperAutoSlide.slideTo($swiperAutoSlideIndex,1000,!1)},1000)}if($(".swiper-bottom-scrollbar-full").length>0){clearTimeout(resizeId);resizeId=setTimeout(doneResizing,1000)}setTimeout(function(){if($('.swiper-full-screen').length>0&&swiperFull){swiperFull.update()}if($('.swiper-auto-fade').length>0&&swiperAutoFade){swiperAutoFade.update()}if($('.swiper-slider-second').length>0&&swiperSecond){swiperSecond.update()}if($('.swiper-slider-third').length>0&&swiperThird){swiperThird.update()}if($('.swiper-number-pagination').length>0&&swiperNumber){swiperNumber.update()}if($('.swiper-vertical-pagination').length>0&&swiperVerticalPagination){swiperVerticalPagination.update()}if($('.swiper-slider-clients').length>0&&swiperClients){swiperClients.update()}if($('.swiper-slider-clients-second').length>0&&swiperClients2){swiperClients2.update()}if($('.swiper-three-slides').length>0&&swiperThreeSlides){swiperThreeSlides.update()}if($('.swiper-four-slides').length>0&&swiperFourSlides){swiperFourSlides.update()}if($('.swiper-demo-header-style').length>0&&swiperDemoHeaderStyle){swiperDemoHeaderStyle.update()}if($('.swiper-auto-slide').length>0&&swiperAutoSlide){swiperAutoSlide.update()}if($('.swiper-auto-height-container').length>0&&swiperAutoHieght){swiperAutoHieght.update()}if($('.swiper-multy-row-container').length>0&&swiperMultyRow){swiperMultyRow.update()}if($('.swiper-blog').length>0&&swiperBlog){swiperBlog.update()}if($('.swiper-presentation').length>0&&swiperPresentation){swiperPresentation.update()}},500);if(isIE()){setTimeout(function(){if($('.swiper-full-screen').length>0&&swiperFull){swiperFull.update()}if($('.swiper-auto-fade').length>0&&swiperAutoFade){swiperAutoFade.update()}if($('.swiper-slider-second').length>0&&swiperSecond){swiperSecond.update()}if($('.swiper-slider-third').length>0&&swiperThird){swiperThird.update()}if($('.swiper-number-pagination').length>0&&swiperNumber){swiperNumber.update()}if($('.swiper-vertical-pagination').length>0&&swiperVerticalPagination){swiperVerticalPagination.update()}if($('.swiper-slider-clients').length>0&&swiperClients){swiperClients.update()}if($('.swiper-slider-clients-second').length>0&&swiperClients2){swiperClients2.update()}if($('.swiper-three-slides').length>0&&swiperThreeSlides){swiperThreeSlides.update()}if($('.swiper-four-slides').length>0&&swiperFourSlides){swiperFourSlides.update()}if($('.swiper-demo-header-style').length>0&&swiperDemoHeaderStyle){swiperDemoHeaderStyle.update()}if($('.swiper-auto-slide').length>0&&swiperAutoSlide){swiperAutoSlide.update()}if($('.swiper-auto-height-container').length>0&&swiperAutoHieght){swiperAutoHieght.update()}if($('.swiper-multy-row-container').length>0&&swiperMultyRow){swiperMultyRow.update()}if($('.swiper-blog').length>0&&swiperBlog){swiperBlog.update()}if($('.swiper-presentation').length>0&&swiperPresentation){swiperPresentation.update()}},500)}});function doneResizing(){if(swiperBottomScrollbarFull){swiperBottomScrollbarFull.detachEvents();swiperBottomScrollbarFull.destroy(!0,!0);swiperBottomScrollbarFull=undefined}$(".swiper-bottom-scrollbar-full .swiper-wrapper").css("transform","").css("transition-duration","");$(".swiper-bottom-scrollbar-full .swiper-slide").css("margin-right","");$('.swiper-bottom-scrollbar-full .swiper-wrapper').removeAttr('style');$('.swiper-bottom-scrollbar-full .swiper-slide').removeAttr('style');if($(window).width()>767){setTimeout(function(){swiperBottomScrollbarFull=new Swiper('.swiper-bottom-scrollbar-full',{allowTouchMove:!0,slidesPerView:'auto',grabCursor:!0,preventClicks:!1,spaceBetween:30,keyboardControl:!0,speed:1000,pagination:{el:null},scrollbar:{el:'.swiper-scrollbar',draggable:!0,hide:!1,snapOnRelease:!0},mousewheel:{enable:!0},keyboard:{enabled:!0},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}})},500)}}var scrollAnimationTime=1200,scrollAnimation='easeInOutExpo';$(document).on('click.smoothscroll','a.scrollto',function(event){event.preventDefault();var target=this.hash;if($(target).length!=0){$('html, body').stop().animate({'scrollTop':$(target).offset().top},scrollAnimationTime,scrollAnimation,function(){window.location.hash=target})}});if($('.full-width-pull-menu').length>0){$(document).on('click','.full-width-pull-menu .inner-link',function(e){$(".full-width-pull-menu .close-button-menu").trigger("click");var _this=$(this);setTimeout(function(){var target=_this.attr("href");if($(target).length>0){$('html, body').stop().animate({'scrollTop':$(target).offset().top})}},500)})}if($('.navbar-top').length>0||$('.navbar-scroll-top').length>0||$('.navbar-top-scroll').length>0){$('.inner-link').smoothScroll({speed:900,offset:0})}else{$('.inner-link').smoothScroll({speed:900,offset:-59})}$('.section-link').smoothScroll({speed:900,offset:1});if($('.chart1').length>0){$('.chart1').appear();$('.chart1').easyPieChart({barColor:'#929292',trackColor:'#d9d9d9',scaleColor:!1,easing:'easeOutBounce',scaleLength:1,lineCap:'round',lineWidth:3,size:150,animate:{duration:2000,enabled:!0},onStep:function(from,to,percent){$(this.el).find('.percent').text(Math.round(percent))}});$(document.body).on('appear','.chart1',function(e){if(!$(this).hasClass('appear')){$(this).addClass('appear');$(this).data('easyPieChart').update(0).update($(this).data('percent'))}})}if($('.chart2').length>0){$('.chart2').appear();$('.chart2').easyPieChart({easing:'easeOutCirc',barColor:'#ff214f',trackColor:'#c7c7c7',scaleColor:!1,scaleLength:1,lineCap:'round',lineWidth:2,size:120,animate:{duration:2000,enabled:!0},onStep:function(from,to,percent){$(this.el).find('.percent').text(Math.round(percent))}});$(document.body).on('appear','.chart2',function(e){if(!$(this).hasClass('appear')){$(this).addClass('appear');$(this).data('easyPieChart').update(0).update($(this).data('percent'))}})}if($('.chart3').length>0){$('.chart3').appear();$('.chart3').easyPieChart({easing:'easeOutCirc',barColor:'#ff214f',trackColor:'',scaleColor:!1,scaleLength:1,lineCap:'round',lineWidth:3,size:140,animate:{duration:2000,enabled:!0},onStep:function(from,to,percent){$(this.el).find('.percent').text(Math.round(percent))}});$(document.body).on('appear','.chart3',function(e){if(!$(this).hasClass('appear')){$(this).addClass('appear');$(this).data('easyPieChart').update(0).update($(this).data('percent'))}})}var $portfolio_filter=$('.portfolio-grid');$portfolio_filter.imagesLoaded(function(){$portfolio_filter.isotope({layoutMode:'masonry',itemSelector:'.grid-item',percentPosition:!0,masonry:{columnWidth:'.grid-sizer'}});$portfolio_filter.isotope()});var $active_grid_selector=$('.portfolio-filter > li.active > a');var selector=$active_grid_selector.attr('data-filter');$portfolio_filter.find('.grid-item').removeClass('animated').css("visibility","");$portfolio_filter.isotope({filter:selector});var $grid_selectors=$('.portfolio-filter > li > a');$grid_selectors.on('click',function(){$grid_selectors.parent().removeClass('active');$(this).parent().addClass('active');var selector=$(this).attr('data-filter');$portfolio_filter.find('.grid-item').removeClass('animated').css("visibility","");$portfolio_filter.find('.grid-item').each(function(){wow.removeBox(this);$(this).css("-webkit-animation","none");$(this).css("-moz-animation","none");$(this).css("-ms-animation","none");$(this).css("animation","none")});$portfolio_filter.isotope({filter:selector});return!1});$(window).resize(function(){if(!isMobile&&!isiPhoneiPad){$portfolio_filter.imagesLoaded(function(){setTimeout(function(){$portfolio_filter.find('.grid-item').removeClass('wow').removeClass('animated');$portfolio_filter.isotope('layout')},300)})}});var $blog_filter=$('.blog-grid');$blog_filter.imagesLoaded(function(){$blog_filter.isotope({layoutMode:'masonry',itemSelector:'.grid-item',percentPosition:!0,masonry:{columnWidth:'.grid-sizer'}})});$(window).resize(function(){setTimeout(function(){$blog_filter.find('.grid-item').removeClass('wow').removeClass('animated');$blog_filter.isotope('layout')},300)});$("ul.mega-menu-full").each(function(idx,elm){var megaMenuWidth=0;$(this).children('li').each(function(idx,elm){var LIheight=0;megaMenuWidth+=$(this).outerWidth()});$(this).width(megaMenuWidth+95);megaMenuWidth=0});var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:!1,live:!0});$(window).imagesLoaded(function(){wow.init()});$(document).on('click','.right-menu-button',function(e){$('body').toggleClass('left-nav-on')});$(document).on('click','.btn-hamburger',function(){$('.hamburger-menu').toggleClass('show-menu');$('body').removeClass('show-menu')});$(document).on('click','#mobileToggleSidenav',function(){$(this).closest('nav').toggleClass('sidemenu-open')});$(document).imagesLoaded(function(){if($(".justified-gallery").length>0){$(".justified-gallery").justifiedGallery({rowHeight:400,maxRowHeight:!1,captions:!0,margins:10,waitThumbnailsLoad:!0})}});$('.atr-nav').on("click",function(){$(".atr-div").append("<a class='close-cross' href='#'>X</a>");$(".atr-div").animate({width:"toggle"})});$('.close-cross').on("click",function(){$(".atr-div").hide()});var menuRight=document.getElementById('cbp-spmenu-s2'),showRightPush=document.getElementById('showRightPush'),body=document.body;if(showRightPush){showRightPush.onclick=function(){classie.toggle(this,'active');if(menuRight)classie.toggle(menuRight,'cbp-spmenu-open')}}var test=document.getElementById('close-pushmenu');if(test){test.onclick=function(){classie.toggle(this,'active');if(menuRight)classie.toggle(menuRight,'cbp-spmenu-open')}}$(".blog-header-style1 li").hover(function(){$('.blog-header-style1 li.blog-column-active').removeClass('blog-column-active');$(this).addClass('blog-column-active')},function(){$(this).removeClass('blog-column-active');$('.blog-header-style1 li:first-child').addClass('blog-column-active')});$('.big-menu-open').on("click",function(){$('.big-menu-right').addClass("open")});$('.big-menu-close').on("click",function(){$('.big-menu-right').removeClass("open")});$(document).on("click",'.navbar .navbar-collapse a.dropdown-toggle, .accordion-style1 .panel-heading a, .accordion-style2 .panel-heading a, .accordion-style3 .panel-heading a, .toggles .panel-heading a, .toggles-style2 .panel-heading a, .toggles-style3 .panel-heading a, a.carousel-control, .nav-tabs a[data-toggle="tab"], a.shopping-cart',function(e){e.preventDefault()});$(document).on('touchstart click','body',function(e){if($(window).width()<992){if(!$('.navbar-collapse').has(e.target).is('.navbar-collapse')&&$('.navbar-collapse').hasClass('show')&&!$(e.target).hasClass('navbar-toggle')){$('.navbar-collapse').collapse('hide')}}else{if(!$('.navbar-collapse').has(e.target).is('.navbar-collapse')&&$('.navbar-collapse').hasClass('show')){$('.navbar-collapse').find('a.dropdown-toggle').addClass('collapsed');$('.navbar-collapse').find('ul.dropdown-menu').removeClass('show');$('.navbar-collapse a.dropdown-toggle').removeClass('active')}}});$('.navbar-collapse a.dropdown-toggle').on('touchstart',function(e){$('.navbar-collapse a.dropdown-toggle').not(this).removeClass('active');if($(this).hasClass('active'))$(this).removeClass('active');else $(this).addClass('active')});$('button.navbar-toggle').on("click",function(e){if(isMobile){$(".cart-content").css('opacity','0');$(".cart-content").css('visibility','hidden')}});$('a.dropdown-toggle').on("click",function(e){if(isMobile){$(".cart-content").css('opacity','0');$(".cart-content").css('visibility','hidden')}});$(document).on('touchstart click','.navbar-collapse [data-toggle="dropdown"]',function(event){var $innerLinkLI=$(this).parents('ul.navbar-nav').find('li.dropdown a.inner-link').parent('li.dropdown');if(!$(this).hasClass('inner-link')&&!$(this).hasClass('dropdown-toggle')&&$innerLinkLI.hasClass('show')){$innerLinkLI.removeClass('show')}var target=$(this).attr('target');if($(window).width()<=991&&$(this).attr('href')&&$(this).attr('href').indexOf("#")<=-1&&!$(event.target).is('i')){if(event.ctrlKey||event.metaKey){window.open($(this).attr('href'),"_blank");return!1}else if(!target)window.location=$(this).attr('href');else window.open($(this).attr('href'),target)}else if($(window).width()>991&&$(this).attr('href').indexOf("#")<=-1){if(event.ctrlKey||event.metaKey){window.open($(this).attr('href'),"_blank");return!1}else if(!target)window.location=$(this).attr('href');else window.open($(this).attr('href'),target)}else if($(window).width()<=991&&$(this).attr('href')&&$(this).attr('href').length>1&&$(this).attr('href').indexOf("#")>=0&&$(this).hasClass('inner-link')){$(this).parents('ul.navbar-nav').find('li.dropdown').not($(this).parent('.dropdown')).removeClass('show');if($(this).parent('.dropdown').hasClass('show')){$(this).parent('.dropdown').removeClass('show')}else{$(this).parent('.dropdown').addClass('show')}$(this).toggleClass('active')}});$('nav.full-width-pull-menu ul.panel-group li.dropdown a.dropdown-toggle').on("click",function(e){if($(this).parent('li').find('ul.dropdown-menu').length>0){if($(this).parent('li').hasClass('show')){$(this).parent('li').removeClass('show')}else{$(this).parent('li').addClass('show')}}});$('.accordion-style1 .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="ti-minus"></i>')});$('.accordion-style1 .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="ti-plus"></i>')});$(document).on('click','.nav.navbar-nav a.inner-link',function(e){$(this).parents('ul.navbar-nav').find('a.inner-link').removeClass('active');var $this=$(this);$(this).parents('.navbar-collapse').collapse('hide');setTimeout(function(){$this.addClass('active')},1000)});$('.accordion-style2 .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title').find('i').addClass('fa-angle-up').removeClass('fa-angle-down')});$('.accordion-style2 .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title').find('i').removeClass('fa-angle-up').addClass('fa-angle-down')});$('.accordion-style3 .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title').find('i').addClass('fa-angle-up').removeClass('fa-angle-down')});$('.accordion-style3 .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title').find('i').removeClass('fa-angle-up').addClass('fa-angle-down')});$('.toggles .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="ti-minus"></i>')});$('.toggles .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="ti-plus"></i>')});$('.toggles-style2 .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-angle-up"></i>')});$('.toggles-style2 .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fas fa-angle-down"></i>')})});$(document).on('load',function(){var hash=window.location.hash.substr(1);if(hash!=""){setTimeout(function(){$(document).imagesLoaded(function(){var scrollAnimationTime=1200,scrollAnimation='easeInOutExpo';var target='#'+hash;if($(target).length>0){$('html, body').stop().animate({'scrollTop':$(target).offset().top},scrollAnimationTime,scrollAnimation,function(){window.location.hash=target})}})},500)}fullScreenHeight()})