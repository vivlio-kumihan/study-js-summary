# JavaScriptまとめ

## スクロールした値を取得、スクロール値によってあしらいを変える

__html__
```
<div class="container">
  <div id="scroll-position"></div>
  <ul>
    <li>contents 1</li>
    <li>contents 2</li>
    <li>contents 3</li>
    ...
    <li>contents 50</li>
    ...
    <li>contents 100</li>
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
  text-align: center;
}

ul {
  padding: 2rem;
  background-color: #eee;
}

li:not(:first-of-type) {
  margin-top: .5rem;
}

#scroll-position {
  position: fixed;
  bottom: 3rem;
  right: 3rem;

  padding: 1rem;
  color: #fff;
  background-color: #555;
  border-radius: .3rem;
}

.bg-color-red {
  font-weight: 900;
  color: #fff;
  background-color: red;
  text-transform: uppercase;
  transition: .7s;
}
```

---
__js => window.addEventListener("scroll", ()=> { function }__
__let scroll = document.documentElement.scrollTop__

##### スクロール量を表示させる。スクロールの位置によってあしらいを変更する。
```
// 『window』オブジェクトに『scroll』をきっかけとして『.addEventListener』でインスタンスを生成させる。
window.addEventListener("scroll", ()=> {
  // このインスタンス内で『.scrollTop』メソッドを送って画面上辺からの距離を取得する。
  let scroll = document.documentElement.scrollTop

  // 任意の要素へ値を設定して、
  document.getElementById("scroll-position").textContent = scroll

  // 任意の要素のあしらいを変更する。
  if (scroll > 300) {
    document.querySelector("ul").classList.add("bg-color-red")
  } else {
    document.querySelector("ul").classList.remove("bg-color-red")
  }
})
```