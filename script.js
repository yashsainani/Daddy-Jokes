const jokeDiv = document.querySelector('.jokes');
const generate = document.getElementById('generate');
const darkMode = document.getElementById('dark-mode');

async function generateJoke() {
    jokeDiv.innerHTML = "LOADING. . . . .";
    const response = await fetch('https://v2.jokeapi.dev/joke/dark');
    const data = await response.json();
    jokeDiv.innerHTML = "";
    if (data.type === "twopart") {
        let div = `
            <p>${data.setup}</p>
            <p>${data.delivery}💀💀</p>
        `;
        jokeDiv.innerHTML += div;
    }
    else {
        jokeDiv.innerHTML += `${data.joke}💀💀`;
    }
}

generate.addEventListener('click', generateJoke);