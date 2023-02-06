$(function(){
  $('#m_nav>li').find('span').mouseenter(function(){
    console.log('OK')
    $(this).parent().animate({'width':'150px'},500).css({'background-color': 'rgba(0,0,0,.5)'},500).find('a').css({'opacity':'100'},500);
  });













});