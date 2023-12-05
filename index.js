document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.rectangle img');
        images.forEach(img => {
        img.addEventListener('click', function() {
        alert("Welcome!");
        });
        });
    });