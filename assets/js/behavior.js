const thisButton = document.querySelector(".button"),
      timeIndication = document.querySelector(".preview"),
      dayOftheWeek = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]

thisButton.addEventListener("click", () => {
  const thisTime = new Date(),
        year     = thisTime.getFullYear(),
        month    = thisTime.getMonth() + 1,
        day      = thisTime.getDate(),
        // 日曜日をインデックス0番として、各曜日のインデックスを返す。
        week     = dayOftheWeek[thisTime.getDay()],
        hours    = thisTime.getHours(),
        minites  = thisTime.getMinutes(),
        seconds  = thisTime.getSeconds()

  thisButton.classList.toggle("add-elem")
  timeIndication.textContent = `現在は、${year}年${month}月${day}日${week}${hours}時${minites}分${seconds}秒`
  timeIndication.classList.toggle("appear")
})