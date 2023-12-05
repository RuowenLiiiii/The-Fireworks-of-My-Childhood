
document.querySelectorAll('.story-btn').forEach(function(btn) {
btn.addEventListener('click', function() {
var modal = document.createElement('div');
modal.classList.add('story-modal');

modal.innerHTML = '<div class="loader"></div>';

var closeButton = document.createElement('button');
closeButton.innerText = 'Who lost a glove on New Years Eve? Do gloves feel lonely too?';
closeButton.addEventListener('click', function() {
modal.style.display = 'none';
});

modal.appendChild(closeButton);

document.body.appendChild(modal);

modal.style.display = 'block';
});
});