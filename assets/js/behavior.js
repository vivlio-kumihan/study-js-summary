const para = document.querySelectorAll('.effect-para p');

const splitPara = () => {
  Array.from(para).forEach((p) => {
    const wrappedText = p.textContent.split('')
      .map((char) => {
        return char === ' ' ? `<span>${ '&nbsp;' }</span>` : `<span>${ char }</span>`;
      })
      .join('');
    p.innerHTML = wrappedText;
  });
};

splitPara(para);

para.forEach(elem => {
  const tl = gsap.timeline({
    defaults: {
      opacity: 0,
      ease: 'power1.inOut',
      stagger: .1
    },
    scrollTrigger: {
      trigger: elem,
      start: 'top center',
      markers: true
    }
  })
  tl.from(elem, {})
    .from(elem.children, {}, '-=0.25')
})


// // 一文字ずつ現れる
// // ドキュメント上の該当文章を一文字ごとバラバラにしていく。
// // 属性『letter-spacing: none;』を最後の文字だけ字間のアキを取り去る
// function splitText(className) {
//   className.forEach(elem => {
//     let htmlContent = elem.innerHTML
//     let tmpText = ""
//     htmlContent.split('<br>').forEach((sentence, idx, arr) => {
//       let preText = Array.from(sentence).slice(0, -1)
//       let lastChar = Array.from(sentence).slice(-1)
//       preText.forEach((char) => {
//         tmpText += `<span>${char}</span>`
//       })
//       tmpText = `${ tmpText }<span class='remove-letter-spacing'>${ lastChar }</span>`
//       // 最後の部分以外はbrタグを追加
//       if (idx < arr.length - 1) {
//         tmpText += '<br>'
//       }
//     })
//     elem.innerHTML = tmpText
//   })
// }
