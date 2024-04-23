let userName = "";
let userSurname = "";
let favouriteColor = "";

userName = prompt("Inserisci il tuo nome");
userSurname = prompt("Inserisci il tuo cognome");
favouriteColor = prompt("Inserisci il tuo colore preferito");

document.getElementById("userPassword").innerText = `${userName}${userSurname}${favouriteColor}`;

console.log(`La password e: ${userName}${userSurname}${favouriteColor}`);

let randomNumber = Math.floor(Math.random() * 100);

document.getElementById("randomNumber").innerText += randomNumber;