const nume = document.getElementById('nume');
const prenume = document.getElementById('prenume');
const email = document.getElementById('email');
const nrtelefon = document.getElementById('nrtelefon');
const scrisoare = document.getElementById('scrisoare');
const data = document.getElementById('data');

const form = document.getElementById('form');
const eroare = document.getElementById('eroare');

form.addEventListener('submit', (e) => {
    let mesaje = [];
    
    // Validare nume
    if(nume.value === '' || nume.value == null){
        mesaje.push('Introduceți nume.');
    }
    if(nume.value.length < 2){
        mesaje.push("Numele trebuie să aibă minim 2 caractere.");
    }

    // Validare prenume
    if(prenume.value === '' || prenume.value == null){
        mesaje.push('Introduceți prenume.');
    }
    if(prenume.value.length < 2){
        mesaje.push("Prenumele trebuie să aibă minim 2 caractere.");
    }
    
    // Validare format email
    if(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) == null){
        mesaje.push('Adresă de mail invalidă.')
    }

    // Validare nr telefon
    if(nrtelefon.value.length != 10){
        mesaje.push('Nr telefon invalid.');
    }

    // Validare scrisoare de intentie
    if(scrisoare.value.length < 100){
        mesaje.push('Scrisoarea de intenție prea scurtă.');
    }
    if(scrisoare.value.length > 500){
        mesaje.push('Scrisoarea de intenție prea lungă.');
    }

    // Validare data: sa fie mai tarziu de ziua de azi
    var dataIntrodusa = new Date(data.value);
    var dataDeAzi = new Date();
    if(dataIntrodusa.setHours(0,0,0,0) < dataDeAzi.setHours(0,0,0,0)){
        mesaje.push('Dată de începere invalidă.');
    }
    if(data.value === '' || data.value == null){
        mesaje.push('Introduceți data de începere.');
    }

    // Scriere erori
    if(mesaje.length > 0){
        e.preventDefault();
        eroare.innerText = mesaje.join('\n ');
    }
})