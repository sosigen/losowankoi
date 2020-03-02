let litera = 0
let tekscik = ''
let numerTekstu = -1
let uczen = 0
function rozmowa(numer){
    uczen = numer
    let napisy = [`Numer ${numer} dostanie dziś 1`, `Może chociaż 3 się uda?`, `To 5- już tak na zachętę :)`, `powodzenia!`]
        let divo = document.querySelector('#jajo')
        if(divo.innerText.length > 0){
            let odpisanie =  window.setInterval(function(){
                usunZnak(divo, odpisanie)
            }, 200)
        }else if(++numerTekstu < napisy.length){
            litera = 0
            tekscik = ''
            let pisanie = window.setInterval(function(){
                dodajZnak(napisy[numerTekstu], divo, pisanie, uczen)
            }, 200)
        }
}
function dodajZnak(tekst, div, interval, uczen){
    if(litera==tekst.length) {
        window.clearInterval(interval)
        window.setTimeout(function(){
            rozmowa(uczen)
        },3000)
    }else{
        tekscik += tekst[litera++]
        div.innerText = tekscik
    }

}
function usunZnak(div, interval){
    if(div.innerText.length==0){
        window.clearInterval(interval)
        window.setTimeout(function(){
            rozmowa()
        },2000)
    }
    div.innerText = div.innerText.substring(0, div.innerText.length -1)
}


/*
function kursor(div){
    if(div.style.borderRight === '5px solid rgb(0, 0, 0)')
        div.style.borderRight = '5px solid transparent'
    else div.style.borderRight = '5px solid rgb(0, 0, 0)'
}
*/