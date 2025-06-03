'use strict';

document.getElementById("p1").innerHTML = new Date();

let message='Warning: If you go on this page, you will see the hour.'

alert(message);

let entered_code = prompt('Entrer le mot de passe.');

if (entered_code == "admin") {
  alert("C'est correct.")
}
else {
  alert("C'est faux.")
} 