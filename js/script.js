const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',() => {
    navbarlinks.classList.toggle('active')
})

/*If user login is true*/
if (localStorage.getItem('session') == "true")
{
    let logInOutBtn = document.getElementById('logInOut')
    logInOutBtn.textContent = "Logout" 

    function logout(){
        /*Sign out & reload page*/
        localStorage.setItem('session',false)
        location.reload();       
        /*localStorage.clear();*/
    }

    logInOutBtn.addEventListener('click',logout,false)
}
else{
    document.getElementById('logInOut').textContent = "Login"
    document.getElementById('logInOut').href = "login.html"
};

console.log(localStorage);
var path = window.location.pathname
var page = path. split("/"). pop();
console.log(page)
localStorage.setItem("page",page)

