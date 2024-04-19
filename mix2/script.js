const variantsContainer = document.getElementById('variants');
const questionContainer = document.getElementById('question');
const container = document.getElementById('container');
const startBtn = document.querySelector('.start');
const submitBtn = document.querySelector('.submit');
let correctAnswer = undefined;
let submitted = false;


//generates simple Aldehyde formula finding problem
function generateAldehyde1() {
    const aldeData = [
        ["HCHO", 30],
        ["CH<sub>3</sub>CHO", 44],
        ["C<sub>2</sub>H<sub>5</sub>CHO", 58],
        ["C<sub>3</sub>H7CHO", 72],
        ["C<sub>4</sub>H<sub>9</sub>CHO", 86],
        ["C<sub>5</sub>H<sub>11</sub>CHO", 100],
        ["C<sub>6</sub>H<sub>13</sub>CHO", 114],
        ["C<sub>7</sub>H<sub>15</sub>CHO", 128],
        ["C<sub>8</sub>H<sub>17</sub>CHO", 142],
    ]
    
    const mole = parseFloat((Math.random()*5).toFixed(2));
    const massAg = (mole*216).toFixed(2);
    const aldehyde = pickRandomElemWithoutF(aldeData);
    const correctAns = aldehyde[0];
    const massAldehyde = (mole*aldehyde[1]).toFixed(2);
    const variantsArray = [];

    for (let i = 0; i<3; i++) {
        const a = pickRandomElemWithoutF(aldeData);
        if ((aldehyde != correctAns) && (!ifElemExistArray(a[0], variantsArray)) ){
            variantsArray.push(a[0]);
        } else {
            i--;
        }
    }
  
    const questionText = `
    Массасы ${massAldehyde}г альдегид күміс-айна реакциясына қатысып, нәтижесінде ${massAg}г тұнба түзіледі. Альдегидтің молекулалық формуласын анықтаңдар.
    `
        
    return {
        question: questionText,
        answer: correctAns,
        variants: variantsArray,
    }
}


//generates simple Carboxylic acid formula finding problem
function generateCarbAcid1() {
    const carbData = [
        ["HCOOH", 46],
        ["CH<sub>3</sub>COOH", 60],
        ["C<sub>2</sub>H<sub>5</sub>COOH", 74],
        ["C<sub>3</sub>H<sub>7</sub>COOH", 88],
        ["C<sub>4</sub>H<sub>9</sub>COOH", 102],
        ["C<sub>5</sub>H<sub>11</sub>COOH", 116],
        ["C<sub>6</sub>H<sub>13</sub>COOH", 130],
    ]
    
    const mole = parseFloat((Math.random()*5).toFixed(2));
    const massNa = (mole*40).toFixed(2);
    const carbAcid = pickRandomElemWithoutF(carbData);
    const correctAns = carbAcid[0];
    const massSalt = (mole*(carbAcid[1]+22)).toFixed(2);
    const variantsArray = [];

    for (let i = 0; i<3; i++) {
        const a = pickRandomElemWithoutF(carbData);
        if ((carbAcid != correctAns) && (!ifElemExistArray(a[0], variantsArray)) ){
            variantsArray.push(a[0]);
        } else {
            i--;
        }
    }
  
    const questionText = `
    Қаныққан бірнегізді карбон қышқылын бейтараптауға массасы ${massNa}г натрий гидроксиді жұмсалды. Нәтижесінде массасы ${massSalt}г тұз түзіледі. Қышқылдың формуласын табыңдар.
    `
       
    return {
        question: questionText,
        answer: correctAns,
        variants: variantsArray,
    }
}

function generateMixAlFe1() {
    
    const moleFe = parseFloat((Math.random()*5).toFixed(2));
    const moleAl = parseFloat((Math.random()*5).toFixed(2));
    const massMetals = parseFloat((moleFe*56+moleAl*27).toFixed(2));
    const volumeH2 = parseFloat((22.4*(moleAl*1.5+moleFe)).toFixed(2))
    const correctAns = parseFloat(((100*moleAl*27)/massMetals).toFixed(1))

    const variantsArray = [];

    for (let i = 0; i<3; i++) {
        variantsArray.push(generateRandomAnswer(correctAns, correctAns/3, correctAns*1.5));
    }

    const questionText = `
    Алюминиймен темірдің массасы ${massMetals}г қоспасына тұз қышқылының ерітіндісімен әсер еткенде ${volumeH2} л(қ.ж.) газ түзілді. Қоспадағы алюминийдің массалық үлесін есептеңіз.
    `
       
    return {
        question: questionText,
        answer: correctAns,
        variants: variantsArray,
    }
}

