

const fruits = {
  apple: "A sweet fruit that grows on trees.",
  orange: "A citrus fruit with a tough outer layer.",
  banana: "A long, curved fruit with a soft inside."
}

const dl = document.getElementById("dl")
for (const[key, value] of Object.entries(fruits)) {
  const dt = document.createElement("dt")
  dt.textContent = key
  console.log(dt)
  // dl.appendChild(dt)

  const dd = document.createElement("dd")
  dd.textContent = value
  console.log(dd)
  // dl.appendChild(dd)
}
