//funkcija proverava da li je korisnicko ime vec zauzeto i vraca True ili False u zavisnosti da li korisnik postoji ili ne  
function korisnikPostoji(){
    let lista = JSON.parse(window.localStorage.getItem("korisnici"));
    let username = document.getElementById("username").value;
    for(let korisnik of lista){
        if(username == korisnik.korisnickoIme){
            return true;
        }
    }
    return false;
}

//Funkcija za ucitavanje korisnika u listu korisnika(ukoliko je ta lista prazna)!
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
//Funkcija koja proverava da li je korisnik uneo sve podatke i da li su ti podaci tacni!
function proveriKorisnik(){
    let lista = JSON.parse(window.localStorage.getItem("korisnici"));
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let ime = document.getElementById("ime").value;
    let prezime = document.getElementById("prezime").value;
    let email = document.getElementById("email").value;
    try{
    if(!username || !password || !ime || !prezime || !email) throw "Svi podaci moraju biti popunjeni!";
    if (korisnikPostoji()) throw "Ovo korisnicko ime je vec zauzeto!";
    if (!mailValidan()) throw "Email nije pravilno upisan, pokusajte ponovo!";
    let noviKorisnik = {
        "ime" : ime,
        "prezime" : prezime,
        "lozinka" : password,
        "email" : email,
        "korisnickoIme" : username
    }
    lista.push(noviKorisnik);
    window.localStorage.setItem("korisnici",JSON.stringify(lista));
    window.location.href = "Login.html";
    
}catch(err){
    window.alert(err);
}   
}
//Funkcija koja proverava validnost email-a!
function mailValidan(){
    let mail = document.getElementById("email").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(mail.match(mailformat)){ 
        return true;
    }
    else{
        return false;
    }
}