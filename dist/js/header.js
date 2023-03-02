var menu = document.querySelector('.burger-menu')
var exit = document.querySelector('.burger-menu-exit')
var headerHidden = document.querySelector('.header-container-hidden')
var header = document.querySelector('.header-container-main')

menu.addEventListener("click", ()=>{
	headerHidden.style.transition = 'top 400ms ease'
	headerHidden.style.top = 0
})

exit.addEventListener("click", ()=>{
	headerHidden.style.transition = 'top 300ms ease'
	headerHidden.style.top = -160 + 'px'
})