function generateMixBurn1() {
    
    const volAll = parseInt(Math.random()*15+1) * 10;
    const percentValues = generateFourPercents();
    const perMethane = percentValues[0]
    const perEthene = percentValues[1]
    const perCO = percentValues[2]
    const perN = percentValues[3]

    const correctAns = (5*(((2*volAll*perMethane)/100) + ((3*volAll*perEthene)/100) + (volAll*perCO/200))).toFixed(1);
    const variantsArray = [];

    for (let i = 0; i<3; i++) {
        variantsArray.push(generateRandomAnswer(correctAns, correctAns/3, correctAns*1.5));
    }


    const questionText = `
    Құрамында ${perMethane}% метан, ${perEthene}% этилен, ${perCO}% көміртек(ІІ) оксиді және ${perN}% азот болатын \
    көлемі ${volAll}м<sup>3</sup> (қ.ж.) табиғи газды жағуға неше литр (қ.ж.) ауа керек?
    `
       
    return {
        question: questionText,
        answer: correctAns,
        variants: variantsArray,
    }
}

function generateAcidBaseMolarity() {
    
    const mol1 = parseFloat((Math.random()).toFixed(4));
    const vol1 = parseFloat((Math.random()*20 + 10).toFixed(2));
    const correctAns = parseFloat((Math.random()*20 + 10).toFixed(1))
    const mol2 = parseFloat((mol1*vol1/correctAns).toFixed(4))


    const variantsArray = [];

    for (let i = 0; i<3; i++) {
        variantsArray.push(generateRandomAnswer(correctAns, correctAns/3, correctAns*2));
    }

    
    const questionText = 
    [
    [`
    Көлемі ${vol1}мл ${mol1}М HCl ерітіндісін титрлеуге ${mol2}М NaOH ерітіндісінің қандай көлемі жұмсалады?
    `],
    [`
    Көлемі ${vol1}мл ${mol1}М NaOH ерітіндісін титрлеуге ${mol2}М HCl ерітіндісінің қандай көлемі жұмсалады?
    `]   
]
    
    return {
        question: pickRandomElemWithoutF(questionText),
        answer: correctAns,
        variants: variantsArray,
    }
}

function generateMixBurn2() {
    
    const volAll = parseInt(Math.random()*15+1) * 10;
    const percentValues = generateFourPercents();
    const perMethane = percentValues[0]
    const perEthane = percentValues[1]
    const perCO2 = percentValues[2]
    const perN = percentValues[3]

    const correctAns = (5*(((2*volAll*perMethane)/100) + ((3.5*volAll*perEthane)/100))).toFixed(1);
    const variantsArray = [];

    for (let i = 0; i<3; i++) {
        variantsArray.push(generateRandomAnswer(correctAns, correctAns/3, correctAns*1.5));
    }


    const questionText = `
    Құрамында ${perMethane}% метан, ${perEthane}% этан, ${perCO2}% көміртек(IV) оксиді және ${perN}% азот болатын \
    көлемі ${volAll}м<sup>3</sup> (қ.ж.) табиғи газды жағуға неше литр (қ.ж.) ауа керек?
    `
       
    return {
        question: questionText,
        answer: correctAns,
        variants: variantsArray,
    }
}





//generates 4 numbers when added equals 100
function generateFourPercents() {
    let numbers = [];
    let remaining = 100;

    for (let i = 0; i < 3; i++) {
        let max = remaining - (3 - i);
        let num = Math.floor(Math.random() * max) + 1;
        numbers.push(num);
        remaining -= num;
    }

    numbers.push(remaining); // Add the remaining number to ensure the sum is exactly 100
    return numbers;
}


