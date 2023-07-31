$(document).ready(function() {
    $('.slider').slick({
      autoplay: false,      // 自動再生を無効にする
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-prev"></div>',
      nextArrow: '<div class="slick-next"></div>',
      centerMode: true,
      variableWidth: true,
      dots: false,          // ドットナビゲーションを非表示にする
      arrows: true         // 矢印ボタンを表示する
    });
  });







  
  // document.addEventListener("DOMContentLoaded", function () {
  //   const images = ["img/icon_web.jpg", "img/sample.jpg", "img/uzu_icon.jpg"];
  //   let currentIndex = 0;

  //   function fadeInOut() {
  //     const img = document.querySelector(".ph_area img");
  //     img.style.opacity = 0;

  //     // フェードイン
  //     const fadeInInterval = setInterval(function () {
  //       img.style.opacity = parseFloat(img.style.opacity) + 0.01;
  //       if (parseFloat(img.style.opacity) >= 1) {
  //         clearInterval(fadeInInterval);
  //         // 5秒待ってからフェードアウトへ
  //         setTimeout(fadeOut, 5000);
  //       }
  //     }, 50);
  //   }

  //   function fadeOut() {
  //     const img = document.querySelector(".ph_area img");

  //     // フェードアウト
  //     const fadeOutInterval = setInterval(function () {
  //       img.style.opacity = parseFloat(img.style.opacity) - 0.01;
  //       if (parseFloat(img.style.opacity) <= 0) {
  //         clearInterval(fadeOutInterval);
  //         // 5秒待ってから次の画像へ
  //         setTimeout(changeImage, 5000);
  //       }
  //     }, 50);
  //   }

  //   function changeImage() {
  //     const img = document.querySelector(".ph_area img");

  //     // 画像の切り替え
  //     currentIndex = (currentIndex + 1) % images.length;
  //     img.src = images[currentIndex];

  //     // フェードインへ
  //     fadeInOut();
  //   }

  //   // 初回の実行
  //   changeImage();
  // });








