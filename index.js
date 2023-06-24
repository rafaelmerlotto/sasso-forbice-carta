

const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const btn = document.querySelector('.btn');
const messaggio = document.querySelector('.messaggio')
const user1 = document.querySelector(".user1");
const user2 = document.querySelector(".user2");
const counter = document.querySelector('.counter');
const modale = document.querySelector('modal');
const giocaDiNuovo = document.querySelector('.giocaDiNuovo')
let punteggio1 = 0;
let punteggio2 = 0;

const body = document.body;
const party = new JSConfetti({ body });

btn.addEventListener('click', mossePossibile);
giocaDiNuovo.addEventListener('click', () => location.reload());

function mossePossibile() {
    const sceltePossibili = ['🪨', '📄', '✂️'];
    const mossa1 = sceltePossibili[Math.floor(Math.random() * sceltePossibili.length)];
    const mossa2 = sceltePossibili[Math.floor(Math.random() * sceltePossibili.length)];

    player1.innerText = mossa1;
    player2.innerText = mossa2;


    determinaVittoria(mossa1, mossa2);
}

function determinaVittoria(mossaPlayer1, mossaPlayer2) {
    if (
        (mossaPlayer1 === "📄" && mossaPlayer2 === "🪨") ||
        (mossaPlayer1 === "✂️" && mossaPlayer2 === "📄") ||
        (mossaPlayer1 === "🪨" && mossaPlayer2 === "✂️")
    ) {
        punteggio1++;
        if (punteggio1 === 3) {
            party.addConfetti();
            messaggio.innerText = `${user1.value.toUpperCase()} HA VINTO 🎉`
            body.classList.add('vittoria');
            modale.removeAttribute('hidden');
        }
    } else if (
        (mossaPlayer1 === "🪨" && mossaPlayer2 === "📄") ||
        (mossaPlayer1 === "📄" && mossaPlayer2 === "✂️") ||
        (mossaPlayer1 === "✂️" && mossaPlayer2 === "🪨")
    ) {
        punteggio2++;
        if (punteggio2 === 3) {
            party.addConfetti();
            messaggio.innerText = `${user2.value.toUpperCase()} HA VINTO 🎉`
            body.classList.add('vittoria');
            modale.removeAttribute('hidden');
        }
    }
    counter.innerText = `${user1.value} (${punteggio1} X ${punteggio2}) ${user2.value} `;

if(user1.value === "" && user2.value === ""){
    user1.value = "Player 1";
    user2.value = "Player 2";
}
}

