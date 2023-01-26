const clickEvent = document.querySelector(".button")

clickEvent.addEventListener("click", () => {
  const namedList = ["apple", "banana", "orange", "melon"],
        defaultTexts = document.querySelectorAll(".default-text")

  defaultTexts.forEach(element => {
    element.classList.add("hidden")
  });

  namedList.forEach(element => {
    let li = document.createElement("li")
    li.textContent = element
    document.querySelector(".preview ul").appendChild(li)
  })
})
