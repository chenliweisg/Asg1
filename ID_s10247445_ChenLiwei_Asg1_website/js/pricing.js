
if (localStorage.session == 'false' || localStorage.session == null){
    let atag = document.getElementsByClassName('ahref')
    for (let i = 0; i < atag.length; i++) {
        atag[i].removeAttribute("href")
        atag[i].href = "login.html"
    }
}
else{
    /*Get document object to access HTML*/
    let deluxeplan = document.getElementById('deluxe')

    function buyplan1(event){
        localStorage.setItem('plan',deluxeplan.value)
        console.log(localStorage.getItem('plan'))
        alert("Thank you for buying deluxe plan")
        location.reload();
    }

    deluxeplan.addEventListener('click',buyplan1,false)

    /*Get document object to access HTML*/
    let premiumplan = document.getElementById('premium')

    function buyplan2(event){
        localStorage.setItem('plan',premiumplan.value)
        console.log(localStorage.getItem('plan'))
        alert("Thank you for buying premium plan")
        location.reload();
    }

    premiumplan.addEventListener('click',buyplan2,false)

    if (localStorage.getItem('plan') == 'premium'){
        document.getElementById('premium').disabled = true
        document.getElementById('premium').removeAttribute('class')
    }else if (localStorage.getItem('plan') == 'deluxe'){
        document.getElementById('deluxe').disabled = true
        document.getElementById('deluxe').removeAttribute('class')
    }
}
