document.addEventListener('DOMContentLoaded', function() {
    const runawayButton = document.getElementById('runawayButton');
    const container = document.querySelector('.container');

    runawayButton.addEventListener('mouseover', function() {
        moveButton(container);
    });
});

function moveButton(container) {
    const runawayButton = document.getElementById('runawayButton');
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - runawayButton.clientWidth;
    const maxY = containerRect.height - runawayButton.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    runawayButton.style.left = randomX + 'px';
    runawayButton.style.top = randomY + 'px';
}
