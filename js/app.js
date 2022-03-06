
$(document).ready(function(){

   let hamberger = document.querySelector('.hamberger');

 let times =document.querySelector('.times');

 let mobileNav= document.querySelector('.moble-nav');

let aa1=document.querySelector('.a1');

let aa2=document.querySelector('.a2');

let aa3=document.querySelector('.a3');

let aa4=document.querySelector('.a4');

let aa5=document.querySelector('.a5');

let aa6=document.querySelector('.a6');

aa1.addEventListener('click',function(){
       mobileNav.classList.remove("open");

 });
 
aa2.addEventListener('click',function(){
       mobileNav.classList.remove("open");

 });

aa3.addEventListener('click',function(){
       mobileNav.classList.remove("open");

 });

aa4.addEventListener('click',function(){
       mobileNav.classList.remove("open");

 });

aa5.addEventListener('click',function(){
       mobileNav.classList.remove("open");

 });

aa6.addEventListener('click',function(){
       mobileNav.classList.remove("open");

 });

 hamberger.addEventListener('click',function(){
      
     mobileNav.classList.add("open");
 });

 times.addEventListener('click',function(){
       mobileNav.classList.remove("open");

 });

});
 