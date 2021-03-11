console.log('%c nav sais:', 'background:#000; color:magenta; padding: 10px 20px; margin: 20px 0;')

const menuBtn = document.querySelector('.navbar__menu-btn')
let menuOpen = false
menuBtn.addEventListener('click', e => {
  e.preventDefault()
  console.log(e.target)
  if (!menuOpen) {
    menuBtn.classList.add('open')
    menuOpen = true
  } else {
    menuBtn.classList.remove('open')
    menuOpen = false
  }
})
