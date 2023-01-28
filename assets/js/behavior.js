// 基礎知識　JSで属性を設定・取得・確認

// 設定 => setAttribute("属性名", "値")
// 取得 => getAttribute("属性名") 状態を持っている値で返す。
// 確認 => hasAttribute("属性名") 状態を真偽値で返す。

// arr = document.querySelectorAll("ul li a")
// arr.forEach(element => {
//  //『target』属性があるものに『_brank』値を設定する。
//  element.setAttribute("target", "_brank")

//  // 『target』属性があるものを取得する。
//  console.log(element.getAttribute("target"))

//  // 『クラス』属性を持っているものを取得する。この時、クラスの『値』が返る。
//  console.log(element.getAttribute("class"))

//  // 『クラス』属性を持っているものを取得する。この時、クラスの『真偽値』が返る。
//  console.log(element.hasAttribute("class"))
// });

// 【例示】クラスの値で条件分岐し処理を振り分けるコード
const anchors = document.querySelectorAll("li")

function setElem(ins) {
  ul = document.createElement("ul")
  li = document.createElement("li")
  li.classList.add("second")
  ins.appendChild(ul)
  ul.appendChild(li)
  return ins
}

anchors.forEach(element => {
  if (element.getAttribute("class") === "john") {
    setElem(element)
    li.textContent = "yoko"
  } else if (element.getAttribute("class") === "paul") {
    setElem(element)
    li.textContent = "rinda"
  } else if (element.getAttribute("class") === "george") {
    setElem(element)
    li.textContent = "hello, george!"
  } else if (element.getAttribute("class") === "ringo") {
    setElem(element)
    li.textContent = "hello, ringo!"
  }
})