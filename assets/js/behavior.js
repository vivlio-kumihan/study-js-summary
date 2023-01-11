// クリックを合図に文字を表示させる。=> addEventLins

const trigger = document.getElementById("button")
trigger.addEventListener("click", () => {
  const inputArea = document.getElementById("result")
  inputArea.textContent = "hello, world!"
  inputArea.classList.add("bgc-red")
})