//Құмырсқажәнесіркеқышқылдарыныңқоспасынбейтараптауғамассасы11,2 гКОН жұмсалды.Осықышқылдардыңқоспасынкүмісоксидініңаммиактағыері-
//тіндісіменөңдегендемассасы21,6гметаллтүзілді.Қоспадағысіркеқышқылыныңмассасынесептеңдер.
// Жауабы:6г

//Массасы6гнатрийацетатынанатрийгидроксидініңартықмөлшерінқосыпбал-қытқандақаншаметантүзіледі?Метанныңшығымы85%.
//Жауабы:1,36г

//Массасы12гмагнийMgмен12гкремнийоксидінSiO2қосыпқыздырғандатүзілгенкремнийдіSiерітугеқажеттінатрийгидроксидініңNaOH(ρ = 1,35 г/мл)көлемінесептеңдер.
//Жауабы:37мл.

//Көміртекпенкремнийдің5,2гқоспасыберілген.Қоспанытолықжағуға6,72л(қ.ж.)оттекжұмсалды.Қоспадағыкремнийменкөміртектіңмассалыққатынасынесептеңдер.
//Жауабы:7:6

//Алюминийменбериллийдің144гқоспасынтұзқышқылыменөңдегенде20гсутектүзілді.Қоспадағыәрметалдыңмассасыменмассалықүлестерінесептеңдер.
//Жауабы:75%алюминий,25%бериллий.

//Массасы36,4гэтанолменсіркеқышқылыныңқоспасынжаққанда32,4гсутүзілді.Бастапқықоспадағыэтанолдыңмассалықүлесінесептеңдер.
//ауабы:50,55%.

//Калийжәненатрийкарбонаттарының10гқоспасынсудаерітіп, тұзқышқылынқосты.Бөлінгенгаздытүтікарқылынатрийпероксидіненөткізді.Түзілгеноттексутектің1,9л(қ.ж.)көлемінжағуғажетті.Реакциятеңдеуінжазып,қоспаныңқұрамындағықұрауыштардыңмассалықүлесінесептеңдер.
//Жауабы:натрийкарбонаты56,5%,калийкарбонаты43,5%


//Метиламин,аминсіркеқышқылыжәнеэтилацетаттың40гқоспасыкөлемі9,86л(қ.ж.)хлорсутекпенәрекеттеседі.Дәлосын-дайқоспаныкалийгидроксидінің1,4М300млерітіндісіменөңдеді.Қоспадағықұрауыштардыңмассалықүлесін(%)есептеңдер.
// Жауабы:метиламин15,5%,аминсіркеқышқылы45%,этилацетат39,5%


//Массасы27,6гкремний,теміржәнеалюминийдентұратынқоспанықыздыраотырып,калийгидроксидініңартықмөлшеріменөңдегенде22,4л(қ.ж.)газтүзілді.Қоспаныңосындаймассасынатұзқышқылыменәсереткенде17,92л(қ.ж.)газтүзілді.Қоспаныңмассалыққұрамынанықтаңдар.
//Жауабы:5,6гкремний,10,8галюминий,11,2гтемір


//Метилжәнеэтилспирттерініңқоспасынжаққанда15,68л(қ.ж.)көмірқышқылгазытүзілді.Алдәлосындайқоспағаметалдықнатрийдіңартықмөлшеріменәсереткенде5,6л(қ.ж.)сутектүзілді.Бастапқықоспаныңмассасынжәнеондағыметанолдыңмассалықүлесінесептеңдер.
//Жауабы:қоспаныңмассасы18,8г,ω(СH3OH)51%

//


/**
 * Массасы2,3гнатрийдіңтүйірінстақандағы100гсуғасалды.Ерітіндідетүзілгенсілтініңмассасынжәнеоныңмассалықүлесінесептеңдер.

Жауабы:m(NaOH)=4г,ω(NaOH)=3,9%.

•2.Қабырғасыныңұзындығы1смболатынкальцийтекшесін500гсудаерітті.Егеркальцийдіңтығыздығыρ = 1,54г/см3болса,реакциянәтижесіндетүзілгенерітіндідегікальцийгидроксидініңмолярлықконцентрациясынесептеңдер.

Жауабы:1,17М.

•3.Массасы630г20%-дықазотқышқылыныңерітіндісінбейтараптауғақажеттікальцийгидроксидініңмассасынесептеңдер.

Жауабы:74г.

•4.Массасы600г42%-дықазотқышқылыныңерітіндісіарқылыаммиактыңартықмөлшерінөткізгенде300гаммонийнитратытүзілді.Аммонийнитратыныңпрактикалықшығымынесептеңдер.

Жауабы:93,75%.

•5*.Массасы7,2гпропанол-1-дітотықтырып,7,2гпропионқышқылыалынды.Қыш-қылды бейтараптауүшіннатрийгидроксидініңNaOH20%-дық16,4млерітіндісі(ρ = 1,22 г/мл)жұмсалды.Қышқылдыңпрактикалықшығымынесептеңдер.

Жауабы:83,3%.
 */


