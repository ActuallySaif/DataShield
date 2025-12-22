let statsSec = document.getElementById("stats");

let cards = [
    {
        statOrd: "01",
        statIcon: "Images/Icons/stat1.svg",
        statNum: "90%",
        statSub: "of cyber attacks start with phishing"
    },
    {
        statOrd: "02",
        statIcon: "Images/Icons/stat2.svg",
        statNum: "1 in 3%",
        statSub: "users clicked a suspicious link"
    },
    {
        statOrd: "03",
        statIcon: "Images/Icons/stat3.svg",
        statNum: "$1000s",
        statSub: "lost yearly to online scams"
    }
]

for (i = 0; i < cards.length; i++) {

    statsSec.innerHTML += 
    `
         <div class="statCard">
                <p class="statOrd">${cards[i].statOrd}</p>
                <div class="statCardContent">
                    <img src="${cards[i].statIcon}" alt="">
                    <p class="statNum">${cards[i].statNum}</p>
                    <p class="statSub">${cards[i].statSub}</p>
                </div>
            </div>
    `;

}


let scenarios = [
    {
        text: "A caller claims to be from tech support saying your computer has a virus and needs immediate remote access.",
        wrong: "Give them remote access to your computer",
        right: "Hang up and contact the company directly using official contact information",
        btnId1: "sQuestion1",
        btnId2: "sQuestion2"
    },
    {
        text: "You receive an email claiming your account will be suspended unless you verify your password immediately.",
        wrong: "Click the link and enter your password",
        right: "Go directly to the official website and check your account status",
        btnId1: "sQuestion3",
        btnId2: "sQuestion4"
    },
    {
        text: 'You get a text about suspicious activity on your credit card with a link to "verify" your account.',
        wrong: "Click the link and enter your card details",
        right: "Call the number on the back of your card to verify",
        btnId1: "sQuestion5",
        btnId2: "sQuestion6"
    },
    {
        text: 'A friend sends you a message with a shortened link saying "Is this you in this video?"',
        wrong: "Click the link immediately out of curiosity",
        right: "Contact your friend through another method to verify they sent it",
        btnId1: "sQuestion7",
        btnId2: "sQuestion8"
    }
];

let scenarioSec = document.getElementById("scenarioGrid");
let sQuestion = document.getElementById("sQuestion");



for (i = 0; i < scenarios.length; i++) {

    scenarioSec.innerHTML += `
        <div class="scenarioCard">
                    <p class="scenarioText">${scenarios[i].text}</p>
                    <div class="scenarioOption">
                        <img src="Images/Icons/wrong.svg" alt="">
                        <div class="answer">
                            <p class="wrong">Common Mistake</p>
                            <p class="answerText">${scenarios[i].wrong}</p>
                        </div>
                        <button class="sQuestion">
                            ${scenarios[i].wrong}
                        </button>
                    </div>
                    <div class="scenarioOption">
                        <img src="Images/Icons/correct.svg" alt="">
                        <div class="answer">
                            <p class="correct">Correct Action</p>
                            <p class="answerText">${scenarios[i].right}</p>
                        </div>
                        <button class="sQuestion">
                            ${scenarios[i].right}
                        </button>
                    </div>
                </div>
    `
}

scenarioSec.addEventListener("click", function (e) {
    if (!e.target.classList.contains("sQuestion")) return;

    const option = e.target.closest(".sQuestion");
    option.style.opacity = "0";
});

const facts = [
    {
        icon: "🔒",
        text: "Passwords should be at least 12 characters long and include numbers, symbols, and mixed case letters"
    },
    {
        icon: "📧",
        text: "95% of cybersecurity breaches are caused by human error, not technology failures"
    },
    {
        icon: "🎣",
        text: "Phishing emails have a 30% open rate, making them one of the most effective attack methods"
    },
    {
        icon: "⚠️",
        text: "Cybercrime damages are projected to reach $10.5 trillion annually by 2025"
    },
    {
        icon: "🛡️",
        text: "Two-factor authentication blocks 99.9% of automated attacks on your accounts"
    },
    {
        icon: "💻",
        text: "A new phishing site is created every 20 seconds worldwide"
    }
];

const factsGrid = document.getElementById('factsGrid');
facts.forEach(fact => {
    factsGrid.innerHTML += `
        <div class="factCard">
            <div class="factIcon">${fact.icon}</div>
            <p class="factText">${fact.text}</p>
        </div>
    `;
});


const readMoreBtn = document.getElementById('readMoreBtn');
const learnExpanded = document.getElementById('learnExpanded');

readMoreBtn.addEventListener('click', () => {
    if (learnExpanded.classList.contains('show')) {
        learnExpanded.classList.remove('show');
        readMoreBtn.textContent = 'Read More';
    } else {
        learnExpanded.classList.add('show');
        readMoreBtn.textContent = 'Read Less';
    }
});



