jQuery(document).ready(function () {


   function toggleScrolled() {
      let body = jQuery('body');
      let header = jQuery('#header');
      if (!header.hasClass('scroll-up-sticky') && !header.hasClass('sticky-top') && !header.hasClass('fixed-top')) return;
      jQuery(window).scrollTop() > 100 ? body.addClass('scrolled') : body.removeClass('scrolled');
   }

   toggleScrolled();
   jQuery(window).on('scroll', toggleScrolled);


   jQuery('.mobile-nav-toggle').on('click', function () {
      jQuery('body').toggleClass('mobile-nav-active');
      jQuery(this).toggleClass('bi-list bi-x');
   });


   jQuery('#navmenu a').on('click', function () {
      if (jQuery('body').hasClass('mobile-nav-active')) {
         jQuery('.mobile-nav-toggle').click();
      }
   });


   jQuery('.navmenu .toggle-dropdown').on('click', function (e) {
      e.preventDefault();
      jQuery(this).parent().toggleClass('active');
      jQuery(this).parent().next().toggleClass('dropdown-active');
      e.stopImmediatePropagation();
   });


   function toggleScrollTop() {
      if (jQuery('.scroll-top').length) {
         jQuery(window).scrollTop() > 100 ? jQuery('.scroll-top').addClass('active') : jQuery('.scroll-top').removeClass('active');
      }
   }

   toggleScrollTop();
   jQuery(window).on('scroll', toggleScrollTop);

   jQuery('.scroll-top').on('click', function (e) {
      e.preventDefault();
      jQuery('html, body').animate({
         scrollTop: 0
      }, 600);
   });

   AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
   });


   function initSwiper() {
      jQuery('.init-swiper').each(function () {
         let config = JSON.parse(jQuery(this).find('.swiper-config').html().trim());
         if (jQuery(this).hasClass('swiper-tab')) {
            new Swiper(this, config);
         } else {
            new Swiper(this, config);
         }
      });
   }
   initSwiper();

   if (window.location.hash) {
      let section = jQuery(window.location.hash);
      if (section.length) {
         setTimeout(() => {
            let scrollMarginTop = parseInt(section.css('scroll-margin-top')) || 0;
            jQuery('html, body').animate({
               scrollTop: section.offset().top - scrollMarginTop
            }, 600);
         }, 100);
      }
   }


   function navmenuScrollspy() {
      let position = jQuery(window).scrollTop() + 200;

      jQuery('.navmenu a').each(function () {
         let sectionId = jQuery(this).attr('href');
         if (!sectionId || sectionId === "#" || !sectionId.startsWith('#')) return; // FIX

         let section = jQuery(sectionId);
         if (section.length) {
            if (position >= section.offset().top && position <= (section.offset().top + section.outerHeight())) {
               jQuery('.navmenu a').removeClass('active');
               jQuery(this).addClass('active');
            }
         }
      });
   }

   navmenuScrollspy();
   jQuery(window).on('scroll', navmenuScrollspy);

});

jQuery(document).ready(function () {


   jQuery('#menuToggleIcon').click(function () {
      jQuery('#navmenu').toggleClass('active');
      jQuery(this).toggleClass('bi-list bi-x');
   });


   jQuery('.navmenu a').click(function () {
      jQuery('.navmenu a').removeClass('active');
      jQuery(this).addClass('active');
      jQuery('#navmenu').removeClass('active');
      jQuery('#menuToggleIcon').removeClass('bi-x').addClass('bi-list');
   });

});