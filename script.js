let closenav1 = document.getElementById('close')
let banner = document.getElementById('banner')
closenav1.addEventListener('click',function(){
    banner.style.display='none'
})

let imgbox=document.getElementById('imgbox')
let previousbtn=document.getElementById('previousbtn')
let nextbtn=document.getElementById('nextbtn')

nextbtn.addEventListener('click',function(){
    imgbox.style.scrollBehavior = 'smooth'
    imgbox.scrollLeft +=1535
    // imgbox.scrollLeft -=1535
})
previousbtn.addEventListener('click',function(){
    imgbox.style.scrollBehavior = 'smooth'
    imgbox.scrollLeft -=1535
})

let sidenav = document.getElementById('sidenav')
let menuicon = document.getElementById('menuicon')
let closenav = document.getElementById('closenav')
menuicon.addEventListener('click',function()
{
    sidenav.style.left=0
})

closenav.addEventListener('click',function()
{
    sidenav.style.left='-50%'
})