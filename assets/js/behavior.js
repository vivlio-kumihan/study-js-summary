// 兄弟要素・最初・最後・偶数・奇数の要素にアクセスする。

// 例えば、全てのリストの値へアクセスしたい場合を想定してみる。 

// // 『querySelectorAll』でリストにして『forEach』で回す方法。
// // ただし、偶数・奇数にアクセスすることは煩雑なのでやらないことにする。
// // querySelector, querySelectorAllを使った方ら楽です。

// const lists = document.querySelectorAll(".list")

// lists.forEach((element, idx) => {
//   const first = element.firstElementChild
//   const last = element.lastElementChild
//   // 『インデックス2番目』の子要素
//   const nthOne = element.children[2]

//   // 最初の要素の次（弟）要素にアクセスする。=> .nextElementSibling
//   first.nextElementSibling.textContent = "second one"
//   first.nextElementSibling.classList.add("emphasis")
  
//   // 最後の要素の上（兄）要素にアクセスする。=> previousElementSibling
//   last.previousElementSibling.textContent = "previous last one"
//   last.previousElementSibling.classList.add("emphasis")
  
//   // 『インデックス2番目』の要素に値を代入する。
//   nthOne.textContent = "center one"
//   nthOne.classList.add("emphasis")
//   nthOne.classList.add("color-red")
// })


// シンプルに『querySelector』と組み合わせる方法。
// 冗長的だがこちらのほうがコードの見通しがいいかもしれない。
// 最初の要素の次（弟）要素にアクセスする。=> :first-child, .nextElementSibling
const selectOne = document.querySelectorAll(".list li:first-child")
selectOne.forEach(element => {
  element.nextElementSibling.textContent = "first one"
  element.nextElementSibling.classList.add("emphasis")
})

// 最後の要素の上（兄）要素にアクセスする。=> :last-child, previousElementSibling
const selectTwo = document.querySelectorAll(".list li:last-child")
selectTwo.forEach(element => {
  element.previousElementSibling.textContent = "last one"
  element.previousElementSibling.classList.add("emphasis")
})

// 『先頭から3番目』の要素にアクセスする。=> :nth-child(n)
const selectThree = document.querySelectorAll(".list li:nth-child(3)")
selectThree.forEach(element => {
  element.textContent = "center one"
  element.classList.add("emphasis")
  element.classList.add("color-red")
})

// 奇数・偶数の要素にアクセスする。=> :nth-child(odd), :nth-child(even)
const selectLine = document.querySelectorAll(".list li:nth-child(odd)")
selectLine.forEach(element => {
  element.classList.add("bg-orange")
})