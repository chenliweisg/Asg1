if (localStorage.session == 'false' || localStorage.session == null){
    document.getElementById('free').removeAttribute("href")
    document.getElementById('free').href = "login.html"
    document.getElementById('premium').removeAttribute("href")
    document.getElementById('premium').href = "pricing.html"
    document.getElementById('deluxe').removeAttribute("href")
    document.getElementById('deluxe').href = "pricing.html"   
}else{
    if (localStorage.getItem('plan') != 'premium' && localStorage.getItem('plan')!= 'deluxe'){
        document.getElementById('premium').removeAttribute("href")
        document.getElementById('premium').href = "pricing.html"
        document.getElementById('deluxe').removeAttribute("href")
        document.getElementById('deluxe').href = "pricing.html"
    }else if(localStorage.getItem('plan') != 'deluxe'){
        document.getElementById('deluxe').removeAttribute("href")
        document.getElementById('deluxe').href = "pricing.html"
    }
}