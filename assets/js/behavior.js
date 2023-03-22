function getRadioValue(name, value) {
  let elems = document.querySelectorAll(`input[name="${ name }"]`)

  for(let elem of elems) {
    if (elem.value === value) {
      elem.checked = true
      break
    }
  }
}

console.log(getRadioValue("food", "餃子"))