// カスタムデータ属性（deta-elementName）を利用して要素のあしらいを変更する。

const colorList = document.querySelectorAll(".color-list li"),
      preview = document.querySelector(".preview"),
      paragraph = document.querySelector(".preview p")

// HTMLで設定したカスタムデータの属性を取得する。　
// こんな風に略ししている感じで覚える。
// <li data-color="red">の要素を取得したら、属性には『赤色』が設定してある。
// それをインスタンスへメッセージを送る感じ。
// (data) + (-) + (color) => dataset.color => element.dataset.color

colorList.forEach(element => {
  element.addEventListener("click", () => {
    const color = element.dataset.color
    preview.style.backgroundColor = color
    paragraph.textContent = color
  })
})