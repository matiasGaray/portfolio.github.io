addEventListener('DOMContentLoaded', ()=>{
    const boton = document.querySelector('.menu-icon')
    if(boton){
        boton.addEventListener('click', ()=>{
            const menuItems = document.querySelector('.menu-items') 
            menuItems.classList.toggle('show')
        })
    }
})
