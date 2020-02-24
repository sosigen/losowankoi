function najwiekszaRoznica(){
    let najRoznica = {'roznica':0,'uczen':0,'grupa':0}
    let rekord = 0
    let zbior = []
    for(let i=2; i<9; i++){
        for(let j=4; j<41; j++){
            if(j<i) continue;
            let uczniaki = []
            for(let k=0; k<j; k++){
                uczniaki.push(i)
            }
            let grupa = new Grupa(uczniaki,(rozmiar = -1), (ilosc = i))
            //if(j%i > 1){
            
            //let roznica = grupa.granice.najwiecej.length - grupa.granice.najmniej.length
            //console.log(grupa.granice.najwiecej.length + ' - ' + grupa.granice.najmniej.length)
            //roznica > najRoznica.roznica ? najRoznica = {'roznica':roznica,'uczen':j,'grupa':i} : console.log('_')
            //console.log(najRoznica.roznica)
            let rekord = amplituda(grupa.kompGrupy)
            if(rekord > 2) {
                najRoznica = {'roznica':rekord,'uczen':j,'grupa':i}
                zbior.push(najRoznica)
                
            }

                
            }
            
        //}
    }
    return zbior
}
function amplituda(grupy){
    let najwieksza = grupy[0]
    for(let i=1; i<grupy.length; i++){
        if(grupy[i]>najwieksza) najwieksza = grupy[i]
    }
    let najmniejsza = grupy[0]
    for(let i=1; i<grupy.length; i++){
        if(grupy[i]<najmniejsza) najmniejsza = grupy[i]
    }
    return najwieksza.length - najmniejsza.length
}
//kod nie zwraca błędu dla żadnej wartości z zakresu
///uff
//console.log(najwiekszaRoznica())