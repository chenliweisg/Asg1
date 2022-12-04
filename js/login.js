/*Get document object to access HTML*/
let inputEmail = document.getElementById('email');
let inputPwd = document.getElementById('password');
let btn = document.getElementById('btn');

/*Email Validation reg expression*/
var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function checkEmail(event){
    if (!(mailformat.test(inputEmail.value)))
    {
        document.getElementById('email').style.border = "2px solid red"
    }
    else{
        document.getElementById('email').style.border = "2px solid #d6d1d1"
    }
}

function checkPwd(event){
    if (!inputPwd.value)
    {
        document.getElementById('password').style.border = "2px solid red"

    }else{
        document.getElementById('password').style.border = "2px solid #d6d1d1"
    }
}

function checkInput(event){
    if(inputEmail.value && inputPwd.value){
        if((localStorage.getItem('email') == inputEmail.value) && (localStorage.getItem('pwd') == inputPwd.value)){

            /*user session set to true*/
            localStorage.setItem("session",true);
            document.getElementById('forms').setAttribute("action",localStorage.page)
        }
        else{
            event.preventDefault()
            alert("password/username is wrong")
        }
    }
    else{
        event.preventDefault()
        /*If email & pwd is empty*/
        if((!inputEmail.value && !inputPwd.value)){
            document.getElementById('alertEmail').hidden = false
            document.getElementById('alertPwd').hidden = false
        }
        /*If email is empty*/
        else if(!inputEmail.value){
            document.getElementById('alertEmail').hidden = false
        }
        /*If pwd is empty*/
        else if (!inputPwd.value){
            document.getElementById('alertPwd').hidden = false
        }
    }
}

inputEmail.addEventListener('blur',checkEmail,false)
inputPwd.addEventListener('blur',checkPwd,false)
btn.addEventListener('click',checkInput,false)
