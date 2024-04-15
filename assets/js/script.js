const calculatorDisplay = document.getElementById('calculator-display');

// calculatorDisplay.addEventListener('input', () => this.value = this.value.match(/[0-9]*/));

const insert = (num) => {

    let numberCalculator = calculatorDisplay.value

    if (numberCalculator.length < 4)
        calculatorDisplay.value = numberCalculator + num;

}

const del = () => calculatorDisplay.value = '';


const send = () => {

    let numberCalculator = parseInt(calculatorDisplay.value);
    let imageDescription = window.document.querySelector('.video-container--description');
    let video = window.document.getElementById('sourceVideo');

    if (!isNaN(numberCalculator)) {

        let ageUser = 2024 - numberCalculator;
        alert(`A sua idade: ${ageUser}`);

        if (ageUser < 0)
            alert('Idade inserida inesistente, tente novamente!');

        else if (ageUser == 2024)
            alert('Sua idade é igual ao ano atual, tente novamente!');

        else if (ageUser > 130)
            alert('Sua idade é muito avançada, tente novamente!');

        else if (ageUser < 16) {

            imageDescription.textContent = 'Sua classe eleitoral: não eleitor';
            video.style.display = 'block';
            video.src = './assets/videos/students.mp4';
            video.load();
            video.play();

        }

        else if (ageUser >= 16 && ageUser <= 18) {

            imageDescription.textContent = 'Sua classe eleitoral: eleitor facultativo';
            video.style.display = 'block';
            video.src = './assets/videos/adolecents.mp4';
            video.load();
            video.play();

        }

        else if (ageUser > 18 && ageUser <= 70) {

            imageDescription.textContent = 'Sua classe eleitoral: eleitor obrigatório';
            video.style.display = 'block';
            video.src = './assets/videos/adult.mp4';
            video.load();
            video.play();

        }

        else {

            imageDescription.textContent = 'Sua classe eleitoral: eleitor facultativo';
            video.style.display = 'block';
            video.src = './assets/videos/old_people.mp4';
            video.load();
            video.play();

        }
    }
}