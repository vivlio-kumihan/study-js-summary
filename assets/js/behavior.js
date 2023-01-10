// 最初・最後の要素を取得する。=> .firstElementChild, .lastElementChild
const firstList = document.querySelector(".list").firstElementChild
const lastList = document.querySelector(".list").lastElementChild

// 最初のリストを取得して値を変更する。
firstList.textContent = "hello"

// どちらのメソッドでも思い浮かよようにね。
// // TargetElememt.className = "class name"
// // TargetElement.classList.add("class name")

// firstList.className = "emphasis"
firstList.classList.add("emphasis")

// 最後のリストを取得して値を変更する。
lastList.textContent = "goodbye"
// lastList.className = "emphasis"
lastList.classList.add("emphasis")