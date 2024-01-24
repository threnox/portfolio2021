"use strict";

jQuery(function ($) {
  "use strict"; //コンテンツフェードイン

  $(window).scroll(function () {
    $('.js-fade-in').each(function () {
      var position = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();

      if (scroll > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  }); //モーダル 

  $('.js-modal-open').click(function () {
    var modalIndex = $('.js-modal-open').index(this); //indexは0から始まる連番

    modalIndex = modalIndex - 1; //よくわからんけど-1

    if (modalIndex % 2 == 0) {
      modalIndex = modalIndex * 0.5;
    } else {
      modalIndex = (modalIndex + 1) * 0.5;
    }

    ;
    $('.js-modal').eq(modalIndex).fadeIn();
    return false; // aタグのリンク要素を無効に
  });
  $('.js-modal-close, .modal__content').click(function () {
    $('.js-modal').fadeOut();
    return false;
  }); //スムーススクロール

  $('a[href^="#"]').click(function () {
    var speed = 400,
        href = $(this).attr('href'),
        target = $(href == '#' || href == '' ? 'html' : href),
        position = target.offset().top;
    $('body, html').animate({
      scrollTop: position - 120
    }, speed, 'swing');
    return false;
  }); // ハンバーガーメニュー

  $('.btn').on('click', function () {
    $('.btn__menu').toggleClass('active');

    if ($('.btn__menu').hasClass('active')) {
      $('.side-menu').slideDown(320);
    } else {
      $('.side-menu').slideUp(320);
    }

    ;
  }); // 領域外クリックでメニューを閉じる

  $(document).on('click', function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (!$(event.target).closest('.btn').length) {
        $('.side-menu').slideUp(320);
        $('.btn__menu').removeClass('active');
      }

      ;
    }

    ;
  }); // リサイズに対応

  $(window).on('resize', function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
      $('.side-menu').css('display', 'block');
    } else {
      $('.side-menu').css('display', 'none');
    }

    ;
  });
});