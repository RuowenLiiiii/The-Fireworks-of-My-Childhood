const leftDialog = document.getElementById('left-dialog');
const rightDialog = document.getElementById('right-dialog');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const dialogBoxLeft = document.getElementById('dialog-box-left');
const dialogBoxRight = document.getElementById('dialog-box-right');

const dialogText = [
    'I really want to see fireworks again.',
    'What kind of fireworks?',
    'The ones from my childhood.',
    'I think the fireworks in my memory are the ones from my childhood.',
    'Its been a long time since we last set off fireworks.',
    'Me too, ever since they banned fireworks.',
    'Yeah, it seems like my childhood ended with that too.',
    'Me too.',
    'For me, fireworks have three stages.',
    '?',
    'Anticipation, joy, and solitude.',
    'Yeah, I always look forward to the fireworks on early mornings at the end of each year.',
    'Seeing them makes me so happy, Im lost for words.',
    'Is it because of the loneliness when the fireworks go out?',
    'Yes.',
    'That is just like life.',
];


let currentIndex = 0;

leftButton.addEventListener('click', () => {
    if (currentIndex < dialogText.length) {
        leftDialog.textContent = dialogText[currentIndex];
        currentIndex++;
    } else {
        currentIndex = 0;
        leftDialog.textContent = dialogText[currentIndex];
        currentIndex++;
    }
});

rightButton.addEventListener('click', () => {
    if (currentIndex < dialogText.length) {
        rightDialog.textContent = dialogText[currentIndex];
        currentIndex++;
    } else {
        currentIndex = 0;
        rightDialog.textContent = dialogText[currentIndex];
        currentIndex++;
    }
});
