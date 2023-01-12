// 要素の属性を設定・取得・確認する。
// 設定 => setAttribute("属性名", "値")
// 取得 => getAttribute("属性名") 状態を持っている値で返す。
// 確認 => hasAttribute("属性名") 状態を真偽値で返す。

anchors = document.querySelectorAll("a")

anchors.forEach(element => {
  // 要素に属性を設定する。
  element.setAttribute("target", "_brank")

  // 属性があるものを取得する。
  // 属性 => id, class, href, target, type, name, value...
  // 細やかな指定で要素を操ることができるわけなのかと。
  console.log(element.getAttribute("target"))

  // 属性を持っているどうか『真偽値』を返す。
  console.log(element.hasAttribute("class"))

  // もっと知りたい場合、つまり、
  // クラス属性に特定の値を持っているものに何か効果をつけたい場合。
  if (element.getAttribute("class") === "has-class-one") {
    element.textContent = "hello"
    element.classList.add("bg-color-red")
  }
})