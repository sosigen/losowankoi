//wylosowane grupy będą przechowywane w tej tablicy
let gotoweGrupy = []

//funckja aktywowana przy zmianie wartosci range inputu, pokazuje wartosc ww. inputu
function wyswietl(wartosc, id){
    document.getElementById(id).innerHTML = wartosc
}

//stworzenie obiektu z użyciem konstruktora i dodanie go do tablicy
function generujGrupe(){
    //pobranie wartości inputów
    let wartoscUczniowie = document.querySelector('#uczniowie').value
    let wartoscGrupy = document.querySelector('#grupy').value

    if(Number(wartoscUczniowie) > Number(wartoscGrupy)){
        let grupa = new Grupa(wartoscUczniowie,wartoscGrupy)
        gotoweGrupy.push(grupa);
        console.log(gotoweGrupy);
    }
    else{
        document.write('co ty odpierdalasz');
    }
}

//główny konstruktor tworzący grupy
function Grupa(uczniowie, grupy){

    this.iloscUczniow = uczniowie
    this.rozmiarGrup = grupy
    
    this.przydzielGrupy = function(){
        this.iloscGrup = Math.round(this.iloscUczniow/this.rozmiarGrup)
        //tablica robocza w której znajdują się tablice poszczególnych grup
        let grupy = new Array(this.iloscGrup)
        this.kompletneGrupy = []

        //sprawdzam czy grupa ma pożądaną długosć, jeśli tak potem 'wyjmę' ją
        //z tablicy roboczej i przełożę do 'gotowców'(this.kompletneGrupy)
        sprawdzGrupe = (grupa) =>{
                if(grupa.length == this.rozmiarGrup) return true
                else return false
            }
        
        //tworzę tablicę kwadratową; każda dla jednej grupy
        for(let i=0; i<grupy.length; i++){
            grupy[i] = []
        }
        //główna pętla przydzielająca
        for(let i=0; i<this.iloscUczniow; i++){
            //w przypadku gdy tablice zostaną zapełnione, a uczniowie nadal zostali,
            //losowo dodaje ich do gotowych grup
            if(grupy.length==0){
                let losGrupa = Math.floor(Math.random()*this.kompletneGrupy.length)
                let losIndeks = Math.floor(Math.random()*this.rozmiarGrup.length)
                this.kompletneGrupy[losGrupa].splice(losIndeks,0,i)
            }else{
                //losuję grupę dla ucznia
                let wybranaGrupa = Math.floor(Math.random()*grupy.length)
                //i dodaję go do niej
                grupy[wybranaGrupa].push(i+1)
            //przekładanie tablicy z obszaru roboczego do 'gotowców'
            if(sprawdzGrupe(grupy[wybranaGrupa])){
                this.kompletneGrupy.push(grupy[wybranaGrupa])
                grupy.splice(wybranaGrupa, 1)
            }

        }
    }
        //w przypadku gdy jakaś grupa 'zawierzuszyła', dodaje ją do gotowych
        while(grupy.length != 0){
        if(grupy.length > 0) {
            this.kompletneGrupy.push(grupy[0]);
            grupy.splice(0, 1)
        }
    }
        return grupy
        
    
}
    this.bilansujGrupy = function(){
        this.amplitudaGrup = function(){
            //najmniejsza grupa
            let najmniejszaGrupa = this.kompletneGrupy[0]
            for(let i=1; i<this.kompletneGrupy.length; i++){
                this.kompletneGrupy[i].length < najmniejszaGrupa.length ? najmniejszaGrupa = this.kompletneGrupy[i] : null
            }
            //najwieksza grupa
            let najwiekszaGrupa = this.kompletneGrupy[0]
            for(let i=1; i<this.kompletneGrupy.length; i++){
                this.kompletneGrupy[i].length > najwiekszaGrupa.length ? najwiekszaGrupa = this.kompletneGrupy[i] : null
            }
            
            return {najmniej: najmniejszaGrupa,
                    najwiecej: najwiekszaGrupa}
        }
        this.granice = this.amplitudaGrup()
        
        let najmniejszyIndeks = this.kompletneGrupy.indexOf(this.granice.najmniej)
        //for
        /*
            for(let i=0; i<this.kompletneGrupy[najmniejszyIndeks].length; i++){
                console.log(i+'%'+this.kompletneGrupy.length)
                this.kompletneGrupy[i%this.kompletneGrupy.length].push(this.kompletneGrupy[najmniejszyIndeks][i])
                this.kompletneGrupy[najmniejszyIndeks].splice(i,1)

            }
            */
        //while
        let i=0
        while(this.kompletneGrupy[najmniejszyIndeks].length != 0){
            //console.log(i+'%'+this.kompletneGrupy.length)
            if(i != najmniejszyIndeks){
            this.kompletneGrupy[i%this.kompletneGrupy.length].push(this.kompletneGrupy[najmniejszyIndeks][i])
            this.kompletneGrupy[najmniejszyIndeks].splice(i,1)
            }
            i++
        }

        
    }
    
    this.przydzielGrupy()
    if(this.iloscUczniow%this.rozmiarGrup > 1) this.bilansujGrupy()
}
