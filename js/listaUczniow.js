//funckja aktywowana przy zmianie wartosci range inputu, pokazuje wartosc ww. inputu
function wyswietl(wartosc, id) {
    document.getElementById(id).innerHTML = wartosc;
  }
let aktywni = []
let wyswietlListeUczniow = function(){
    let iloscUczniow = document.querySelector('#uczniowie').value
    let ikony = document.querySelector('#ikony')

    ikony.innerHTML = ''

    
    for(let i=1; i<=iloscUczniow; i++){
        stworzIkone(i,'#ikony')

    }
    let dzieci = ikony.childNodes
    for(let i=0; i<dzieci.length; i++){
        dzieci[i].addEventListener("click", function(){
            zmianaStanu(this)
        })
        dzieci[i].dataset.aktywnosc = 'on'
        aktywni.push(Number(dzieci[i].innerText))
    }
    

}
let zmianaStanu = (ikonka) => {
    let wyswietlacz = document.querySelector('#wyswietlUczniow')
    if(ikonka.dataset.aktywnosc === 'on'){
        ikonka.style.opacity = '0.3'
        ikonka.dataset.aktywnosc = 'off'
        aktywni.splice(aktywni.indexOf(Number(ikonka.innerText)), 1);
        wyswietl(Number(wyswietlacz.innerText)-1, 'wyswietlUczniow')
    }else if(ikonka.dataset.aktywnosc === 'off'){
        ikonka.style.opacity = '1'
        ikonka.dataset.aktywnosc = 'on'
        aktywni.push(Number(ikonka.innerText))
        wyswietl(Number(wyswietlacz.innerText)+1, 'wyswietlUczniow')
    }
}




/*
        let xy = pozycjaXY(dzieci[i])
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.id = i
        checkbox.style.zIndex = 999
        checkbox.style.opacity = 0.5
        checkbox.style.position = 'relative'
        checkbox.style.left = '-60%'
        dzieci[i].appendChild(checkbox)
        
        function pozycjaXY(element) { 
    var rect = element.getBoundingClientRect()
    return {'x':Math.round(rect.x), 'y':rect.y} 
} 
*/
