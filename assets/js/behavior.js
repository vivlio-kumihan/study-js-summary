// フォームから入力した値で足し算をしてみる。
const submit = document.querySelector('input[type="submit"]'),
      outPut = document.querySelector(".out-put"),
      ul = document.querySelector(".out-put ul")

// クリックイベントの中身は、変数を定義しているだけ。
// それで足し算プログラムがうごくとは不思議。
submit.addEventListener("click", (elem) => {

  elem.preventDefault()

  const inputArray = document.getElementById("input1").value.split("+")

  const total = inputArray.reduce((sum, element, idx) => {
    const li = document.createElement("li")
    if (idx < inputArray.length - 1) {
      li.textContent = `${ idx }回目の小計 => ${ Number(sum) + Number(element) }`
    } else {
      li.textContent = `合計 => ${ Number(sum) + Number(element) }`
    }
    ul.appendChild(li)
    outPut.classList.add("active")
    return Number(sum) + Number(element)
  })
})


// reduceの書式
// const result = arr.reduce((previous, current, index) => {
//   function...
//   ...
//   ...
//   return previous + current
//    ↓計算を始める初期値を設定できる。
// }, 0)