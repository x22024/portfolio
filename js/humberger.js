

// ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const globalMenuSp = document.querySelector('.globalMenuSp');
  
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
  
      if (this.classList.contains('active')) {
        globalMenuSp.classList.add('active');
      } else {
        globalMenuSp.classList.remove('active');
      }
    });
  
    globalMenuSp.addEventListener('click', function(event) {
      if (event.target.tagName === 'A') {
        globalMenuSp.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  });

  


// フェードイン
const headings = document.querySelectorAll('.container')
const observer = new IntersectionObserver(popupElements)

function popupElements(entries){ //entriesは配列
  entries.forEach(entry => {    //entryは配列の中の要素
        if (entry.isIntersecting) { //isIntersectingは交差しているかどうか
        entry.target.classList.add('active'); //交差していたらactiveクラスを追加
        }
    })
}
//監視の開始
headings.forEach(heading => {
    observer.observe(heading)
})






// アコーディオン
const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;

    if (content.style.display === 'none') {
      content.style.display = 'block';
      content.classList.add('active'); // .activeクラスを追加
    } else {
      content.style.display = 'none';
      content.classList.remove('active'); // .activeクラスを削除
    }
  });
});
