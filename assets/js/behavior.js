// スクロール・イベントについて　その4
const monitorElements = document.querySelectorAll(".animation-target")

window.addEventListener("scroll", () => {
  monitorElements.forEach((elem, idx) => {
    const getElementDistance = elem.getBoundingClientRect().top + elem.clientHeight * 0.5
    if (window.innerHeight > getElementDistance) {
      elem.classList.add("show")
    }

  })
})