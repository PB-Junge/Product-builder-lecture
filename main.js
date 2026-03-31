const numbersContainer = document.querySelector('.numbers-container');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    for (const number of Array.from(numbers).sort((a, b) => a - b)) {
        const numberEl = document.createElement('div');
        numberEl.classList.add('number');
        numberEl.textContent = number;
        numbersContainer.appendChild(numberEl);
    }
});