

const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');

let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredChar = hpCharacters.filter((character) => {
        return character.title.toLowerCase().includes(searchString)  });

    displayCharacters(filteredChar);

});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://api.sampleapis.com/movies/comedy');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    }
    catch (err) {
        console.error(err);
    }
};


const displayCharacters = (characters) => {
    const htmlString = characters.map((character) => {
        return ` <li class="character">
                    <h2>${character.title}</h2>
                    <img src="${character.posterURL}"></img>
              </li>`;
    }).join('');

    charactersList.innerHTML= htmlString;


};

loadCharacters();