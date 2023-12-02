function incrementCounter(counterId) {
    var counterElement = document.getElementById(counterId);
    var currentCount = parseInt(counterElement.innerText, 10);
    counterElement.innerText = currentCount + 1;
    counterElement.classList.add('counter-animation');
    setTimeout(() => {
        counterElement.classList.remove('counter-animation');
    }, 300);
}

function decrementCounter(counterId) {
    var counterElement = document.getElementById(counterId);
    var currentCount = parseInt(counterElement.innerText, 10);
    
    if (currentCount > 0) {
        counterElement.innerText = currentCount - 1;
        counterElement.classList.add('counter-animation');
        setTimeout(() => {
            counterElement.classList.remove('counter-animation');
        }, 300);
    }
}
document.getElementById('menuToggle').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
});

