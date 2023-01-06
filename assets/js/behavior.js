// 要素の選択

// IDを取得する。=> getElementById
objId = document.getElementById("menu");
console.log(objId);

// CSSセレクター（その中身も含めた『最初』の一つ）=> querySelector
objSelector = document.querySelector("li");
console.log(objSelector);

// CSSセレクターをNodeListとして取得する。=> querySelectorAll
objSelctAll = document.querySelectorAll("li");
console.log(objSelctAll);

// HTML（HTML全て）を取得する。=> documentElement
objHTML = document.documentElement;
console.log(objHTML);

// CSSセレクターのbody全体を取得する。
objBody = document.body;
console.log(objBody);

// CSSセレクターのhead全体を取得する。
objHead = document.head;
console.log(objHead);

// 実践　要素を取得し該当の値を変更する。
objSelects = document.querySelectorAll("a");
objSelects.forEach((element, idx) => {
  element.textContent = "hello" + (idx + 1);
});