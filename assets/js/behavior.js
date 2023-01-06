// 要素の挿入・追加

// 指定したセレクターの子要素として、その中の一番最後に追加する。
const main = document.querySelector("main"),
      pgh = document.createElement("p")
pgh.textContent = "helloと文字をmain要素の中に最後の子要素として追加する。"
main.appendChild(pgh)
