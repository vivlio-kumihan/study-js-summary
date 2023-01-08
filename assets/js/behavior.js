// クラスを付け替える。=> toggle
const switchClass = document.getElementById("switch-class")
switchClass.addEventListener("click", () => {
  switchClass.textContent = "リスト"
  switchClass.classList.add("add-appearance")

  const list = document.querySelectorAll("#list li")
  list.forEach((element, idx) => {
    element.textContent = `Hello Wordl! ${idx + 1}`
    element.classList.toggle("apear")
  });
})