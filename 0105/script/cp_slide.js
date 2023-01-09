//1. 변수선언
let n=1;
const img_list = document.querySelectorAll('.b_link > li');
const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide li');

const img_n = slide_img.length;
console.log(img_n);

const img_w = 100;
const s_con = 1;

img_list.forEach((el,index) => {
  el.onmouseover=()=>{
    console.log(index);
    n = index+1;//인덱스번호에 1을 더하여 1부터 숫자가 나오게 하기
    document.querySelector('lnb').src='./image/coupang ('+n+').jpg'
  }
});

let count = 0;
slide.style.width=img_w*img_n+'%';
//(1920+0)*6-0px=11520

function mslide(n){
  slide.style.left = img_w*-n+'%';
  count = n;
  console.log(slide.style.left)
}

let Timer = setInterval(function(){
  console.log
  if(count < img_n-s_con){
    mslide(count+1);
  }else{
    mslide(0);
  }
},3000);