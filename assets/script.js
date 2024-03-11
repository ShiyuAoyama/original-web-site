// <main>の画像をスライドショーで表示（切り替えの工夫必要）
/*const pics_src = ["./asetts/20231116釣果.jpg","./asetts/20230709桃タルト.jpg"];
let num = -1;


function slideshow_timer(){
  if (num === 1){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}

setInterval(slideshow_timer, 2000);
*/

window.onload = function() {
  let photoHeight = document.getElementById('mypic1').clientHeight;
  let button = document.getElementById('indicator');
  button.style.top = (photoHeight + 20) + 'px'; // ボタンを写真の下端から20px下に配置
};
console

// 切り替えボタンの操作
const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;
// lengthは要素の数を返すプロパティ
let count = 0;

// prev,nextボタンがクリックされた時にクラスを付け替えるための関数
// バッククォートとはshift+@
function nextClick(){
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count++;
  slide.classList.add(`slide${count % totalSlides + 1}`);
}

function prevClick() {
  slide.classList.remove(`slide${count% totalSlides + 1}`);
  count--;
  if(count<0)count = totalSlides - 1;
  slide.classList.add(`slide${count % totalSlides + 1}`)
}

/*クリックイベントのリスナーを登録*/ 
next.addEventListener(`click`,() =>{
  nextClick();
});

prev.addEventListener(`click`,()=>{
  prevClick();
});

import "./assets/style.css";
let index = 0;
displayImages();
function displayImages() {
 let i;
 const images = document.getElementsByClassName("image");
 for (i = 0; i < images.length; i++) {
   images[i].style.display = "none";
 }
 index++;
 if (index > images.length) {
   index = 1;
 }
 images[index-1].style.display = "block";
 setTimeout(displayImages, 2000); 
}