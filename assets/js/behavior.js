// 要素の挿入・追加

// 指定したセレクターの子要素として、その中の一番最後に追加する。
const main = document.querySelector("main"),
      pgh = document.createElement("p")
pgh.textContent = "helloと文字をmain要素の中に最後の子要素として追加する。"

main.appendChild(pgh)

const heading2 = document.querySelector("main h2"),
      divBefore = document.createElement("div"),
      divAfter = document.createElement("div")

// セレクターにクラスを追加する方法 => classList.add("クラス名")
divBefore.classList.add("before")
// divAfter.classList.add("after")

// 他の方法もある。
// => セレクター.className = "クラス名"
// => ID.id = "ID名"
// divBefore.className = "before"
divAfter.id = "after"

divBefore.textContent = "h2の前にこの文章を挿入する。"
divAfter.textContent = "h2の後にこの文章を挿入する。"

// 前に挿入する。=> object.before()
heading2.before(divBefore)
// 後ろに挿入する。=> object.after()
heading2.after(divAfter)