
const btn=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
if(btn&&links){btn.addEventListener('click',()=>links.classList.toggle('open'))}
