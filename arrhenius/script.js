const variantsContainer = document.getElementById('variants');
const questionContainer = document.getElementById('question');
const container = document.getElementById('container');
const startBtn = document.querySelector('.start');
const submitBtn = document.querySelector('.submit');
let correctAnswer = undefined;
let submitted = false;

//generates a question related to phosphorus
function generatePQuestion() {
    const phosphorus = ((Math.random() * (5.0 - 0.5)) + 0.5)
    const percent = (Math.random()*40 + 20)
    const loss = (Math.random()*10 + 1)
    const correctAns = (((phosphorus/31)/(2*((100-loss)/100))) * 310 / (percent/100)).toFixed(1);
    const questions = [
        `Қаратау тауларындағы фосфорит кендеріндегі кальций фосфатының \ 
        массалық үлесі ${percent.toFixed(2).toString()}%. ${phosphorus.toString()}т фосфор алу үшін фосфориттің қандай массасы керек \
        екенін есептеңдер. Өнімнің шығымы ${(100-loss).toFixed(2).toString()}%.`,
        `${phosphorus.toFixed(2).toString()}т фосфор алу үшін құрамында ${percent.toFixed(2).toString()}% кальций фосфаты\
        бар фосфориттің қандай массасы керек екенін есептеңдер. Өндірістегі фосфордың \
       шығыны ${loss.toFixed(2).toString()}%.`,
        `Хибин фосфорит кендеріндегі кальций фосфатының массалық үлесі ${percent.toFixed(2).toString()}%. \
        Шығымды ${(100-loss).toFixed(2).toString()}% деп есептеп, массасы ${phosphorus.toFixed(2).toString()}т фосфор алу үшін \
        фосфориттің қандай массасы керек екенін есептеңдер.`,
        `Хибин фосфорит кендеріндегі кальций фосфатының массалық үлесі ${percent.toFixed(2).toString()}%. \
        Шығынды ${loss.toFixed(2).toString()}% деп есептеп, массасы ${phosphorus.toFixed(2).toString()}т фосфор алу үшін \
        фосфориттің қандай массасы керек екенін есептеңдер.`
    ]
    const randI = Math.floor(Math.random()*4);
    const variantsArray = [];
    for (let i = 0; i<3; i++) {
        variantsArray.push(generateRandomAnswer(correctAns, correctAns/2, correctAns+10));
    }
        
    return {
        question: `${questions[randI]}`,
        answer: correctAns,
        variants: variantsArray,
    }
} 

//generates a question on ammonia nitric acid
function generateNQuestion() {
    const ammonia = ((Math.random() * (20.0 - 0.5)) + 0.5);
    const yield1 = (Math.random()*50 + 48)
    const yield2 = (Math.random()*50 + 48)
    const percent = (Math.random()*40 + 55)
    const correctAns = ((((ammonia/17)*(yield1/100)*(yield2/100))/(percent/100))*63).toFixed(1);
    const questions = 
        `Жанасу аппаратындағы тотығу өнімінің шығымы ${yield1.toFixed(2)}%,  \
        алсіңіру қондырғысындағы қышқылдың шығымы ${yield2.toFixed(2)}% болса, \
        ${ammonia.toFixed(2)}т аммиактан азот қышқылының ${percent.toFixed(2)}%-дық ерітіндісінің қандай массасын \
        алуға болады?`
    const variantsArray = [];
    for (let i = 0; i<3; i++) {
        variantsArray.push(generateRandomAnswer(correctAns, correctAns/2, correctAns+10));
    }
        
    return {
        question: questions,
        answer: correctAns,
        variants: variantsArray,
    }
} 

