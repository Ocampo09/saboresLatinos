'use strict'
const imgList  = document.querySelectorAll(`.imagen`)
const lightbox = document.querySelector(`.lightbox`)
const grandeLB   = document.querySelector(`.grandeLB`)
const closeLB    = document.querySelector(`.close`)

imgList.forEach(( eachImg , index)=>{
    imgList[index].addEventListener(`click`,()=>{

        lightbox.classList.add(`isActive`)
        grandeLB.src = imgList[index].src

    })
})



// cuando hago click en close
    // .lightbox se le REMOVE la calse isAvtive


closeLB.addEventListener(`click`, ()=>{
    lightbox.classList.remove(`isActive`)
})





/***************************menu***********************************/

let enlaces = document.querySelectorAll(' .listaContent .lista li a');

enlaces.forEach((element)=>{
    element.addEventListener('click',(event)=>{
        //console.log(event.target)
        enlaces.forEach((i)=>{
            i.classList.remove('activo')
        })
        event.target.classList.add('activo')
        menu.style.left = '-100%';
        activador = true
        barIconX.classList.toggle('fa-times')
        
    })
})


/****************************Srcoll*********************************/


let menuContent   = document.querySelector('.menu1')
let preScrollPoss = window.pageYOffset;

 window.addEventListener('scroll',function(){
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos)

    if(preScrollPoss>currentScrollPos){
        menuContent.style.top='0px';
        menuContent.style.transition='0.3s';
        menuContent.style.borderBottom='2px solid #cf1f3c'
    }else{
        menuContent.style.top='-100px';
        menuContent.style.transition='0.3s';
        menuContent.style.borderBottom='none'
    }

    preScrollPoss=currentScrollPos
 })


 /**********************************Menu Hamburguesa************ */

 let btnMenu   = document.querySelector('.btn-menu');
 let barIconX  = document.querySelector('.btn-menu i')
 let menu      = document.querySelector('.listaContent')

 let activador = true;
 
 btnMenu.addEventListener('click',()=>{
    barIconX.classList.toggle('fa-times')

    if(activador){
        menu.style.left = '0';
        menu.style.transition = '0.5s'
        activador = false;
    }else{
        menu.style.left = '-100%';
        menu.style.transition = '0.5s'
        activador = true;
        
    }
 })

let abajo = document.querySelector('.verAbajo');

abajo.addEventListener('click',()=>{
    document.documentElement.scrollTop = 870;
})



