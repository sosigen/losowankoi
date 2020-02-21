/* wersja beta przemka
function generujnumerek2(){
    let liczbanumereków = document.getElementById("uczniowie").value
    var licz = Math.floor(Math.random() * liczbanumereków  )+1
    console.log(licz)    
    var liczmy = document.createElement("liczmy");
    liczmy.className = liczmy
    liczmy.innerText = "numerek to="+ licz
    document.body.appendChild(liczmy);
    }
*/
function losujUcznia() {
  document.querySelector("#wynik").innerHTML = "";
  let max = document.getElementById("uczniowie").value;
  const pytany = Math.round(Math.random() * max) + 1;
  stworzIkone(pytany, "#wynik");
}
