const API_URL = "https://majazocom.github.io/Data/games.json";

// hämta spelen från API:et
const fetchGames = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status code: ${response.status}`);
        }
        const data = await response.json();
        renderGamesToUI(data)
    } catch (error) {
        console.error('An error occured:', error);
    }
};

fetchGames();

const renderGamesToUI = (games) => {
    console.log(games);
    // nu vill jag rendera ett spel i taget till min html
    const gamesContainerEl = document.getElementById("games-container");
    games.forEach(game => {
        console.log(game);
        // skapa ett nytt element för vårt spel
        const gameContainerEl = document.createElement('article');
        // i min gamecontainerel vill jag ha en bild och en text
        const gameImg = document.createElement('img');
        gameImg.src = game.url;
        gameImg.alt = `${game.title} cover`;
        gameContainerEl.appendChild(gameImg);
        // titel-elementet
        const gameTitleEl = document.createElement("h2");
        gameTitleEl.innerText = game.title;
        gameContainerEl.appendChild(gameTitleEl);
        // nu lägger vi in det nya elementet i vår befintliga HTML
        gamesContainerEl.appendChild(gameContainerEl);
    });
};