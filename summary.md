# JavaScriptまとめ

## 親要素にアクセスする。

__親要素である『ul』の背景色を変更してみる。__

__html__
```
  <div class="container">
    <h2>選択しりリストの<br>親要素の値を変更してみる。</h2>
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

ul {
  padding: 1rem;
  border-radius: .3rem;
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

.bg-color-red {
  background-color: red;
}
```

---
__js => .nextElementSibling, .previousElementSibling__

##### 親要素にアクセスして背景色を変更する。
```
const list = document.querySelector(".list li");
list.parentNode.classList.add("bg-color-red")
```