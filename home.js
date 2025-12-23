window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2400);
});




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

let factsGrid = document.getElementById('factsGrid');
facts.forEach(fact => {
    factsGrid.innerHTML += `
        <div class="factCard">
            <div class="factIcon">${fact.icon}</div>
            <p class="factText">${fact.text}</p>
        </div>
    `;
});


let readMoreBtn = document.getElementById('readMoreBtn');
let learnExpanded = document.getElementById('learnExpanded');

readMoreBtn.addEventListener('click', () => {
    if (learnExpanded.classList.contains('show')) {
        learnExpanded.classList.remove('show');
        readMoreBtn.textContent = 'Read More';
    } else {
        learnExpanded.classList.add('show');
        readMoreBtn.textContent = 'Read Less';
    }
});

let tips = [
    "Never share your password with anyone, even if they claim to be from IT support",
    "Always verify the sender's email address before clicking any links",
    "Use unique passwords for different accounts to prevent cascading breaches",
    "Enable two-factor authentication on all your important accounts",
    "Be suspicious of messages creating false urgency or pressure",
    "Hover over links to see the actual URL before clicking",
    "Keep your software and operating system updated with latest security patches",
    "Use a password manager to generate and store strong passwords",
    "Be cautious of unexpected attachments, even from known contacts",
    "Check for HTTPS and a padlock icon before entering sensitive information"
];

let tipText = document.getElementById("tipText");
let randomTip = Math.floor(Math.random() * tips.length);

tipText.innerHTML = tips[randomTip];





let currentSlide = 0;
let sliderTrack = document.getElementById('sliderTrack');

let galImages = [
    {
        img : 'Images/Gal1',
        text: 'Protect Your Privacy',
        placeholderId: 'slidePlaceholder1',
        funcName: 'openLightBox1()'
    },
    {
        img: 'Images/Gal2',
        text: 'Protect Your Privacy',
        placeholderId: 'slidePlaceholder2',
        funcName: 'openLightBox2()'
    }, {
        img: 'Images/Gal3',
        text: 'Protect Your Privacy',
        placeholderId: 'slidePlaceholder3',
        funcName: 'openLightBox3()'
    }, {
        img: 'Images/Gal4',
        text: 'Protect Your Privacy',
        placeholderId: 'slidePlaceholder4',
        funcName: 'openLightBox4()'
    }
]

for (i = 0; i < galImages.length; i++) {
    sliderTrack.innerHTML += `
        <div class="slide" data-img="${galImages[i].img}" onclick="${galImages[i].funcName}">
            <div id="${galImages[i].placeholderId}">
                 <p>${galImages[i].text}</p>
            </div>
        </div>
    `
}

let slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;
let sliderDots = document.getElementById('sliderDots');



// Create dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    sliderDots.appendChild(dot);
}

function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentSlide * 1080}px)`;

    // Update dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

document.getElementById('sliderNext').addEventListener('click', nextSlide);
document.getElementById('sliderPrev').addEventListener('click', prevSlide);

let lightboxImg = [
    {
        img: 'Images/Gal1',
        lbImgId: 'lightBoxImg1'
    },
    {
        img: 'Images/Gal2',
        lbImgId: 'lightBoxImg2'
    },
    {
        img: 'Images/Gal3',
        lbImgId: 'lightBoxImg3'
    },
    {
        img: 'Images/Gal4',
        lbImgId: 'lightBoxImg4'
    },
]

let lightbox = document.getElementById('lightBox');

for (i = 0; i < lightboxImg.length; i++) {
    lightbox.innerHTML += `
        <div id="${lightboxImg[i].lbImgId}">
                <img id="closeBtn" src="Images/close.svg" alt="" onclick="closeLightBox()">
            </div>
    `
}

let img1 = document.getElementById("slidePlaceholder1");
let lightboxImg1 = document.getElementById("lightBoxImg1");
let lightboxImg2 = document.getElementById("lightBoxImg2");
let lightboxImg3 = document.getElementById("lightBoxImg3");
let lightboxImg4 = document.getElementById("lightBoxImg4");

function openLightBox1() {
    lightboxImg1.style.display = 'block';
}

function openLightBox2() {
    lightboxImg2.style.display = 'block';
}

function openLightBox3() {
    lightboxImg3.style.display = 'block';
}

function openLightBox4() {
    lightboxImg4.style.display = 'block';
}

function closeLightBox() {
    lightboxImg1.style.display = 'none';
    lightboxImg2.style.display = 'none';
    lightboxImg3.style.display = 'none';
    lightboxImg4.style.display = 'none';
}

let themeSwitcher = document.getElementById("themeSwitcher");

themeSwitcher.addEventListener("click", () => {
    document.body.classList.toggle('lightMode');
})






function saveFormData() {
    let contactName = document.getElementById("name").value;
    let contactEmail = document.getElementById("email").value;
    let contactSubject = document.getElementById("subject").value;
    let contactMsg = document.getElementById("message").value;
    let formErrMsg = document.getElementById("formErrMsg");
    let formSuccessMsg = document.getElementById("formSuccessMsg");

    localStorage.setItem("localContactName", contactName);
    localStorage.setItem("localContactEmail", contactEmail);
    localStorage.setItem("localContactSubject", contactSubject);
    localStorage.setItem("localContactMsg", contactMsg);

    if (contactName == "" || contactEmail == "" || contactSubject == "" || contactMsg == "") {
        formErrMsg.style.display = 'inline'
    } else {
        formSuccessMsg.style.display = 'inline'
        formErrMsg.style.display = 'none'
    }
}

