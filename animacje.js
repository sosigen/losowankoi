
/*function stworzIkone(numer){
    let ikonka = document.createElement('i')
    ikonka.classList.add('ikonka','icon-user-2' )
    //dodaje 0, gdy liczba jest jednocyfrowa, by calosc byla bardziej symetryczna
    numer <= 9 ? ikonka.innerHTML = `<span>0${numer}</span>` : ikonka.innerHTML = `<span>${numer}</span>`
    document.getElementById('ikony').appendChild(ikonka)
}*/
function generujIkony(grupy){
    if(pojemnik.childNodes.length != 0){
        while (pojemnik.firstChild) {
            pojemnik.removeChild(pojemnik.firstChild);
          }
    }
    for(let i=0; i<grupy.length; i++){
        for(let j=0; j<grupy[i].length; j++){
            stworzIkone(grupy[i][j])
        }
        przerwa()
        /*let enter = document.createElement('div')
        enter.style.clear = 'both';
        pojemnik.appendChild(enter)*/
    }
}


let stworzIkone = (numer) =>{
    numer <= 9 ? numer = '0'+numer : null
    $('<div>').appendTo('#ikony').addClass( 'ikonka icon-user-2' )
    .append(`<span>${numer}</span>`)
}
let przerwa = () => $('<div>').css("clear","both").appendTo('#ikony')
