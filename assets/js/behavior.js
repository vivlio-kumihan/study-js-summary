const slideUp = (selector, duration = 1000) => {
  const target = document.querySelector(selector)

  // slideDown用に必要な値をここで得る。
  target.dataset.height = `${ target.clientHeight }px`
  target.dataset.padding_top = window.getComputedStyle(target).paddingTop
  target.dataset.padding_bottom = window.getComputedStyle(target).paddingBottom

  // 閉まる時にカクンとならないように高さを教える。
  target.style.height = `${ target.clientHeight }px`
  target.animate([
    {
      height: '0',
      paddingTop: '0',
      paddingBottom: '0',
      opacity: '0'
    }],
    {
      duration: duration,
      // fill: 'forwards', // アニメーションが終わった後の状態を保持する。
      ease: 'ease-in-out'
    }
  )
  .onfinish = () => {
    target.style.display = 'none'
  }
}
document.getElementById('slide-up').addEventListener('click', () => {
  slideUp('.target', 500)
})


const slideDown = (selector, duration = 1000) => {
  const target = document.querySelector(selector)

  target.style.display = 'block'
  target.animate([
    {
      height: '0',
      paddingTop: '0',
      paddingBottom: '0',
      opacity: '0'
    }],
    [{
      height: target.dataset.height,
      paddingTop: target.dataset.padding_top,
      paddingBottom: target.dataset.padding_bottom,
      opacity: '1'
    }],
    {
      duration: duration,
      fill: 'forwards',
      ease: 'ease-in-out'
    }
  )
}

document.getElementById('slide-up').addEventListener('click', () => {
  slideUp('.target', 500)
})

document.getElementById('slide-down').addEventListener('click', () => {
  slideDown('.target', 500)
})