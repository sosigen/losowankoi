function generujnumerek(){
    let liczbanumereków = document.getElementById("uczniowie").value
    var licz = Math.floor(Math.random() * liczbanumereków  )+1
    console.log(licz)    
    var liczmy = document.createElement("liczmy");
    liczmy.className = liczmy
    liczmy.innerText = "numerek to="+ licz
    document.body.appendChild(liczmy);
    }