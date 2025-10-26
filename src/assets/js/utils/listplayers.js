async function loadplayer() {
document.addEventListener('DOMContentLoaded', () => { 
    const container = document.querySelector('.list-player');
    const newPlayer = document.createElement('div'); 
    newPlayer.classList.add('new-player');
    newPlayer.innerHTML = '<b>Test player</b>';
    container.appendChild(newPlayer);
});
}
loadplayer();

