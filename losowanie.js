//wylosowane grupy będą przechowywane w tej tablicy
//let gotoweGrupy = []

//funckja aktywowana przy zmianie wartosci range inputu, pokazuje wartosc ww. inputu
function wyswietl(wartosc, id){
    document.getElementById(id).innerHTML = wartosc
}

//stworzenie obiektu z użyciem konstruktora i dodanie go do tablicy
function generujGrupe(){
    //pobranie wartości inputów
    let warUczniowie = document.querySelector('#uczniowie').value
    let warGrupy = document.querySelector('#grupy').value

    if(Number(warUczniowie) > Number(warGrupy)){
        let grupa = new Grupa(warUczniowie,warGrupy)
        //gotoweGrupy.push(grupa);
        console.log(grupa);
        generujIkony(grupa.kompGrupy)

    }
    else{
        console.log('nieprawidlowe dane: za duży rozmiar grup')
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
        this.kompGrupy = []

         //tworzę tablicę dwuwymiarowa; jedna tablica na grupe
         for(let i=0; i<grupy.length; i++){
            grupy[i] = []
        }
        //sprawdzam czy grupa ma pożądaną długosć, jeśli tak potem 'wyjmę' ją
        //z tablicy roboczej i przełożę do 'gotowców'(this.kompGrupy)
        sprawdzGrupe = (grupa) =>{
                if(grupa.length == this.rozmiarGrup) return true
                else return false
            }
        
        //główna pętla przydzielająca
        for(let i=0; i<this.iloscUczniow; i++){
            //w przypadku gdy tablice zostaną zapełnione, a uczniowie nadal zostali,
            //losowo dodaje ich do gotowych grup
            if(grupy.length==0){
                let losGrupa = Math.floor(Math.random()*this.kompGrupy.length)
                let losIndeks = Math.floor(Math.random()*this.rozmiarGrup.length)
                this.kompGrupy[losGrupa].splice(losIndeks,0,i)
            }else{
                //losuję grupę dla ucznia
                let wybranaGrupa = Math.floor(Math.random()*grupy.length)
                //i dodaję go do niej
                grupy[wybranaGrupa].push(i+1)
            //przekładanie tablicy z obszaru roboczego do 'gotowców'
            if(sprawdzGrupe(grupy[wybranaGrupa])){
                this.kompGrupy.push(grupy[wybranaGrupa])
                grupy.splice(wybranaGrupa, 1)
            }

        }
    }
        //w przypadku gdy jakaś grupa 'zawierzuszyła', dodaje ją do gotowych
        while(grupy.length != 0){
            this.kompGrupy.push(grupy[0]);
            grupy.splice(0, 1)
        }

    }
    this.bilansujGrupy = function(){
        this.amplitudaGrup = function(){
            //najmniejsza grupa
            let najmniejszaGrupa = this.kompGrupy[0]
            for(let i=1; i<this.kompGrupy.length; i++){
                this.kompGrupy[i].length < najmniejszaGrupa.length ? najmniejszaGrupa = this.kompGrupy[i] : null
            }
            //najwieksza grupa
            let najwiekszaGrupa = this.kompGrupy[0]
            for(let i=1; i<this.kompGrupy.length; i++){
                this.kompGrupy[i].length > najwiekszaGrupa.length ? najwiekszaGrupa = this.kompGrupy[i] : null
            }
            
            return {najmniej: najmniejszaGrupa,
                    najwiecej: najwiekszaGrupa}
        }
        this.granice = this.amplitudaGrup()
        
        let najmnIndeks = this.kompGrupy.indexOf(this.granice.najmniej)
        let najwIndeks = this.kompGrupy.indexOf(this.granice.najwiecej)

       for(let i=0; i<this.granice.najwiecej.length - this.granice.najmniej.length; i++){
           this.kompGrupy[najmnIndeks].push(this.kompGrupy[najwIndeks][i])
           this.kompGrupy[najwIndeks].splice(i,1)
       }
        
    }
    
    this.przydzielGrupy()
    if(this.iloscUczniow%this.rozmiarGrup > 1) this.bilansujGrupy()
}