//generates oleum 1 type question
function generateOleum1() {
    const moleH2O = (Math.random()*5 + 0.1)
    const moleSO3 = (Math.random()*3 + parseFloat(moleH2O))
    const moleH2SO4 = (Math.random()*5 + 1)
    const massOleum = (moleSO3*80 + moleH2SO4*98)
    const massAll = parseFloat(massOleum + moleH2O*18)
    const percentOleum = (moleSO3*80/(moleSO3*80+moleH2SO4*98)*100)
    const correctAns = (100*((moleSO3-moleH2O)*80)/massAll).toFixed(1)
    
    const questionText = `
    ${percentOleum.toFixed(2)}%-дық ${massOleum.toFixed(2)}г олеумге ${(moleH2O*18).toFixed(0)}г су қосты. \
    Түзілген ерітіндідегі заттың массалық үлесін есептеңдер.
    `
    const variantsArray = [];
    for (let i = 0; i<3; i++) {
        variantsArray.push(generateRandomAnswer(correctAns, correctAns/2, correctAns));
    }
        
    return {
        question: questionText,
        answer: correctAns,
        variants: variantsArray,
    }
}

function generateOleum2() {
    const moleH2O = Math.random()*5 + 0.1
    const moleSO3 = (Math.random()*3 + parseFloat(moleH2O))
    const moleH2SO4 = (Math.random()*5 + 1)
    const massAcid = (moleH2O*18 + moleH2SO4*98)
    const massAll = parseFloat(massAcid + moleSO3*80);
    const percentAcid = (moleH2SO4*98/(parseFloat(massAcid))*100)
    const massSO3 = (moleSO3*80)
    const correctAns = (100*((moleSO3-moleH2O)*80)/massAll).toFixed(1);
    
    const questionText = `
    Күкірт қышқылының ${percentAcid.toFixed(2)}%-дық ${massAcid.toFixed}(2)г ерітіндісіне ${massSO3.toFixed(2)}г күкірт (VI) оксидін қосты. \
    Түзілген олеумдегі күкірт(VI) оксидінің массалық үлесін есептеңдер. 
    `
    const variantsArray = [];
    for (let i = 0; i<3; i++) {
        variantsArray.push(generateRandomAnswer(correctAns, correctAns/2, correctAns));
    }
        
    return {
        question: questionText,
        answer: correctAns,
        variants: variantsArray,
    }
}





//array of question generation functions
const generateRandomQuestion = [generateNQuestion, generatePQuestion, generateOleum1, generateOleum2];


//generates the random answer based on given answer, the range is provided as well, 
//flag = -1, only decreases, flag = 0, mixture, flag=1 only increases
function generateRandomAnswer(answer, min, max) {
    const a = (Math.random()*(max-min + 1) + min).toFixed(1);
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



function App() {
    appRunning = true;
    submitted = false;
    //clears the question and variants containers
    questionContainer.innerHTML = "";
    variantsContainer.innerHTML = "";

    // generates a question object with its correct answer
    const data = pickRandomElem(generateRandomQuestion);
    const questionText = document.createElement('h4');
    questionText.textContent = data.question;
    questionContainer.appendChild(questionText);
    correctAnswer = data.answer;
    //an array of variants, first one being the correct answer
    const variants = [data.answer, ...data.variants];

    shuffleArray(variants);
    //generates multiple span tags and appends them to the variants div
    for(let i = 0; i<4; i++){
        const spanVariant = document.createElement('span');
        spanVariant.classList.add('variant');
        spanVariant.textContent = variants[i];
        spanVariant.addEventListener('click', (e) => {
            e.preventDefault();
            removeClassList('selected');
            spanVariant.classList.toggle('selected');
        })
        variantsContainer.append(spanVariant);
    }

}

function ifElemExistArray(elem, array){
    for (let i = 0; i<array.length; i++){
        if (elem == array[i]){
            return true;
        }
    }
    return false;
}

function pickRandomElem(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i]();
}


function removeClassList(className) {
    const a = document.querySelectorAll(`.${className}`);
    a.forEach(elem => {
        elem.classList.remove(className);
    })
}


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('.selected') && !submitted) {
        if (correctAnswer.toString() == document.querySelector('.selected').textContent.toString()) {
            let a = parseInt(document.querySelector('.score').textContent)
            document.querySelector('.score').textContent = a+1;
            removeClassList('incorrectAnswer');
            document.querySelector('.selected').classList.add('correctAnswer');
            submitted = true;
            appRunning = false;
        } else {
            let a = parseInt(document.querySelector('.score').textContent)
            document.querySelector('.score').textContent = a-1;
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

