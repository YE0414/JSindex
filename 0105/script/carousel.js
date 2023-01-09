
//1. 변수 선언
const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide li');
const left_btn = document.getElementById('l_btn');
const right_btn = document.getElementById('r_btn');

const img_n = slide_img.length;//목록 li 개수 5
console.log(img_n);

const img_w = 300; //li태그의 너비
const m = 30;   //간격
const s_con = 3;  //한페이지에 보여질 개수

let count = 0;

//감싸는 부모요소의 너비를 구하기
slide.style.width=(img_w+m)*img_n-m+'px';
//(300+30)*5-30 = 1620

//왼쪽으로 움직이는 슬라이드 함수
function mslide(n){
  slide.style.left = (img_w+m)*-n+'px';//n이 어디서 나온 숫자?
  count = n;
  console.log(slide.style.left)
  console.log(count);
}
//왼쪽 버튼 클릭시 왼쪽방향으로 움직이게 한다.
left_btn.addEventListener('click',function(){
  if(count > 0){
    mslide(count-1);
  }else{
    mslide(img_n-s_con);
  }
  clearInterval(Timer);
});

//오른쪽 버튼을 클릭시 오른쪽 방향으로 움직이게 한다.
right_btn.addEventListener('click',function(){
if(count < img_n-s_con){
  mslide(count+1);
}else{
  mslide(0);
}
clearInterval(Timer);
});

// 매 3초마다 자동으로 함수를 호출하여 움직이게 한다.
//시간 객체 - setinterval(함수명, 시간)

let Timer = setInterval(function(){
  if(count < img_n-s_con){
    mslide(count+1);
  }else{
    mslide(0);
  }
},1000);

//마우스를 양쪽 버튼에서 빼면 다시 시간을 생성하여 자동으로 움직이게 한다.
left_btn.addEventListener('mouseout',function(){
  Timer = setInterval(function(){
    if(count < img_n-s_con){
      mslide(count+1);
    }else{
      mslide(0);
    }
  },1000);
});
right_btn.addEventListener('mouseout',function(){
  Timer = setInterval(function(){
    if(count < img_n-s_con){
      mslide(count+1);
    }else{
      mslide(0);
    }
  },1000);
});