const variantsContainer = document.getElementById('variants');
const questionContainer = document.getElementById('question');
const container = document.getElementById('container');
const startBtn = document.querySelector('.start');
const submitBtn = document.querySelector('.submit');
let correctAnswer = undefined;
let submitted = false;


//generates simple Aldehyde formula finding problem
function generateOxidePercent1() {
    const oxidePercentData = [
        ["Li", 53.3],
        ["Na", 25.8],
        ["K", 17.0],
        ["Rb", 8.6],
        ["Cs", 5.7],
        ["Be", 64.0],
        ["Mg", 40.0],
        ["Ca", 28.6],
        ["Sr", 15.4],
        ["Ba", 10.4],
    ]
    const correctAnsArray = pickRandomElem(oxidePercentData);
    const correctAns = correctAnsArray[0];
    const variantsArray = [];

    for (let i = 0; i<3; i++) {
        const a = pickRandomElem(oxidePercentData);
        if ((correctAnsArray != a) && (!variantsArray.includes(a[0]))) {
            variantsArray.push(a[0]);
        } else {
            i--;
        }
    }

    const questionText = 
    [
    [`
    Құрамында оттектің массалық үлесі ${correctAnsArray[1]}% болатын қай метал оксиді?
    `],
    [`
    Құрамында металдың массалық үлесі ${(100-correctAnsArray[1])}% болатын қай метал оксиді?
    `]
    
    ]
    
     
    return {
        question: pickRandomElem(questionText),
        answer: correctAns,
        variants: variantsArray,
    }
}

//generates Al, Cu mixture question
function generateMixture1() {
    const moleAl = parseFloat((Math.random()*10+1).toFixed(2));
    const moleH2 = moleAl*1.5;
    const volH2 = parseFloat((moleH2*22.4).toFixed(3));
    const massAl = moleAl*27;
    const randomFactor = (Math.random() * 5 + 1).toFixed(1);
    const massMix = parseFloat((randomFactor * massAl + massAl).toFixed(2));
    const correctAns = parseFloat((100*(massAl/massMix)).toFixed(2))

    const questionText = `
    Алюминий мен мыстан тұратын ${massMix}г құйманы сілті ерітіндісімен \
    өңдегенде ${volH2} л (қ.ж.) жеңіл газ бөлінді. Қоспадағы алюминийдің массалық үлесі
    `
    
    const variantsArray = [];
    for (let i = 0; i<3; i++) {
        variantsArray.push(generateRandomAnswer(correctAns, correctAns/2, 100));
    }
        
    return {
        question: questionText,
        answer: correctAns,
        variants: variantsArray,
    }
}

//working
function generateMixture2() {
    const moleAcetaldehyde = parseFloat((Math.random()*3+0.1).toFixed(1));
    const moleFormicAcid = parseFloat((Math.random()*3+0.1).toFixed(1));
    const massAcetaldehyde = moleAcetaldehyde*44;
    const massFormicAcid = moleFormicAcid*46;
    const massMixture = (massFormicAcid+massAcetaldehyde).toFixed(2);
    const massAg = ((moleAcetaldehyde+moleFormicAcid)*216).toFixed(2);
    const perAcet = parseFloat(((massAcetaldehyde/massMixture)*100).toFixed(2));
    const perFormic = parseFloat((100-perAcet).toFixed(2));
    const ans = [
        ["сірке альдегидінің", perAcet],
        ["құмырсқа қышқылының", perFormic]
    ]
    const correctAnsArray = pickRandomElem(ans);
    const correctAns = correctAnsArray[1];
    
    const questionText = `
    Құмырсқа қышқылы мен сірке альдегидіңің ${massMixture} г қоспасын күміс оксидіңің аммиактағы ерітіндісімен толық әрекеттестіргенде ${massAg} г 
    металл тұнбаға түскен. Бастапқы қоспадағы ${correctAnsArray[0]} массалық үлесін табыңыз.
    `
    
    const variantsArray = [ (100-correctAnsArray[1]).toFixed(2), ];
    for (let i = 0; i<2; i++) {
        variantsArray.push(generateRandomAnswer(correctAns, correctAns/2, 100));
    }
        
    return {
        question: questionText,
        answer: correctAns,
        variants: variantsArray,
    }
}

