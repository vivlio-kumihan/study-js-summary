const members = [
  {
    position: "社長",
    name: "佐藤",
    age: 45,
  },
  {
    position: "部長",
    name: "鈴木",
    age: 38,
  },
  {
    position: "課長",
    name: "高橋",
    age: 35,
  },
  {
    position: "係長",
    name: "田中",
    age: 30,
  },
  {
    position: "社員",
    name: "渡辺",
    age: 23,
  },
  {
    position: "社員",
    name: "伊東",
    age: 22,
  }
]

const memberUl = document.getElementById("member"),
      resultUl = document.getElementById("result")

members.forEach(element => {
  const li = document.createElement("li")
  li.textContent = `${element.position}: ${element.name}, ${element.age}歳 `
  memberUl.appendChild(li)
})

// filterで値を収集して配列で返す。
const selectMember = members.filter(member => {
  return member.age >= 30
})
console.log(selectMember)

selectMember.forEach(hash => {
  const li = document.createElement("li")
  li.textContent = `${hash.position}: ${hash.name}, ${hash.age}歳 `
  resultUl.appendChild(li)
})

// 『some』で、配列の中に一つでも値があれば『ture』を返す。
const someData = members.some(member => {
  return member.age > 20
})
console.log(someData)

// 『every』で、配列の中で条件を全て満たした値があれば『ture』を返す。
const everyData = members.every(member => {
  return member.age > 20
})
console.log(everyData)
