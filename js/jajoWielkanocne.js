let idx = 0
let tekscik = ''
function jedyneczka(numer, innyNapis){
    if(screen.width > 1000){
    let divo = document.querySelector('#jajo')
    divo.innerText = ''
    idx = 0
    tekscik = ''
    let napis = ''
    if(numer != -1) napis = `Numer ${numer} dostanie dziś 1`
    else napis = innyNapis
    let pisanie = window.setInterval(function(){
            dodajZnak(napis, divo, pisanie)
    }, 200)
    } 
}
function dodajZnak(tekst, div, interval){
    if(idx==tekst.length) {
        window.clearInterval(interval)
        let pykanieKursora = window.setInterval(function(){
            kursor(div)
        }, 500)
        window.setTimeout(function(){
            window.clearInterval(pykanieKursora)
            jedyneczka(-1, 'Może chociaż 5- się uda?')
        },3000)
    }else{
        tekscik += tekst[idx]
        div.innerText = tekscik
        idx++
    }

}
function kursor(div){
    if(div.style.borderRight === '3px solid rgb(93, 73, 84)')
        div.style.borderRight = '3px solid transparent'
    else div.style.borderRight = '3px solid rgb(93, 73, 84)'
}
  