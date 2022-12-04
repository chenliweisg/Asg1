/*Get document object to access HTML*/
let inputEmail = document.getElementById('email');
let inputPwd = document.getElementById('password');
let btn = document.getElementById('btn');

/*Email Validation reg expression*/
var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function checkEmail(event){
    if (!(mailformat.test(inputEmail.value)))
    {
        document.getElementById('alertEmail').hidden = false
    }
    else{
        document.getElementById('alertEmail').hidden = true
    }
}

function checkPwd(event){
    if ((inputPwd.value.length < 6))
    {
        document.getElementById('alertPwd').hidden = false
    }else{
        document.getElementById('alertPwd').hidden = true
    }
}

function checkInput(event){
    /*If email and pwd has value*/
    if (inputEmail.value && (inputPwd.value.length >= 6)){
        /*Check if email is in the correct format*/
        if (mailformat.test(inputEmail.value)){
            alert("You have sign up successfully");
            /*Store email & pwd into cookies*/
            localStorage.setItem("email",inputEmail.value);
            localStorage.setItem("pwd",inputPwd.value);

            /*user session set to true*/
            localStorage.setItem("session",true);

            /*clear the input text for email & pwd*/
            document.getElementById('email').value = null
            document.getElementById('pwd').value = null
          }
        else{
            event.preventDefault();
          }
    }
    else{
        event.preventDefault()
    }
}

inputEmail.addEventListener('blur',checkEmail,false)
inputPwd.addEventListener('blur',checkPwd,false)
btn.addEventListener('click',checkInput,false)
