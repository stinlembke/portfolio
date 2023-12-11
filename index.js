

//change greeting on home page based on time of day

    let date = new Date();
let time = date.getHours();
console.log(time)

let greeting = document.getElementById('greeting');  
    
    if (time < 12) {
        greeting.innerText = "Good Morning!"
    } else if (time > 12 && time < 18) {
        greeting.innerText = "Good afternoon!"
    } else {
        greeting.innerText = "Good evening."
    }

//button that changes color scheme to dark

const button = document.getElementById('headerDecor')

button.addEventListener('click', () => {
    let decor = document.getElementById('decor')
    if (document.body.classList.contains('darkmode')) {
        document.body.classList.remove('darkmode')
        decor.src = "images/bigSquareDecor.png";
    } else {
        document.body.classList.add('darkmode')
        decor.src = "images/biggraphicdarkmode.png";
    }
  // Check if the class exists on the element;
  // if it does, remove it
  // otherwise, add it.
});