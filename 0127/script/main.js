$(function(){
//1. 변수선언
  let g_navi = $('.g_navi a');
  let g_list = $('.g_list a');
  let t_btn = $('.g_navi li:first-child a');
  let p_btn = $('.g_navi li:nth-child(2) a');
  let d_btn = $('.g_navi li:nth-child(3) a');
  let ui_btn = $('.g_navi li:nth-child(4) a');
  let co_btn = $('.g_navi li:last-child a');

//2. 메뉴 클릭 이벤트와 서식적용
  g_navi.click(function(){
    $('.g_navi a').removeClass('act');
    $(this).addClass('act');

    return false;//새로고침 방지
  });
//3. 이미지 목록에 마우스 오버시 캡션나오게
  g_list.hover(function(){
    $(this).find('span').stop().animate({'bottom':'0px'},300);
    $(this).parent().stop().animate({'border-radius':'40px'},200);
  },
  function(){
    $('.g_list span').stop().animate({'bottom':'-40px'},300);
    $(this).parent().stop().animate({'border-radius':'0px'},200);
  });
    
//4. 이미지 클릭시 해당 href값을 가져와서 모달윈도 띄우기
  g_list.click(function(){
    let src = $(this).attr('href');
    let title = $(this).find('span').text();//내용을 가져옴
    let i_num = $(this).parent().index()+1;
    console.log(i_num);
    //this=a태그
    console.log(src);

    let modal = `
    <div class="modal">
      <div class="c_box">
        <h3>${title}</h3>
        <img src=${src} alt=''>
        <i class='fas fa-times'></i>
        <i class='fas fa-angle-left'></i>
        <i class='fas fa-angle-right'></i>
      </div>
      <span>${i_num}/12<span>
    </div>
    `;
//바디태그의 맨 뒤에 내용을 추가하라
    $('body').append(modal);
    // $('.c_box').after(`<span class="page">${i_num}/12</span>`);
    //닫기 버튼 누르면 모달창 숨기기
    $('.modal i.fa-times').click(function(){
      $('.modal').fadeOut();
    });
    function img_check(){
      if(i_num==4||i_num==9||i_num==11){
      $('.modal img').attr('src','./images/img'+i_num+'.png')
      }else{
      $('.modal img').attr('src','./images/img'+i_num+'.jpg')
      }
    }
    //좌, 우 버튼 클릭시 각각 해당 이미지가 나오게
    $('.modal i.fa-angle-left').click(function(){
      if(i_num==1){
        i_num=12;
      }else{
        i_num--;
      }
      console.log(i_num);//1.12.11.10,9...
      //해당 인덱스값에 맞는 제목을 가져와서 출력하기
      $('.modal h3').text($('.g_list>li').eq(i_num).find('span').text());
//인덱스 번호가 4, 9, 11일때 확장자를 png로 교체해주는 함수
      img_check();
      $('.modal span').text(i_num+'/12');
  });
    
  $('.modal i.fa-angle-right').click(function(){
    if(i_num==12){
      i_num=1;
    }else{
      i_num++;
    }
    console.log(i_num);//1.12.11.10,9...
    $('.modal h3').text($('.g_list>li').eq(i_num).find('span').text());
    img_check();
    $('.modal span').text(i_num+'/12');
      });

  return false;
});

//5. 갤러리 메뉴를 클릭시 각각 해당 이미지 목록만 보이게 하기
t_btn.click(function(){
  $('.total').hide();//모두 숨기고
  $('.total').fadeIn();//모두 숨기고

});
p_btn.click(function(){
  $('.total').hide();//모두 숨기고
  $('.plan').fadeIn();//해당 목록만 보이게 한다.
});
d_btn.click(function(){
  $('.total').hide();//모두 숨기고
  $('.design').fadeIn();//해당 목록만 보이게 한다.
});
ui_btn.click(function(){
  $('.total').hide();//모두 숨기고
  $('.ui').fadeIn();//해당 목록만 보이게 한다.
});
co_btn.click(function(){
  $('.total').hide();//모두 숨기고
  $('.coding').fadeIn();//해당 목록만 보이게 한다.
});

});