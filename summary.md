# JavaScripまとめ

## 要素の選択

下記のようにしてリストを生成して要素を選択してみる。

__html__
```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./assets/css/destyle.css">
  <link rel="stylesheet" href="./assets/css/fonts.css">
  <link rel="stylesheet" href="./assets/css/style.css">
  <script src="./assets/js/behavior.js" defer></script>

</head>
<body>
  <div class="container">
    <ul id="menu" class="list">
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
    </ul>  
  </div>
</body>
</html>
```

__css__
```
@charset "UTF-8";

html {
  font-size: 15px;
}

body {
  font-size: 1rem;
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

.list {
  font-size: 2rem;
}

.list li:not(:first-of-type) {
  margin-top: 1.5rem;
}
```

### IDを取得する。=> getElementById
```
objId = document.getElementById("menu");
console.log(objId);
```

### CSSセレクター（その中身も含めた『最初』の一つ）=> querySelector
```
objSelector = document.querySelector("li");
console.log(objSelector);
```

### CSSセレクターをNodeListとして取得する。=> querySelectorAll
```
objSelctAll = document.querySelectorAll("li");
console.log(objSelctAll);
```

### HTML（HTML全て）を取得する。=> documentElement
```
objHTML = document.documentElement;
console.log(objHTML);
```

### CSSセレクターのbody全体を取得する。
```
objBody = document.body;
console.log(objBody);
```

### CSSセレクターのhead全体を取得する。
```
objHead = document.head;
console.log(objHead);
```

### 実践　要素を取得し該当の値を変更する。
```
objSelects = document.querySelectorAll("a");
objSelects.forEach((element, idx) => {
  element.textContent = "hello" + (idx + 1);
});
```