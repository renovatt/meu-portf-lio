const typewriter = document.querySelector('#typewriter')
const btnTop = document.getElementById('btn')


//------Início Up Buttom------//
btnTop.addEventListener('click', function(){
    window.scrollTo(0,0)
})

document.addEventListener('scroll', btnHide)

function btnHide(){
    if(window.scrollY > 1800){
        btnTop.style.display = "flex"
    } else{
        btnTop.style.display = "none"
    }
}
btnHide()
//------Fim Up Buttom------//


//------TyperWrite Effect------//
function typeWriter(elemento){
    const textArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i)
    })
}

typeWriter(typewriter)
//------Fim TyperWrite------//


//------Screen Effect------//
window.screen = ScrollReveal({reset: true})
screen.reveal('.w-show', {duration: 1500})
screen.reveal('.w-about', {duration: 1500})
screen.reveal('.w-projects', {duration: 1500})
screen.reveal('.w-cards', {duration: 1500})
screen.reveal('.card', {duration: 1500})
screen.reveal('.card-content', {duration: 1500})
screen.reveal('.github', {duration: 1500})
screen.reveal('.title-know', {duration: 1500})
screen.reveal('.w-know', {duration: 1500})
screen.reveal('.itens-know', {duration: 1500})
screen.reveal('.w-know-skills', {duration: 1500})
screen.reveal('.footer', {duration: 1500})
//------Fim Screen Effect------///


//------Menu Mobile------//
function openMenu(){
    document.getElementById('menu-mobile').style.width = '100%'

    let a1 = document.getElementById('a1')
    let a2 = document.getElementById('a2')
    let a3 = document.getElementById('a3')
    let a4 = document.getElementById('a4')

    a1.style.opacity = '1'
    a1.style.transform = 'translateX(0)'
    a1.style.transition = 'all 1.3s ease 0s'
    
    a2.style.opacity = '1'
    a2.style.transform = 'translateX(0)'
    a2.style.transition = 'all 1.5s ease 0s'

    a3.style.opacity = '1'
    a3.style.transform = 'translateX(0)'
    a3.style.transition = 'all 1.7s ease 0s'

    a4.style.opacity = '1'
    a4.style.transform = 'translateX(0)'
    a4.style.transition = 'all 1.9s ease 0s'
}

function closeMenu(){
    document.getElementById('menu-mobile').style.width = '0'

    let a1 = document.getElementById('a1')
    let a2 = document.getElementById('a2')
    let a3 = document.getElementById('a3')
    let a4 = document.getElementById('a4')
    
    a1.style.opacity = '0'
    a1.style.transform = 'translateX(500px)'
    
    a2.style.opacity = '0'
    a2.style.transform = 'translateX(500px)'
    
    a3.style.opacity = '0'
    a3.style.transform = 'translateX(500px)'
    
    a4.style.opacity = '0'
    a4.style.transform = 'translateX(500px)' 
}
//------Fim Menu Mobile------///