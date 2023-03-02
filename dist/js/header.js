var menu = document.querySelector('.burger-menu')
var exit = document.querySelector('.burger-menu-exit')
var headerHidden = document.querySelector('.header-container-hidden')
var header = document.querySelector('.header-container-main')

//по возможности реализовать проверку на высоту блока -100px

menu.addEventListener("click", ()=>{
	headerHidden.style.transition = 'top 400ms ease'
	headerHidden.style.top = 0
	/* header.style.display = 'none'; */
})

exit.addEventListener("click", ()=>{
	headerHidden.style.transition = 'top 300ms ease'
	headerHidden.style.top = -160 + 'px'
	/* header.style.display = 'flex' */
})