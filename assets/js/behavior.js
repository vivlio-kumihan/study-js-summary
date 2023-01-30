// フォームから入力した値で足し算をしてみる。
const submit = document.querySelector('input[type="submit"]'),
      outPut = document.querySelector(".out-put p")

// クリックイベントの中身は、変数を定義しているだけ。
// それで足し算プログラムがうごくとは不思議。
submit.addEventListener("click", (elem) => {

  elem.preventDefault()

  const inputArray = document.getElementById("input1").value.split("+"),
        // // reduce()を使った数値を持った配列の合計を出すやり方。
        // total = inputArray.reduce(function (sum, element) {
        //   return Number(sum) + Number(element)
        // }, 0),
        // ただ、変数定義でこの書き方は違和感があるので、無名関数を使って1行でやる。
        total = inputArray.reduce((sum, element) => Number(sum) + Number(element), 0),
        outPut = document.querySelector(".out-put p")
        outPut.textContent = total
  })