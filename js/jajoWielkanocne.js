let litera = 0
let tekscik = ''
let numerTekstu = 0
let interwaly = []
function rozmowa(){
    for(let i=0; i<interwaly.length; i++) window.clearInterval(interwaly[i])
    let divo = document.querySelector('#jajo')
    divo.innerText = ''
    let napisy = [`Ktoś tu dostanie dziś 1`, `Może chociaż 3 się uda?`, `To 5- już tak na zachętę :)`, `powodzenia!`]
        if(divo.innerText.length > 0){
            let odpisanie =  window.setInterval(function(){
                usunZnak(divo, odpisanie)
            }, 200)
            interwaly.push(odpisanie)
        }else if(numerTekstu++ <= napisy.length){
            litera = 0
            tekscik = ''
            let pisanie = window.setInterval(function(){
                dodajZnak(napisy[numerTekstu], divo, pisanie)
            }, 200)
            interwaly.push(pisanie)
            if(numerTekstu==napisy.length) numerTekstu = 0
        }
}
function dodajZnak(tekst, div, interval){
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