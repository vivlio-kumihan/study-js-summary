# JavaScriptまとめ

## 要素のクラスを付け替える。

ボタンの表示の下にリストをレイアウトする。

__html__
```
<div class="container">
  <div id="switch-class">ここをクリックしてリストを表示させる。</div>
  <ul id="list">
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
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

#switch-class {
  margin-bottom: 1rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #eee;
  border-radius: .5rem;
  cursor: pointer;
}

#switch-class.add-appearance {
  color: #fff;
  background-color: brown;
}

li {
  padding: .5rem 1rem;
  font-size: 1.2rem;
  text-align: center;
  background-color: blanchedalmond;
  border-radius: .2rem;
  opacity: 0;
}

li:not(:first-of-type) {
  margin-top: .7rem;
}

.apear {
  opacity: 1;
  transition: 1.5s;
}
```

#### クラスを付け替える。=> toggle
```
const switchClass = document.getElementById("switch-class")
switchClass.addEventListener("click", () => {
  switchClass.textContent = "リスト"
  switchClass.classList.add("add-appearance")

  const list = document.querySelectorAll("#list li")
  list.forEach((element, idx) => {
    element.textContent = `Hello Wordl! ${idx + 1}`
    element.classList.toggle("apear")
  });
})
```