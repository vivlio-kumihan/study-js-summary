// 『window』オブジェクトに『scroll』をきっかけとして『.addEventListener』でインスタンスを生成させる。
window.addEventListener("scroll", () => {
  // このインスタンス内で『.scrollTop』メソッドを送って画面上辺からの距離を取得する。
  let scroll = document.documentElement.scrollTop

  // 任意の要素へ値を設定して、
  document.getElementById("scroll-position").textContent = scroll

  // 任意の要素のあしらいを変更する。
  if (scroll > 300) {
    document.querySelector("ul").classList.add("bg-color-red")
  } else {
    document.querySelector("ul").classList.remove("bg-color-red")
  }
})