const currentDate: Date = new Date();

let puntuacion = 0;

interface Joke{
    jok: string,
    score: number,
    date: Date,
}

const joke: Joke = {
    jok: 'exampleJoke',
    score: 0,
    date: currentDate,
}

const reportAcudits = [joke,];

const rank = (num:number) =>{
    switch(num){
        case 1:
        puntuacion = 1;
        break
        case 2:
        puntuacion = 2;
        break;
        case 3:
        puntuacion = 3;
        break;
    }
}

window.onload = () => {
getWeather();
}

const getWeather = () =>{
  fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Barcelona?unitGroup=metric&include=days&key=8P93HLZRBQ4M5NL9HM4DYYMB5&contentType=json')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => {
    console.log('Error:', error);
  });
}




const getJoke = () => {
  getWeather();
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json', 
      }
    })
      .then(response => response.json())
      .then(data => {
        let broma: string = data.joke;
        
        const element = document.querySelector('#mostrarAcudits') as HTMLElement;
        element.innerHTML = broma;
        
        const newJoke: Joke = {
            jok: broma,
            score: puntuacion,
            date: currentDate,
        }
        reportAcudits.push(newJoke);
        console.log(reportAcudits);
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.log('Error:', error);
      });
  }
  

