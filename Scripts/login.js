function ucitavanjeKorisnika(){
    if(localStorage.getItem("korisnici")===null){
        let listaKorisnika = [
            {
                "ime": "Igor",
                "prezime": "Gasic",
                "lozinka": "123",
                "email": "giga.liman@gmail.com",
                "korisnickoIme": "Giga123"
            },{
                "ime": "Filip",
                "prezime": "Vj",
                "lozinka": "321",
                "email": "filip.liman@gmail.com",
                "korisnickoIme": "Filip321"
            }
        ];
        window.localStorage.setItem("korisnici",JSON.stringify(listaKorisnika));
    }
    izlogovanjeTrenutnogKorisnika = [];  
    window.localStorage.setItem("trenutniKorisnik",JSON.stringify(izlogovanjeTrenutnogKorisnika));
}
function proveriDaLiPostojiKorisnik(){
    let lista = JSON.parse(window.localStorage.getItem("korisnici"));
    let korisnickoIme = document.getElementById("username").value;
    let lozinka = document.getElementById("password").value;

    if(!korisnickoIme || !lozinka){
        alert("Sva polja moraju biti popunjena!");
        window.location.reload;
    }
    else{
        for(let korisnik of lista){
            if(korisnickoIme == korisnik.korisnickoIme && lozinka == korisnik.lozinka){
                let trenutniKorisnik = {
                    "ime": korisnik.ime,
                    "prezime": korisnik.prezime,
                    "lozinka": korisnik.lozinka,
                    "email": korisnik.email,
                    "korisnickoIme": korisnik.korisnickoIme};
                window.localStorage.setItem("trenutniKorisnik",JSON.stringify(trenutniKorisnik));
                window.location.href = "Projekat.html"
            }
            
        };
        alert("Korisnicko ime ili lozinka netacni!");
    }

}
