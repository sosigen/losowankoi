function generujIkony(grupy){
        $('#ikony').html('');
    
    for(let i=0; i<grupy.length; i++){
        for(let j=0; j<grupy[i].length; j++){
            opoznienie(stworzIkone(grupy[i][j]), i+j)

        }
        przerwa()
    }
}
let stworzIkone = (numer) =>{
    numer <= 9 ? numer = '0' + numer : null
    $('<div>').appendTo('#ikony')
    .addClass( 'ikonka icon-user-2' )
    .append(`<span>${numer}</span>`)
    }

let przerwa = () => $('<div>').css("clear","both").appendTo('#ikony')
let opoznienie = (funkcja, czas) => setTimeout(funkcja, 1000)

function alarm(){
    let divAlarmowy = '<div id="ostrzezenie" class="icon-attention"></div>'
    let tekst =  '<p>nieprawidłowe dane wejściowe</p>'
    let pojemnik = document.querySelector('#ikony')
    pojemnik.innerHTML = divAlarmowy
    setTimeout(function(){alert('nieprawidłowe dane wejściowe')},500)
}