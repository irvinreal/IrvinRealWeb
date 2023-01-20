const logotipo_nav = document.querySelector('.logotipo-nav')
const ul = document.querySelector('.ul')

logotipo_nav.addEventListener('click', () => {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open')
        ul.classList.remove('on')
        logotipo_nav.classList.remove('on')

    } else  {
    ul.classList.add('open')
    ul.classList.add('on')
    logotipo_nav.classList.add('on')
    }
})