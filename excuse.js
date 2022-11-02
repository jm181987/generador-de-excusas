let who = ['Mi perra', 'Mi esposa', 'Mi hija', 'mi gato'];
let what = ['se comió mi tarea', 'escondió mi tarea', 'lanzó por la ventana mis llaves', 'rompió mi auto'];
let when = ['cuando entre a google meet', 'justo en este momento', 'cuando estaba por salir', 'mientras cocinaba'];

let whoRandom = Math.floor(Math.random() * who.length );
let whatRandom = Math.floor(Math.random() * what.length);
let whenRandom = Math.floor(Math.random() * when.length);

let frase = who[whoRandom] + " " + what[whatRandom] + " " + when[whenRandom];

document.querySelector("#excuse").innerHTML = frase;
