// スクロール・イベントについて　その3
const targetElememt = document.querySelectorAll(".animationTarget");

// スクロールするする度に...
document.addEventListener("scroll", function () {
  // その時その時の画面上面から注目しているオブジェクト上辺までの距離を逐次計測する関数を得る。
  for (let i = 0; i < targetElememt.length; i++) {
    // getBoundingClientRect()とは、
    // その時その時の画面上面から注目しているオブジェクト上辺までの距離を逐次計測する関数。
    // プラス、オブジェクトが半分程度見える距離でフェードインするアニメーションが始まるように
    // 『top』メソッド（？）で得る距離にオブジェクトの半分の高さを加えて調整する。
    const getElementDistance = targetElememt[i].getBoundingClientRect().top + targetElememt[i].clientHeight * 0.6
    console.log(getElementDistance)
    // 開いている画面の高さ
    //   = 注目しているオブジェクトが画面をスクロールして画面下から出てくる距離
    if (window.innerHeight > getElementDistance) {
      targetElememt[i].classList.add("show")
    }
  }
})