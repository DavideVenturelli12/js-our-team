//debug
console.log('JS OK!');

/*
Viene fornito un layout di base in cui è presente * una card di esempio * inserita staticamente 
nell’html.Questa card serve solo come timbro del markup necessario per ottenere il risultato 
finale e * dovrà quindi essere rimossa dall’html *.
Aggiungere un file js in cui definire * un array di oggetti * che rappresentano i membri del 
team.Ogni membro ha le informazioni necessarie per stampare la relativa card: * nome, Ruolo e Foto *.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente 
nell'html, stampare dinamicamente una card per ogni membro del team.
*/

//recupero gli elementi dal file HTML
const teamContainer = document.querySelector(".team-container");

//Array di oggetti che contiene i membri del team.
const team = [
    {
        img: "wayne-barnett-founder-ceo.jpg",
        Role: "Founder CEO",
        name: "Wayne Barnett",
    },
    {
        img: "walter-gordon-office-manager.jpg",
        Role: "Office Manager",
        name: "Walter Gordon",
    },
    {
        img: "scott-estrada-developer.jpg",
        Role: "Developer",
        name: "Scott Estrada",
    },
    {
        img: "barbara-ramos-graphic-designer.jpg",
        Role: "Graphic Designer",
        name: "Barbara Ramos",
    },
    {
        img: "angela-lopez-social-media-manager.jpg",
        Role: "Social Media Menager",
        name: "Angela Lopez",
    },
    {
        img: "angela-caroll-chief-editor.jpg",
        Role: "Chief Editor",
        name: "Angela Caroll",
    },
];

createCard();

//creo una funzione per la creazione delle card dei membri
function createCard() {
    for (let i = 0; i < team.length; i++) {
        let member = team[i];

        //console.log(member);

        //creo il contenitore memberCard
        let memberCard = document.createElement("div");

        //creo e aggiungo la classe "member-card" all'interno di team-container nell'HTML
        memberCard.className = "member-card";
        teamContainer.append(memberCard);

        //creo il contenitore per l'immagine
        let imgContainer = document.createElement("div");

        //creo eaggiungo la classe "card-image" all'interno di team-container nell'HTML
        imgContainer.className = "card-image";
        memberCard.append(imgContainer);

        //creo il contenitore l'immagine (creando il tag img)
        let img = document.createElement("img");

        //inserisco la ricerca dell'immagine
        img.src = 'img/' + member.img;
        img.alt = member.name;

        //aggiungo l'immagine nel suo contenitore
        imgContainer.append(img);

        //creo il contenitore per il testo
        let cardText = document.createElement("div");

        //creo e aggiungo la classe "card-image" all'interno di team-container nell'HTML
        cardText.className = "card-text";
        memberCard.append(cardText);

        //creo un h3 per il nome del membro del team
        let nameMember = document.createElement("h3");

        //inserisco il nome all'interno dell'HTML
        nameMember.innerText = member.name;
        cardText.append(nameMember);

        //creo un p per il ruolo del membro del team
        let cardRole = document.createElement("p");

        //inserisco il ruolo all'interno dell'HTML
        cardRole.innerText = member.Role;
        cardText.append(cardRole);
    }
}