/**Көлемі20млHNO3ерітіндісінтитрлеуүшін18,25мл0,1103МNaOHерітіндісіжұмсалды.HNO3ерітіндісініңмолярлықконцентрациясынесептеңдер.

Жауабы:с(HNO3)=0,1007M.

•2.Көлемі10мл0,1105МHClерітіндісінтитрлеуге0,0965МNaOHерітіндісініңқандайкөлеміжұмсалады?

Жауабы:11,45мл.

•3.Көлемі10мл0,1025МNaOHерітіндісінтитрлеуге0,0991МHClерітіндісініңқандайкөлеміжұмсалады?

Жауабы:10,34мл */


/**
 * Теміркеніндегітемір(III)оксидініңмассалықүлесі80%-ғатең.Егербірмашинажасауға1,2тметаллжұмсалса,47ткенненалынғанметалданқаншаавтомобильжасауғаболады?

Жауабы:22.

•2*.МагниттітеміртастағыFe3O4темірдіңмассалықүлесі64,15%.Осыкеннің5т-сынанқұрамында95%темірбаршойынныңқандаймассасыналуғаболады?Темірдіңөндірістікшығыны2,5%.

Жауабы:3,3т
 */

/**
 * Табиғибокситтегіалюминийоксидініңмассалықүлесі49%.Құрамында1,5%қоспасы8тбокситтенқаншаалюминийалуғаболады?

Жауабы:2,1т.

•2.Массасы20гсилуминді40%-дықнатрийгидроксидініңерітіндісіменөңдеді.Құймақұрамындағыалюминийдіңмассалықүлесі90%,кремний10%болса,құйманыерітугежұмсалатынгидроксидтіңмассасықанша?

Жауабы:80,95г
 */



/**
 * Құрамында32гмыссульфатыбарерітіндіге8,4гтемірұнтағынсалды.Түзілгенөнімдердіңмассасынанықтаңдар.

Жауабы:22,8гFeSO4,9,6гCu

•2.Массасы1,28гмыстыоттекағынындақыздырды.Нәтижесіндетүзілгензатты4%-дықтұзқышқылыныңерітіндісімен(ерітіндініңтығыздығы1,02г/см3)өңдеді.Жұмсалғантұзқышқылыныңкөлемінжәнетүзілгенмыс(II)хлоридініңмассасынесептеңдер.

Жауабы:35,78см3HCl,2,7гCuCl2
 */


/**
 * Құрамында90%метан,5%этан,3%көміртек(ІV)оксидіжәне2%азотболатынкөлемі50м3(қ.ж.)табиғигаздыжағуғанешелитр(қ.ж.)ауакерек?
CH4 + 2O2 -> CO2 + H2O 
2C2H6 + 7O2 -> 4CO2 + 6H2O 
2CO + O2 -> 2CO2
N2 + O2 -> 2NO
Жауабы:V(ауа)=493,75м3.
 */


/**
 * Белгісізалкан1,44гбромменәрекеттескенде4,64гбромалкантүзілді.Бастапқыалканныңқұрамынанықтаңдар.

Жауабы:C31H64.

•2*.Көлемі6,72л(қ.ж.)этанменпропанныңқоспасынжаққандатүзілгенкөмірқышқылгазынәксуыменөңдегенде80гтұнбатүзілді.Бастапқықоспаныңқұрамынанықтаңдар.

Жауабы:2,24лэтан;4,48лпропан
 */


