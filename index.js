"use strict";
const currentDate = new Date();
let puntuacion = 0;
const joke = {
    jok: 'exampleJoke',
    score: 0,
    date: currentDate,
};
const reportAcudits = [joke,];
const rank = (num) => {
    switch (num) {
        case 1:
            puntuacion = 1;
            break;
        case 2:
            puntuacion = 2;
            break;
        case 3:
            puntuacion = 3;
            break;
    }
};
const getJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
        let broma = data.joke;
        const element = document.querySelector('#mostrarAcudits');
        element.innerHTML = broma;
        const newJoke = {
            jok: broma,
            score: puntuacion,
            date: currentDate,
        };
        reportAcudits.push(newJoke);
        console.log(reportAcudits);
        console.log(data);
    })
        .catch(error => {
        // Handle any errors
        console.log('Error:', error);
    });
};
