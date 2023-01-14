// スクロール・イベントについて　その1
window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset

  document.getElementById("scroll-position").textContent = scroll

  if (scroll > 0) {
    document.getElementById("header").classList.add("active")
  } else {
    document.getElementById("header").classList.remove("active")
  }

})