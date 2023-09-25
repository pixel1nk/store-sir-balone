$(document).ready(() => {

    const backToTop = $('#backToTop');
    const amountScrolled = 300;
  
    $(window).scroll(() => {
      $(window).scrollTop() >= amountScrolled ?
      backToTop.fadeIn('fast') :
      backToTop.fadeOut('fast');
    });
  
    backToTop.click(() => {
      $('body, html').animate({
        scrollTop: 0 },
      600);
      return false;
    });
  });