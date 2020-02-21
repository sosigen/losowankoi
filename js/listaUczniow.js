let wyswietlListeUczniow = function(){
    let iloscUczniow = document.querySelector('#uczniowie').value
    let ikony = document.querySelector('#ikony')

    ikony.innerHTML = ''

    
    for(let i=1; i<=iloscUczniow; i++){
        stworzIkone(i,'#ikony')

    }
    let dzieci = ikony.childNodes
    console.log(dzieci.length)
    for(let i=0; i<dzieci.length; i++){
        dzieci[i].addEventListener("click", function(){
            zmianaStanu(this)
        })
        dzieci[i].dataset.aktywnosc = 'on'
    }
    

}
let zmianaStanu = (ikonka) => {
    if(ikonka.dataset.aktywnosc === 'on'){
        ikonka.style.opacity = '0.3'
        ikonka.dataset.aktywnosc = 'off'
    }else if(ikonka.dataset.aktywnosc === 'off'){
        ikonka.style.opacity = '1'
        ikonka.dataset.aktywnosc = 'on'
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
