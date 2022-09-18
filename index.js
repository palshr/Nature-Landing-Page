const signInBtn=document.getElementById("signIn");
const signUpBtn=document.getElementById("signUp");
const fistform=document.getElementById("form1");
const secondform=document.getElementById("form2");
const container=document.querySelector(".container");
signInBtn.addEventListener("click",()=>{
    container.classList.remove("right-panel-active");
});
signUpBtn.addEventListener("click",()=>{
    container.classList.add("right-panel-active");
});
fistform.addEventListener("submit",(e)=>e.preventDefault());
sceondform.addEventListener("submit",(e)=>e.preventDefault());