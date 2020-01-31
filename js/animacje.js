function generujIkony(grupy){
        $('#ikony').html('');
    
    for(let i=0; i<grupy.length; i++){
        for(let j=0; j<grupy[i].length; j++){
            stworzIkone(grupy[i][j], '#ikony')

        }
        przerwa()
    }
}
let stworzIkone = (numer, gdzie) =>{
    numer <= 9 ? numer = '0' + numer : null
    $('<div>').appendTo(gdzie)
    .addClass( 'ikonka icon-user-2 przejsciePrawo' )
    .append(`<span>${numer}</span>`)
    }

let przerwa = () => $('<div>').css("clear","both").appendTo('#ikony')

function alarm(){
    let divAlarmowy = '<div id="ostrzezenie" class="icon-attention"></div>'
    let tekst =  '<p>nieprawidłowe dane wejściowe</p>'
    let pojemnik = document.querySelector('#ikony')
    pojemnik.innerHTML = divAlarmowy
    //setTimeout(function(){alert('nieprawidłowe dane wejściowe')},500)
}

function jedyneczka(){
    $('div').text('1').addClass('jedynka').css({
        'font-size':'40px',
        'font-family':'"PT Mono", monospace'
    }).appendTo(document.body)
}
