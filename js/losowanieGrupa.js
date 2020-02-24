//stworzenie obiektu z użyciem konstruktora i dodanie go do tablicy
function generujGrupe() {
  //pobranie wartości inputów
  let uczniowie = []
  if(aktywni.length != 0) uczniowie = aktywni
  else{
    for(let i=1; i<=document.querySelector("#uczniowie").value; i++){
      uczniowie.push(i)
    }
  }
  let grupy = document.querySelector("#grupy").value;
  if(uczniowie.length > Number(grupy)){
    if (document.querySelector('label[for="grupy"]').innerText == "Ile grup?") {
      let grupa = new Grupa(uczniowie, (rozmiar = -1), (ilosc = grupy));
      console.log(grupa);
      generujIkony(grupa.kompGrupy);
    }else{
      let grupa = new Grupa(uczniowie, (rozmiar = grupy), (ilosc = -1));
      console.log(grupa);
      generujIkony(grupa.kompGrupy);
    }
  }else{
    alarm();
  }
}

//główny konstruktor tworzący grupy
function Grupa(uczniowie, rozmiar, ilosc) {
  this.uczniowie = uczniowie;
  //w zaleznosci od tego czy dostepny jest rozmiar, czy ilosc generuje
  //na tej podstawie resztę potrzebnych wartości
  if (rozmiar == -1) {
    this.iloscGrup = Number(ilosc);
    this.rozmiarGrup = Math.round(
      this.uczniowie.length / Number(this.iloscGrup)
    );
   console.log("ilosc " + this.iloscGrup, "rozmiar " + this.rozmiarGrup);
  }
  if (ilosc == -1) {
    this.rozmiarGrup = Number(rozmiar);
    this.iloscGrup = Math.round(this.uczniowie.length / this.rozmiarGrup);
    console.log("rozmiar " + this.rozmiarGrup, "ilosc " + this.iloscGrup);
  }

  this.przydzielGrupy = function() {
    //tablica robocza w której znajdują się tablice poszczególnych grup
    let grupy = new Array(this.iloscGrup);
    this.kompGrupy = [];

    //tworzę tablicę dwuwymiarowa; jedna tablica na grupe
    for (let i = 0; i < grupy.length; i++) {
      grupy[i] = [];
    }

    //funkcja sprawdza czy grupa ma pożądaną długosć, jeśli tak potem 'wyjmę' ją
    //z tablicy roboczej i przełożę do 'gotowców' (this.kompGrupy)
    sprawdzGrupe = grupa => {
      if (grupa.length == this.rozmiarGrup) return true;
      else return false;
    };

    //główna pętla przydzielająca
    //i = numer ucznia, dlatego zaczynam od 1
    for (let i = 0; i <this.uczniowie.length; i++) {
      //w przypadku gdy tablice zostaną zapełnione, a uczniowie nadal zostali,
      //losowo dodaje ich do gotowych grup
      if (grupy.length == 0) {
        let losGrupa = Math.floor(Math.random() * this.kompGrupy.length);
        this.kompGrupy[losGrupa].splice(-1, 0, this.uczniowie[i]);
      } else {
        //losuję grupę dla ucznia
        let wybranaGrupa = Math.floor(Math.random() * grupy.length);
        //dodaję go do niej
        grupy[wybranaGrupa].push(this.uczniowie[i]);
        //przekładanie tablicy z obszaru roboczego do gotowej listy
        if (sprawdzGrupe(grupy[wybranaGrupa])) {
          this.kompGrupy.push(grupy[wybranaGrupa]);
          grupy.splice(wybranaGrupa, 1);
        }
      }
    }
    //w przypadku gdy grupa nie ma pożądanej długości, lecz pętla
    //zakończyła swe działanie, dodaje ją do gotowej listy
    while (grupy.length != 0) {
      this.kompGrupy.push(grupy.pop());
    }
  }
  //gdy liczba uczniow nie jest podzielna przez rozmiar grup, konieczne jest zbilansowanie
  this.bilansujGrupy = function() {
    //funkcja znajduje najmniejszą i najwieksza grupę
    this.amplitudaGrup = function() {
      //najmniejsza grupa
      let najmniejsza = this.kompGrupy[0];
      for (let i = 1; i < this.kompGrupy.length; i++) {
        this.kompGrupy[i].length < najmniejsza.length
          ? (najmniejsza = this.kompGrupy[i])
          : null;
      }
      //najwieksza grupa
      let najwieksza = this.kompGrupy[0];
      for (let i = 1; i < this.kompGrupy.length; i++) {
        this.kompGrupy[i].length > najwieksza.length
          ? (najwieksza = this.kompGrupy[i])
          : null;
      }

      return { najmniej: najmniejsza, najwiecej: najwieksza };
    };
    //zapisuje wynik funkcji do zmiennej
    let granice = this.amplitudaGrup();
    //this.granice = this.amplitudaGrup();
    let najmnIndeks = this.kompGrupy.indexOf(granice.najmniej);
    let najwIndeks = this.kompGrupy.indexOf(granice.najwiecej);
    //pętla oblicza różnicę między najmniejszą a najwiekszą grupą,
    //odejmuje od niej 1 i zabiera ww. różnicę z największej grupy i dodaje do najmniejszej
    for (
      let i = 0;
      i < granice.najwiecej.length - granice.najmniej.length;
      i++
    ) {
      let wyjety = this.kompGrupy[najwIndeks].pop();
      this.kompGrupy[najmnIndeks].push(wyjety);
    }
  };
  //wywolanie glownej metody
  this.przydzielGrupy();
  //wywolywanie bilansu nie zawsze jest potrzebne
  if (this.uczniowie.length % this.rozmiarGrup > 1) this.bilansujGrupy();
}
