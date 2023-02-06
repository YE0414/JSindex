$(function(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  const slide = document.querySelector('.e_banner');
  const slide_img = document.querySelectorAll('.e_banner li')
  const l_btn = document.querySelector('.fa-angle-left');
  const r_btn = document.querySelector('.fa-angle-right');
  const img_n = slide_img.length;
  let count = 0;
  const img_w = 1200; //li태그의 너비
  const s_con = 1;
  // console.log(img_n);=4
  slide.style.width=(img_w)*img_n+'px';//4800px

  function mslide(n){
    slide.style.left = (img_w)*-n+'px';
    count = n;
    // console.log(slide.style.left)
    // console.log(count);
  }
  l_btn.addEventListener('click',function(){
    if(count > 0){
      mslide(count-1);
    }else{
      mslide(img_n-s_con);
    }
    clearInterval(Timer);
  });
  r_btn.addEventListener('click',function(){
    if(count < img_n-s_con){
      mslide(count+1);
    }else{
      mslide(0);
    }
    clearInterval(Timer);
    });
    let Timer = setInterval(function(){
      if(count < img_n-s_con){
        mslide(count+1);
      }else{
        mslide(0);
      }
    },3000);

    l_btn.addEventListener('mouseout',function(){
      Timer = setInterval(function(){
        if(count < img_n-s_con){
          mslide(count+1);
        }else{
          mslide(0);
        }
      },3000);
    });

    r_btn.addEventListener('mouseout',function(){
      Timer = setInterval(function(){
        if(count < img_n-s_con){
          mslide(count+1);
        }else{
          mslide(0);
        }
      },3000);
    });
    //모달 띄우기
    let modal = `
      <div class="modal">
        <div class="m_inner">
          <img src="./images/20230203_m0dal.jpg" alt="모달배너">
          <p><input type="checkbox" id="ch" checked><label for="ch">일주일간 열지 않음</label><a href="#" title="닫기">닫기</a></p>
        </div>
      </div>
    `;

    $('body').append(modal);
//쿠키 생성하기
    let ch= $('.modal #ch');//체크박스 변수선언
    //쿠키 파일이 현재 브라우저에 존재하면 모달창이 안나오도록 한다.
    if($.cookie('popup')=='none'){
      $('.modal').hide();
    };
    //쿠ㅡ키의 존재 여부를 체크하여 쿠키를 생성하거나 모달을 숨긴다.
    function closeModal(){
      if(ch.is(':checked')){
        $.cookie('popup', 'none', {expires:7, path:'/'});
      }
      //체크박스에 체크 안한 경우는 그냥 모달을 숨긴다.
      $('.modal').hide();
      }
    
    //닫기버튼을 클릭하면 closeModal 함수를 동작하게 한다.
    $('.modal a').click(function(){
      closeModal();
    });
});