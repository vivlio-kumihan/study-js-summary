// スクロール・イベントについて　その2
let beforeScrollValue = 0
const headerElm = document.querySelector("header")

window.addEventListener("scroll", () => {
  if (window.scrollY > beforeScrollValue) {
    headerElm.classList.add("inActive")
  } else {
    headerElm.classList.remove("inActive")
  }
  beforeScrollValue = window.scrollY
})
