const jokeDiv = document.querySelector('.jokes');
const options = document.querySelectorAll('.options');
const generate = document.getElementById('generate');
const darkMode = document.getElementById('dark-mode');
const body = document.getElementsByTagName('body')[0];
console.log(body);

let jokeType = "Any";
options.forEach(ele => {
    ele.addEventListener('click', event => jokeType = event.target.innerText)
});

async function generateJoke() {
    jokeDiv.innerHTML = "LOADING. . . . .";
    const response = await fetch(`https://v2.jokeapi.dev/joke/${jokeType}`);
    const data = await response.json();
    document.getElementById('type').innerHTML = data.category;
    jokeDiv.innerHTML = "";
    if (data.type === "twopart") {
        let div = `
            <p>${data.setup}</p>
            <p>${data.delivery}</p>
        `;
        jokeDiv.innerHTML += div;
    }
    else {
        jokeDiv.innerHTML += `${data.joke}`;
    }
}

generate.addEventListener('click', generateJoke);

document.getElementById('dark-mode').addEventListener('click', () => {
    body.classList.toggle('active');
    
})