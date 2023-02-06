$(function(){
  
  //스크롤 기능을 사용하여 header, gnb에 서식을 적용하기
  $(window).scroll(function(){
    let spos = $(this).scrollTop();
    // console.log(spos);
    if(spos>=700){
      $('header').addClass('h_on');
      $('header #gnb a').addClass('on');
      $('header i.fas').addClass('on');
      $('header h1 img').attr('src','./images/logo-casper.e03ec84.png');
    }else{
      $('header').removeClass('h_on');
      $('header #gnb a').removeClass('on');
      $('header i.fas').removeClass('on');
      $('header h1 img').attr('src','./images/logo-casper-white.028f418.png');
    }
  });
//아래로 이동하기 버튼을 클릭시 top 콘텐츠가 상단 815높이로 올라오게 하기
  $('#next_btn').click(function(){
    $('html, body').animate({scrollTop:$('#top3').offset().top - 70},500,'easeOutQuint');
  });
  //header에 마우스 오버시 로고, 내비게이션, i.fas에 서식적용하고
  $('header').hover(function(){
    $(this).addClass('h_on');
    $('header #gnb a').addClass('on');
    $('header i.fas').addClass('on');
    $('header h1 img').attr('src','./images/logo-casper.e03ec84.png');
  },function(){//header에 마우스 아웃시 로고, 내비게이션, i.fas에 서식 제거하기
    $(this).removeClass('h_on');
    $('header #gnb a').removeClass('on');
    $('header i.fas').removeClass('on');
    $('header h1 img').attr('src','./images/logo-casper-white.028f418.png');
  });
  //내비게이션 클릭시 해당 콘텐츠가 상단으로 올라오게 하기
  let gnb = $('#gnb li');
  let m_nav = $('#m_nav ul li');

    gnb.click(function(){
    let n = $(this).index();
    let sPos = $('section').eq(n+2).offset().top;
    $('html, body').animate({scrollTop:sPos - 70},500);
    return false;
  });
    // console.log(n);
    // console.log(sPos);
    m_nav.click(function(){
      let n = $(this).index();
      let sPos = $('section').eq(n+2).offset().top;
      $('html, body').animate({scrollTop:sPos - 70},500);
      return false;

    });
});