const calculatorDisplay = document.getElementById('calculator-display');

const insert = num => {
    let numberCalculator = calculatorDisplay.value;

    if (numberCalculator.length < 4)
        calculatorDisplay.value = numberCalculator + num;
};

const del = () => calculatorDisplay.value = '';

const send = () => {
    let numberCalculator = parseInt(calculatorDisplay.value);
    let imageDescription = window.document.querySelector('.video-container--description');
    let video = window.document.getElementById('sourceVideo');

    let date = new Date;
    let actualYear = date.getFullYear();

    if (!isNaN(numberCalculator)) {

        let ageUser = actualYear - numberCalculator;
        alert(`A sua idade: ${ageUser}`);

        if (ageUser < 0)
            alert('Idade inserida inesistente, tente novamente!');

        else if (ageUser == actualYear)
            alert('Sua idade é igual ao ano atual, tente novamente!');

        else if (ageUser > 130)
            alert('Sua idade é muito avançada, tente novamente!');

        else if (ageUser < 16) {
            document.querySelector('.video-container').style.display = 'flex';
            imageDescription.textContent = 'Sua classe eleitoral: não eleitor';
            video.style.display = 'block';
            video.src = './assets/videos/students.mp4';
            video.load();
            video.play();
            refresh();
        }

        else if (ageUser >= 16 && ageUser <= 17) {
            document.querySelector('.video-container').style.display = 'flex';
            imageDescription.textContent = 'Sua classe eleitoral: eleitor facultativo';
            video.style.display = 'block';
            video.src = './assets/videos/adolecents.mp4';
            video.load();
            video.play();
            refresh();
        }

        else if (ageUser >= 18 && ageUser <= 70) {
            document.querySelector('.video-container').style.display = 'flex';
            imageDescription.textContent = 'Sua classe eleitoral: eleitor obrigatório';
            video.style.display = 'block';
            video.src = './assets/videos/adult.mp4';
            video.load();
            video.play();
            refresh();
        }

        else {
            imageDescription.textContent = 'Sua classe eleitoral: eleitor facultativo';
            video.style.display = 'block';
            video.src = './assets/videos/old_people.mp4';
            video.load();
            video.play();
            refresh();
        };
    };
};

let refresh = () => setInterval(() => location.reload(), 10000);