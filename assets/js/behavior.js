let onOff = document.querySelector("#on-off")
document.querySelector("#btn").addEventListener("click", function() {
  if (onOff.checked) {
    console.log(onOff.value)
  } else {
    console.log("チェックされていません。")
  }
}, false);