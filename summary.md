# JavaScriptまとめ

## 要素の挿入・追加

見出しにJavaScriptで文章を追加してみる。

__html__
```
<div class="container">
  <main>
    <h1>要素の挿入 appendChild</h1>
    <h2>befor, afterの検証</h2>
  </main>
</div>
```

__css__
```
@charset "UTF-8";

html {
  font-size: 15px;
}

body {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
  color: #555;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
}

main {
  padding: 4rem;
  background-color: #eee;
}

main h1 {
  font-size: 2rem;
  font-weight: 900;
}

main h2 {
  margin: 0.5rem 0;
  font-size: 1.75rem;
  font-weight: 700;
}

main h2:not(:first-of-type) {
  margin-top: 1.5rem;
}

.before {
  margin-top: 0.5rem;
}
```

### 指定したセレクターの子要素として、その中の一番最後に追加する。 => appendChild()
```
const main = document.querySelector("main"),
      pgh = document.createElement("p")
pgh.textContent = "helloと文字をmain要素の中に最後の子要素として追加する。"

main.appendChild(pgh)

const heading2 = document.querySelector("main h2"),
      divBefore = document.createElement("div"),
      divAfter = document.createElement("div")
```

### セレクターにクラスを追加する方法 => classList.add("クラス名"), .classNameなど

```
divBefore.classList.add("before")
// divAfter.classList.add("after")

// 他の方法もある。
// => セレクター.className = "クラス名"
// => ID.id = "ID名"
// divBefore.className = "before"
divAfter.id = "after"
```

### h2に文章を挿入する。 => .before(), .after()
```
divBefore.textContent = "h2の前にこの文章を挿入する。"
divAfter.textContent = "h2の後にこの文章を挿入する。"

// 前に挿入する。=> object.before()
heading2.before(divBefore)
// 後ろに挿入する。=> object.after()
heading2.after(divAfter)
```
