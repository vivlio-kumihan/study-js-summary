// ///////////////////
// //　型

// // 型を明示する。　typeof
// let input = document.getElementById("input").textContent
// console.log(typeof input) 
// // => string
// // 文字列の結合になる。
// document.getElementById("output").textContent = input + 1000

// // 型を変換する。　Number(ins), String(ins)
// console.log(Number(input))
// input = Number(input)
// // 数ととして計算する。
// document.getElementById("output").textContent = input + 1000


// フォームから入力した値で足し算をしてみる。
const inputSubmit = document.querySelector('input[type="submit"]'),
      outPut = document.querySelector(".out-put p")

inputSubmit.addEventListener("click", (elem) => {
  
  elem.preventDefault()

  const inputOne = document.getElementById("input1").value,
        inputTwo = document.getElementById("input2").value

  const sum = Number(inputOne) + Number(inputTwo)
  outPut.textContent = sum
})
