document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-container img');
    const messageElement = document.getElementById('message');
    const message = "You found me!";
    let lastClickedImage = null;
    messageElement.style.position = 'absolute';
    messageElement.style.zIndex = '10000';
    messageElement.style.display = 'none';
    messageElement.style.color = 'black';
    messageElement.style.fontSize = '20px'; 
    messageElement.style.fontFamily = 'Sometype Mono'; 

    images.forEach(img => {
        img.addEventListener('click', function() {
            if (lastClickedImage === this) {
                messageElement.style.display = 'none'; 
                lastClickedImage = null; 
            } else {
                const x = Math.random() * (window.innerWidth - messageElement.offsetWidth);
                const y = Math.random() * (window.innerHeight - messageElement.offsetHeight);

                messageElement.style.left = x + 'px';
                messageElement.style.top = y + 'px';
                messageElement.style.display = 'block';
                messageElement.textContent = message;

                lastClickedImage = this;
            }
        });
    });
});