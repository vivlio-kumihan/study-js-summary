// ローディングアニメーション
function loaded() {
  const loading = document.getElementById("loading")
  loading.classList.remove("active")
}

window.addEventListener('load', () => {
  setTimeout(loaded, 3000)
})

// setTimeout(loaded, 5000)