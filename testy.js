function najwiekszaRoznica(){
    let najRoznica = {'roznica':0,'uczen':0,'grupa':0}
    for(let i=2; i<11; i++){
        for(let j=4; j<41; j++){
            if(j<i) continue;
            let grupa = new Grupa(j,i)
            let roznica = grupa.granice.najwiecej.length - grupa.granice.najmniej.length
            //console.log(grupa.granice.najwiecej.length + ' - ' + grupa.granice.najmniej.length)
            roznica > najRoznica.roznica ? najRoznica = {'roznica':roznica,'uczen':j,'grupa':i} : console.log('_')
            console.log(najRoznica.roznica)
            
        }
    }
    return najRoznica
}
//najwieksza roznica to 5 dla 25 uczniow i grup 10 osobowych
//kod nie zwraca błędu dla żadnej wartości z zakresu
///uff
//console.log(najwiekszaRoznica())