# JavaScriptまとめ

## 兄弟要素・最初・最後・偶数・奇数の要素にアクセスする。

__例えば、全てのリストの値へアクセスしたい場合を想定してみる。__

__html__
```
  <div class="container">
    <h2>
      選択したリストの<br>次（兄弟）の要素の値を変更してみる。
    </h2>
    <ul class="list">
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
      <li>List 4</li>
      <li>List 5</li>
    </ul>
    <ul class="list">
      <li>List 6</li>
      <li>List 7</li>
      <li>List 8</li>
      <li>List 9</li>
      <li>List 10</li>
    </ul>
  </div>
```

__css__
```
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
}

h2 {
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
}

.list:not(:first-of-type) {
  margin-top: 1.5rem;
}

li {
  width: 15rem;
  padding: .5rem 0;
  text-align: center;
  background-color: blanchedalmond;
  border-radius: .3rem;
}

li:not(:first-of-type) {
  margin-top: .7rem;
}

.emphasis {
  font-size: 1.1rem;
  font-weight: 900;
  text-transform: uppercase;
}

.color-red {
  color: red;
}

.bg-orange {
  background-color: rgb(239, 207, 149);
}
```

---
__js => .nextElementSibling, .previousElementSibling__

##### 『querySelectorAll』でリストにして『forEach』で回す方法。
> ただし、偶数・奇数にアクセスすることは煩雑なのでやらないことにする。
  『querySelector』『querySelectorAll』を使った方が楽です。

```
const lists = document.querySelectorAll(".list")
lists.forEach((element, idx) => {
  const first = element.firstElementChild
  const last = element.lastElementChild
  // 『インデックス2番目』の子要素
  const nthOne = element.children[2]

  // 最初の要素の次（弟）要素にアクセスする。=> .nextElementSibling
  first.nextElementSibling.textContent = "second one"
  first.nextElementSibling.classList.add("emphasis")

  // 最後の要素の上（兄）要素にアクセスする。=> previousElementSibling
  last.previousElementSibling.textContent = "previous last one"
  last.previousElementSibling.classList.add("emphasis")

  // 『インデックス2番目』の要素に値を代入する。
  nthOne.textContent = "center one"
  nthOne.classList.add("emphasis")
  nthOne.classList.add("color-red")
})
```
---
#### シンプルに『querySelector』と組み合わせる方法。

> 冗長的だがこちらのほうがコードの見通しがいいかもしれない。
  最初の要素の次（弟）要素にアクセスする。=> :first-child, .nextElementSibling

```
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
```