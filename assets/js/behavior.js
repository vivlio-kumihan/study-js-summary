const thisButton = document.querySelector(".button"),
      ul = document.querySelector(".preview")
      greetArr = ["hello", "bonjour", "你好", "こんにちは"]
      listElems = document.querySelectorAll(".preview li")

thisButton.addEventListener("click", () => {
  // クリックするボタンの背景色を変更して、
  thisButton.classList.toggle("add-elem")
  // ulのliへ配列の各値を代入してリストを生成し、
  listElems.forEach((element, idx) => {
    element.textContent = greetArr[idx]
  })
  // 表示させる。これを切り替えているのが => toggle
  ul.classList.toggle("appear")
})