//working
function generateMixture3() {
    const moleProp = parseFloat((Math.random()*3+0.1).toFixed(1));
    const moleFormicAcid = parseFloat((Math.random()*3+0.1).toFixed(1));
    const massProp = moleProp*58;
    const massFormicAcid = moleFormicAcid*46;
    const massMixture = (massFormicAcid+massProp).toFixed(2);
    const massAg = ((moleProp+moleFormicAcid)*216).toFixed(2);
    const perProp = parseFloat(((massProp/massMixture)*100).toFixed(2));
    const perFormic = parseFloat((100-perProp).toFixed(2));
    const ans = [
        ["пропанальдің", perProp],
        ["құмырсқа қышқылының", perFormic]
    ]

    const correctAnsArray = pickRandomElem(ans);
    const correctAns = correctAnsArray[1];
    const questionText = `
    Құмырсқа қышқылы мен пропан альдегидіңің ${massMixture} г қоспасын күміс оксидіңің аммиактағы ерітіндісімен толық әрекеттестіргенде ${massAg} г 
    металл тұнбаға түскен. Бастапқы қоспадағы ${correctAnsArray[0]} массалық үлесін табыңыз.
    `
    
    const variantsArray = [ (100-correctAnsArray[1]).toFixed(2), ];
    for (let i = 0; i<2; i++) {
        variantsArray.push(generateRandomAnswer(correctAns, correctAns/2, 100));
    }
        
    return {
        question: questionText,
        answer: correctAns,
        variants: variantsArray,
    }
}

//working
function generateMixture4() {
    const mole = parseFloat((Math.random()*2+0.1).toFixed(2));
    const massMg = parseFloat((mole*24).toFixed(2));
    const randomFactor = Math.random() * 2.9 + 0.1;
    const massMixture = parseFloat((randomFactor * massMg + massMg).toFixed(2));
    const perMg = parseFloat((100*(massMg/massMixture)).toFixed(2));
    const perCu = parseFloat((100-perMg).toFixed(2));
    const volH2 = parseFloat((mole*22.4).toFixed(2))

    
    const ans = [
        ["мыстың", perCu],
        ["магнийдің", perMg]
    ]

    const correctAnsArray = pickRandomElem(ans);
    const correctAns = correctAnsArray[1];
    const questionText = `
    Массасы ${massMixture}г магний мен мыс ұнтақтарын фосфор қышқылымен өңдегенде ${volH2} л (қ.ж.) газ бөлінді. Қоспадағы ${correctAnsArray[0]} массалық үлесі.
    `
    
    const variantsArray = [ ];
    for (let i = 0; i<3; i++) {
        variantsArray.push(generateRandomAnswer(correctAns, correctAns/2, 100));
    }
        
    return {
        question: questionText,
        answer: correctAns,
        variants: variantsArray,
    }
}

function generateMixture5() {
    const molePhenol = parseFloat((Math.random()*2+0.1).toFixed(2));
    const moleEthanol = parseFloat((Math.random()*2+0.1).toFixed(2));
    const massPhenol = molePhenol*94
    const massEthanol = moleEthanol*46
    const massMixture = massPhenol+massEthanol;
    const perPhenol = parseFloat((100*(massPhenol/massMixture)).toFixed(2))
    const perEthanol = parseFloat((100-perPhenol).toFixed(2));
    const massSalt = parseFloat((molePhenol*116).toFixed(2));
    const volH2 = parseFloat(((molePhenol + moleEthanol)*11.2).toFixed(2))
    console.log(perPhenol, perEthanol)

    const ans = [
        ["фенолдың", perPhenol],
        ["спирттің", perEthanol]
    ]

    const correctAnsArray = pickRandomElem(ans);
    const correctAns = correctAnsArray[1];
    const questionText = `
    Фенол мен этанол қоспасын натриймен толық әрекеттестіргенде ${volH2}л сутек \
    газы түзілді. Дәл осындай массадағы фенол мен этанол қоспасын натрий гидроксидімен өңдегенде \
    ${massSalt}г тұз түзілді. Бастапқы қоспадағы ${correctAnsArray[0]}  массалық үлесі`
    
    const variantsArray = [  ];
    for (let i = 0; i<3; i++) {
        variantsArray.push(generateRandomAnswer(correctAns, correctAns/2, 100));
    }
        
    return {
        question: questionText,
        answer: correctAns,
        variants: variantsArray,
    }
}



