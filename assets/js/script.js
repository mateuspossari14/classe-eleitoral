const calculatorDisplay = document.getElementById('calculator-display');

calculatorDisplay.addEventListener('input', () => {
    if (calculatorDisplay.value.length > 4)
        calculatorDisplay.value = calculatorDisplay.value.slice(0, 4);
});

const insert = num => {
    let numberCalculator = calculatorDisplay.value;

    if (numberCalculator.length < 4)
        calculatorDisplay.value = numberCalculator + num;
};

const del = () => calculatorDisplay.value = '';

const send = () => {
    let numberCalculator = parseInt(calculatorDisplay.value);

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

        else if (ageUser < 16)
            descriptionsUsers('não eleitor', 0);

        else if (ageUser >= 16 && ageUser <= 17)
            descriptionsUsers('eleitor facultativo', 1);

        else if (ageUser >= 18 && ageUser <= 70)
            descriptionsUsers('eleitor obrigatório', 2);

        else
            descriptionsUsers('eleitor facultativo', 3);
    };

    refresh();
};

let refresh = () => setTimeout(() => location.reload(), 10000);

const descriptionsUsers = (electoralClass, indexVideo) => {
    let arrayVideos = [
        './assets/videos/students.mp4', 
        './assets/videos/adolecents.mp4', 
        './assets/videos/adult.mp4', 
        './assets/videos/old_people.mp4'
    ];

    let video = window.document.getElementById('sourceVideo');
    let imageDescription = window.document.querySelector('.video-container--description');

    document.querySelector('.video-container').style.display = 'flex';
    imageDescription.textContent = `Sua classe eleitoral: ${electoralClass}`;
    video.style.display = 'block';
    video.src = arrayVideos[indexVideo];

    video.load();
    video.play();
};