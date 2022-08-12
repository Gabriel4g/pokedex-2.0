const imgPokemons = document.querySelectorAll(".img");

const searchPokemons = document.querySelector("#search-pokemons");
const input = document.querySelector("#input");
const imgPokemonChosen = document.querySelector("#img-pokemon");
const containerCards = document.querySelector("#container");
const cardPokemonChosen = document.querySelector("#pokemon-select");
const buttonBack = document.querySelector("#back");
const cards = document.querySelectorAll(".cards-pokemons");
const pokemonName = document.querySelector("#name-pokemon");
const statHP = document.querySelector(".hp");
const statID = document.querySelector(".id");
const statHeight = document.querySelector(".height");
const statWeight = document.querySelector(".weight");

const firstPokemon = document.querySelector(".pokemonOne");
const pokemonSecond = document.querySelector(".pokemonSecond");
const threePokemon = document.querySelector(".pokemonThree");
const fourPokemon = document.querySelector(".pokemonFour");
const fivePokemon = document.querySelector(".pokemonFive");
const sixPokemon = document.querySelector(".pokemonSix");
const sevenPokemon = document.querySelector(".pokemonSeven");
const eightPokemon = document.querySelector(".pokemonEight");
const ninePokemon = document.querySelector(".pokemonNine");
const tenPokemon = document.querySelector(".pokemonTen");
const elevenPokemon = document.querySelector(".pokemonEleven");
const twelvePokemon = document.querySelector(".pokemonTwelve");
const thirteenPokemon = document.querySelector(".pokemonThirteen");
const fourTeen = document.querySelector(".pokemonFourTeen");
const fifteenPokemon = document.querySelector(".pokemonFifteen")

// fun
input.addEventListener('click', () => {
    input.placeholder = "Gabriel é gostoso"
    return;
})

async function renderOnePokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();

    firstPokemon.style.height = "70%";
    firstPokemon.style.width = "70%"
    firstPokemon.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

async function renderSecondPokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();
    pokemonSecond.style.height = "70%";
    pokemonSecond.style.width = "70%"
    pokemonSecond.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

async function renderThreePokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();
    threePokemon.style.height = "70%";
    threePokemon.style.width = "70%"
    threePokemon.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

async function renderFourPokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();
    fourPokemon.style.height = "70%";
    fourPokemon.style.width = "70%"
    fourPokemon.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

async function renderFivePokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();
    fivePokemon.style.height = "70%";
    fivePokemon.style.width = "70%"
    fivePokemon.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

async function renderSixPokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();
    sixPokemon.style.height = "70%";
    sixPokemon.style.width = "70%"
    sixPokemon.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

async function renderSevenPokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();
    sevenPokemon.style.height = "70%";
    sevenPokemon.style.width = "70%"
    sevenPokemon.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

async function renderEightPokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();
    eightPokemon.style.height = "70%";
    eightPokemon.style.width = "70%"
    eightPokemon.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

async function renderNinePokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();
    ninePokemon.style.height = "70%";
    ninePokemon.style.width = "70%"
    ninePokemon.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

async function renderTenPokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();
    tenPokemon.style.height = "70%";
    tenPokemon.style.width = "70%"
    tenPokemon.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

async function renderElevenPokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();
    elevenPokemon.style.height = "70%";
    elevenPokemon.style.width = "70%"
    elevenPokemon.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

async function renderTwelvePokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();
    twelvePokemon.style.height = "70%";
    twelvePokemon.style.width = "70%"
    twelvePokemon.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

async function renderThirteenPokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();
    thirteenPokemon.style.height = "70%";
    thirteenPokemon.style.width = "70%"
    thirteenPokemon.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

async function renderFourteenPokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();
    fourTeen.style.height = "70%";
    fourTeen.style.width = "70%"
    fourTeen.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

async function renderFifteenPokemon(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();

    fifteenPokemon.style.height = "70%";
    fifteenPokemon.style.width = "70%"
    fifteenPokemon.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

renderOnePokemon("1");
renderSecondPokemon("2");
renderThreePokemon("3");
renderFourPokemon("4");
renderFivePokemon("5");
renderSixPokemon("6");
renderSevenPokemon("7");
renderEightPokemon("8");
renderNinePokemon("9");
renderTenPokemon("10");
renderElevenPokemon("11");
renderTwelvePokemon("12");
renderThirteenPokemon("13");
renderFourteenPokemon("14");
renderFifteenPokemon("15");

async function getPokemons(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();

    imgPokemons.forEach((el) => {
        el.style.height = "70%"
        el.style.width = "70%"
        el.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
    })

    cards.forEach((el, prop) => {
        prop += 1
        const numberPokemons = document.createElement("h2");
        numberPokemons.innerHTML = '#0' + prop
        numberPokemons.classList.add("styleH2")
        el.appendChild(numberPokemons)
    })

}

async function getPokemonChosen(pokemon) {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();

    statHP.innerHTML = data['stats']['base_stat']

    data.stats.forEach((el) => {
        statHP.innerHTML = `HP: ${el.base_stat}`;
        statID.innerHTML = `ID: ${data.id}`;
        statHeight.innerHTML = `Height: ${data.height}`;
        statWeight.innerHTML = `Weight: ${data.weight}`;
    })

    pokemonName.innerHTML = data.name.toUpperCase();

    imgPokemonChosen.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
}

getPokemons("charizard")

searchPokemons.addEventListener("click", (event) => {
    event.preventDefault();

    if (input.value.trim() != "") {
        containerCards.classList.add("noneDisplay");
        cardPokemonChosen.style.display = "flex"

        getPokemonChosen(input.value.toLowerCase())
        input.value = ""
    }

})

buttonBack.addEventListener("click", () => {
    cardPokemonChosen.style.display = "none";
    containerCards.classList.toggle("noneDisplay");
    return;
})