//array of question generation functions
const generateRandomQuestion = [generateOxidePercent1, generateMixture1, generateMixture2, generateMixture3, generateMixture4,
generateMixture5];


function App() {
    appRunning = true;
    submitted = false;
    //clears the question and variants containers
    questionContainer.innerHTML = "";
    variantsContainer.innerHTML = "";

    // generates a question object with its correct answer
    const data = pickRandomFunction(generateRandomQuestion);
    // const data = generateRandomQuestion[1]();
    const questionText = document.createElement('h4');
    questionText.innerHTML = data.question;
    questionContainer.appendChild(questionText);
    correctAnswer = data.answer;
    //an array of variants, first one being the correct answer
    const variants = [data.answer, ...data.variants];

    shuffleArray(variants);
    //generates multiple span tags and appends them to the variants div
    for(let i = 0; i<4; i++){
        const spanVariant = document.createElement('span');
        spanVariant.classList.add('variant');
        spanVariant.innerHTML = variants[i];
        spanVariant.addEventListener('click', (e) => {
            e.preventDefault();
            removeClassList('selected');
            spanVariant.classList.toggle('selected');
        })
        variantsContainer.append(spanVariant);
    }

}











function countDecimals(number) {
    // Convert the number to a string
    let numberString = number.toString();
    
    // Check if the number has a decimal point
    if (numberString.includes('.')) {
        // Find the index of the decimal point
        let decimalIndex = numberString.indexOf('.');
        
        // Return the length of the string after the decimal point
        return numberString.length - decimalIndex - 1;
    } else {
        // If there are no decimals, return 0
        return 0;
    }
}




//generates the random answer based on given answer, the range is provided as well, 
//flag = -1, only decreases, flag = 0, mixture, flag=1 only increases
function generateRandomAnswer(answer, min, max) {
    const b = countDecimals(answer);
    const a = parseFloat((Math.random()*(max-min + 1) + min).toFixed(b));
    if (a != answer) {
           return a;
       } else {
           return a+1;
       }
}
    




//array shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate random index
      // Swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }



//picks a random function from an array of functions and runs it
function pickRandomFunction(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i]();
}

//picks a random elements from an array
function pickRandomElem(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}


//removes a classlist from all elements in an html
function removeClassList(className) {
    const a = document.querySelectorAll(`.${className}`);
    a.forEach(elem => {
        elem.classList.remove(className);
    })
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('.selected') && !submitted) {
        if (correctAnswer.toString() == document.querySelector('.selected').innerHTML.toString()) {
            let a = parseInt(document.querySelector('.score').innerHTML)
            document.querySelector('.score').innerHTML = a+1;
            removeClassList('incorrectAnswer');
            document.querySelector('.selected').classList.add('correctAnswer');
            submitted = true;
            appRunning = false;
        } else {
            let a = parseInt(document.querySelector('.score').innerHTML)
            document.querySelector('.score').innerHTML = a-1;
            removeClassList('incorrectAnswer');
            document.querySelector('.selected').classList.add('incorrectAnswer');

        }
    }
   
})

let appRunning = false;

const clickHandler = (e) => {
    e.preventDefault();
    if (!appRunning) {
        App();
    } 
};

// Add the event listener to the button
startBtn.addEventListener('click', clickHandler);

