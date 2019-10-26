import $ from 'jquery'

$(document).ready(function(){
    $('.card__top').click(function(){
      $(this).next().slideToggle(500);
      if($(this).find('.card__arrow img:last-child').css
      ('display')== 'none') {
        $(this).find('.card__arrow img:last-child').css
        ('display','block');
        $(this).find('.card__arrow img:first-child').css
        ('display','none');
      }else {
        $(this).find('.card__arrow img:last-child').css
        ('display','none');
        $(this).find('.card__arrow img:first-child').css
        ('display','block');
      }
    })
  });
 