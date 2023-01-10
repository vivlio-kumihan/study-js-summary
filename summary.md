# JavaScriptまとめ

## 最初・最後の要素を取得する。=> .firstElementChild, .lastElementChild 

リストの最初と最後の要素の値を変更してみる。

__html__
```
  <div class="container">
    <ul class="list">
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
      <li>List 4</li>
      <li>List 5</li>
    </ul>
  </div>
```

__css__
```
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
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
}
```

__js => .firstElementChild, .lastElementChild__
```
const firstList = document.querySelector(".list").firstElementChild
const lastList = document.querySelector(".list").lastElementChild
```

_最初のリストを取得して値を変更する。_

```
firstList.textContent = "hello"
```

_（復習）どちらのメソッドでも思い浮かぶようにね。_
* TargetElememt.className = "class name"
* TargetElement.classList.add("class name")

```
firstList.className = "emphasis"
firstList.classList.add("emphasis")
```

_最後のリストを取得して値を変更する。_
```
lastList.textContent = "goodbye"
lastList.className = "emphasis"
lastList.classList.add("emphasis")
```