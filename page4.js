document.addEventListener('DOMContentLoaded', function() {
        const flipCards = document.querySelectorAll('.flip-card');
        flipCards.forEach(card => {
        card.addEventListener('click', function() {
        const textElements = this.querySelectorAll('.flip-card-back p, .flip-card-back h1');
        const randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + 
                                     (Math.floor(Math.random() * 256)) + ',' + 
                                    (Math.floor(Math.random() * 256)) + ')';
            textElements.forEach(el => {
            el.style.color = randomColor;
                });
            });
        });
    });