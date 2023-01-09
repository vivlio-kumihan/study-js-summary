// 子要素を取得する。
// 『forEach』が使えない！

const list = document.querySelector(".list").children

for (let idx = 0; idx < list.length; idx++) {
  const element = list[idx]
  console.log(element)
}
