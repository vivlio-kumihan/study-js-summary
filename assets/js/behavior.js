// 要素の切り替え・付与・削除

// 要素を切り替えるとは、
// ・『クリックしたイベント』を契機にオブジェクトや状況の変化を演出する。
// ・ターゲットとなる要素へ変化させる効果を設定したクラスを付与する。

// // 契機
// // クリックして関数を作動させる => EventTarget.addEventListener("click", 関数)
// document.getElementById("switch-class").addEventListener("click", function() {
//   this.textContent = "hello";
// })

// // 無名関数で『this』は使えない。だからベタべタの書き方になる。
// document.getElementById("switch-class").addEventListener("click", () => {
//   document.getElementById("switch-class").textContent = "hello";
// })

// // 行数は増えるがインスタンスにして運用した方が見通しがよいと思われるので、当面はこの書式で進める。
// const switchClass = document.getElementById("switch-class")
// switchClass.addEventListener("click", () => {
//   switchClass.textContent = "hello"
// })

// // クラスの付与 =>  TargetObject.classList.add("class_name_string"), 
// //                TargetObject.className = "class_name_string"
// // ID要素にクラスを付与して効果を切り替える場合、CSSの優先度に留意する。
// const switchClass = document.getElementById("switch-class")
// switchClass.addEventListener("click", () => {
//   switchClass.textContent = "hello"
//   // switchClass.classList.add("add-appearance")
//   switchClass.className = "add-appearance"
// })

// クラスの削除 =>  TargetObject.classList.remove("class_name_string") 
const switchClass = document.getElementById("switch-class")
switchClass.addEventListener("click", () => {
  switchClass.textContent = "hello"
  switchClass.classList.remove("add-appearance")
})