/**
 * Хлорпрен(2-хлорбутадиен-1,3)оңайполимерленіп,хлорпренкөксағызынтүзеді.Хлорпренніңполимерленутеңдеуінжазыңдар.18мольхлоропренненалынатынполимердіңмассасынанықтаңдар.Өнімніңшығымы85%-ғатең.

Жауабы:1354г.

•2.Массасы1тсинтездіккөксағызалуүшін2-метилбутанныңқандаймассасынкатализдікдегидрлеугеұшыратуқажет?Дегидрлеусатысыныңшығымы60%,алполимерленупроцесініңшығымы95%-ғатең.

Жауабы:≈1,9т
 */

/**
 * Көлемі8лацетиленмен14лхлор(қ.ж.)әрекеттескендеқаншаграммтетрахлорэтаналынады?

Жауабы:105г.

•2.Көлемі3800м3ацетиленалуүшінқұрамында97%метанбартабиғигаздыңқаншакөлеміқажет?Метанныңацетиленгеайналудәрежесі50%-дықұрайды.

Жауабы:15670м3.

•3*Пропан,пропенжәнепропинніңмассасы4,96гқоспасынжаққанда8,06гкөмірқышқылгазытүзілді(қ.ж.).Түзілгенсудыңмассасынегетең?

Жауабы:5,76г.

•4.Құрамында10%қоспасыбар500гкальцийкарбидіненалынатынацетиленніңкөлемін(қ.ж.)есептеңдер.Өнімніңтеориялықмүмкіндікпенсалыстырғандағышығымы75%.

Жауабы:118,1л
 */

/**
 * Бензинқұрамы80%гептанизомерлеріненжәне20%октанизомерлерінентұрады.Осындайбензиннің30кг-ынжағуүшінқаншакөлемоттекжұмсалады?

Жауабы:73,9м3.

•2.Автомашина850кмжүргенде20кгбензинжұмсалды.Құрамы84,2%көміртекжәне15,8%сутектентұратынбензиндіжағуүшінқаншакөлемауақажет?

Жауабы:245,6м3.

•3.Трактордыңжанармайқұятынбагында60кгкеросинбар.86%көміртектенжәне14%сутектентұратынкеросиндіжағуүшінқаншакөлемоттекжұмсалады?

Жауабы:144м3
 */

/**
 * Табиғигазқұрамындағыметанныңмассалықүлесі96%.Осындай1 тгазданалы-натынметанныңмассасынесептеңдер.

Жауабы:960кг.

•2.Көлемі40л(қ.ж.)табиғигаздан30,3гхлорметаналынды.Теориялықмүмкіндікпенсалыстырғандағыхлорметанныңшығымы40%.Табиғигаздыңқұрамындағыметанныңмассалықүлесінесептеңдер.

Жауабы:84%.

•3.Табиғигаздыңқұрамындағы(көлемдікүлестері):метан95%,азот2%,көміртек (IV)оксиді3%.Газдыңосыүлгісінің4,48л(қ.ж.)өртеп,барлықгаздыңқоспасынартықмөлшердеалынғанкальцийгидроксидініңерітіндісіарқылыөткізді.Түзілгентұнбаныңмассасынесептеңдер.

Жауабы:19,6г
 */

/**
 * Массасы30гантрациттіжаққанда53,2л(қ.ж.)көмірқышқылгазыалынды.Антра-циттегікөмірдіңмассалықүлесінанықтаңдар.

Жауабы:95%.

•2.Құрамында82,2%көміртек,4,6%сутек,1%күкірт,4%оттек,1,2%азот,1%су;6%жанбайтынкүлбар30кгкөмірдіжағуүшінқаншакөлем(қ.ж.)ауақажет?

Жауабы:265,6м3
 */
// Құрамында82,2%көміртек,4,6%сутек,1%күкірт,4%оттек,1,2%азот,1%су;6%жанбайтынкүлбар30кгкөмірдіжағуүшінқаншакөлем(қ.ж.)ауақажет?








//array of question generation functions
const generateRandomQuestion = [generateAldehyde1, generateCarbAcid1, generateMixAlFe1, generateMixBurn1, generateAcidBaseMolarity,
    generateMixBurn2, ];


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
    //const data = generateRandomQuestion[5]();
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

function pickRandomElemWithoutF(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
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

