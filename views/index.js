const menuBtn = document.querySelector('#open-menu')
const closeBtn = document.querySelector('#close-menu')
const links = document.querySelector('.links')

menuBtn.addEventListener('click', () => {
    links.style.display = 'flex'
    closeBtn.style.display = 'inline-block'
    menuBtn.style.display = 'none'
})

closeBtn.addEventListener('click', () => {
    links.style.display = 'none'
    menuBtn.style.display = 'inline-block'
    closeBtn.style.display = 'none'
})