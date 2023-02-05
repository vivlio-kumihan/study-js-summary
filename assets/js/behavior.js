// JSにおける配列の処理について。配列データの削除、挿入、差し替え => splice()

const members = [
  {
    position: "社長",
    name: "和田",
    ruby: "わだ",
    age: 45,
  },
  {
    position: "部長",
    name: "明石",
    ruby: "あかし",
    age: 38,
  },
  {
    position: "課長",
    name: "高木",
    ruby: "たかぎ",
    age: 35,
  },
  {
    position: "係長",
    name: "田中",
    ruby: "たなか",
    age: 30,
  },
  {
    position: "社員",
    name: "木戸",
    ruby: "きど",
    age: 23,
  },
  {
    position: "社員",
    name: "村田",
    ruby: "むらた",
    age: 22,
  }
]

members.forEach(element => {
  const li = document.createElement("li")
  li.textContent = `${element.name}さん：${element.position}, ${element.age}歳`
  console.log(li)
  document.getElementById("members-list").appendChild(li)
})