# JavaScriptまとめ

## イベント（クリック）を実行してみる。

__html__
```
<div class="container">
  <h2>クリックを合図にして何かをする。<br>addEventListener</h2>
  <div id="button">button</div>
  <div id="result"></div>
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
  height: 80vh;
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 900;
  line-height: 1.2;
  text-align: center;
}

#button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20%;
  padding: .5rem 0;
  font-size: 1.2rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .5rem;
  background-color: rgb(253, 226, 191);
  border-radius: .3rem;
}

#button:hover {
  color: #fff;
  background-color: rgb(245, 161, 52);
  cursor: pointer;
}

#result {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20%;
  height: 2.5rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  background-color: #eee;
  border-radius: .3rem;
}

#result.bgc-red {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 900;
  background-color: red;
  text-transform: uppercase;
}
```

---
__js => .addEventListener()__

##### クリックを合図に文字を表示させてあしらいを変更する。
```
const trigger = document.getElementById("button")
trigger.addEventListener("click", () => {
  const inputArea = document.getElementById("result")
  inputArea.textContent = "hello, world!"
  inputArea.classList.add("bgc-red")
})
```