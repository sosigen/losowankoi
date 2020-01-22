
function generujIkony(grupy){
    if(pojemnik.childNodes.length != 0){
        $('#ikony').html('');
    }
    
    for(let i=0; i<grupy.length; i++){
        for(let j=0; j<grupy[i].length; j++){
            stworzIkone(grupy[i][j])
        }
        przerwa()
    }
}


let stworzIkone = (numer) =>{
    numer <= 9 ? numer = '0'+numer : null
    $('<div>').appendTo('#ikony').addClass( 'ikonka icon-user-2' )
    .append(`<span>${numer}</span>`)
}
let przerwa = () => $('<div>').css("clear","both").appendTo('#ikony')