
function stworzIkone(numer){
    let ikonka = document.createElement('i')
    ikonka.classList.add('ikonka','icon-user-2' )
    //dodaje 0, gdy liczba jest jednocyfrowa, by calosc byla bardziej symetryczna
    numer <= 9 ? ikonka.innerHTML = `<span>0${numer}</span>` : ikonka.innerHTML = `<span>${numer}</span>`
    document.getElementById('ikony').appendChild(ikonka)
}
function generujIkony(grupy){
    let pojemnik = document.getElementById('ikony')
    if(pojemnik.childNodes.length != 0){
        while (pojemnik.firstChild) {
            pojemnik.removeChild(pojemnik.firstChild);
          }
    }
    let ilosc = grupy.length
    for(let i=0; i<ilosc; i++){
        for(let j=0; j<grupy[i].length; j++){
            stworzIkone(grupy[i][j])
        }
        let enter = document.createElement('div')
        enter.style.clear = 'both';
        pojemnik.appendChild(enter)
    }
    setTimeout(function(){ 
        let ikonki = document.getElementsByClassName('ikonka')
        for(let i=0; i<ikonki.length; i++){
            ikonki[i].style.visibility = 'visible'
        }
    }, 1000);
}
