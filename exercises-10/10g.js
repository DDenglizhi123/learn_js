const gamingButton = document.querySelector('.gaming');
const musicButton = document.querySelector('.music');
const techButton = document.querySelector('.tech');

function switchButton(category){
    if (category === 'gaming') {
        if (gamingButton.classList.contains('toggled')) {
            gamingButton.classList.remove('toggled');
            musicButton.classList.remove('toggled');
            techButton.classList.remove('toggled');
        }else {
            gamingButton.classList.add('toggled');
            musicButton.classList.remove('toggled');
            techButton.classList.remove('toggled');
        }
    }
}