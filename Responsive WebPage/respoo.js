burger =document.querySelector('.burger')
navbar =document.querySelector('.navbar')
navList =document.querySelector('.nav-list')
rightNav= document.querySelector('.rightNav') 



burger.addEventListener('click' ,  ()=>

{
    rightNav.ClassList.toggle('v-class-resp');
    navList.ClassList.toggle('v-class-resp');
    navbar.ClassList.toggle('v-class-resp');
})