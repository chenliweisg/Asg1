let allcat = document.getElementById('all')
let cat1 = document.getElementById('prg')
let cat2 = document.getElementById('app')
let cat3 = document.getElementById('data')

let prg = document.getElementsByClassName('programming')
let data = document.getElementsByClassName('data')
let app = document.getElementsByClassName('app')


function showcat(event){
    /*display prg category*/
    for (let i = 0; i < prg.length; i++) {
        prg[i].hidden = false
    }
    /*hide data category*/
    for (let i = 0; i < data.length; i++) {
        data[i].hidden = false
    }

    /*hide app category*/
    for (let i = 0; i < app.length; i++) {
        app[i].hidden = false
    }
}
allcat.addEventListener('click',showcat,false)

function courseCategory(event){
    /*display prg category*/
    for (let i = 0; i < prg.length; i++) {
        prg[i].hidden = false
    }
    /*hide data category*/
    for (let i = 0; i < data.length; i++) {
        data[i].hidden = true
    }

    /*hide app category*/
    for (let i = 0; i < app.length; i++) {
        app[i].hidden = true
    }
}
cat1.addEventListener('click',courseCategory,false)

function courseCategory1(event){
    /*display prg category*/
    for (let i = 0; i < prg.length; i++) {
        prg[i].hidden = true
    }
    /*hide data category*/
    for (let i = 0; i < data.length; i++) {
        data[i].hidden = false
    }

    /*hide app category*/
    for (let i = 0; i < app.length; i++) {
        app[i].hidden = true
    }
}
cat2.addEventListener('click',courseCategory1,false)

function courseCategory2(event){
    /*display prg category*/
    for (let i = 0; i < prg.length; i++) {
        prg[i].hidden = true
    }
    /*hide data category*/
    for (let i = 0; i < data.length; i++) {
        data[i].hidden = true
    }

    /*hide app category*/
    for (let i = 0; i < app.length; i++) {
        app[i].hidden = false
    }
}
cat3.addEventListener('click',courseCategory2,false)




