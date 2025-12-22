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


// Interactive Scenarios Data
const scenarios = [
    {
        text: "You receive an email claiming your bank account will be closed unless you verify your information immediately.",
        wrong: "Click the link and enter your banking credentials to prevent account closure",
        right: "Contact your bank directly using their official phone number or website to verify"
    },
    {
        text: "A message from 'IT Support' asks you to share your password to fix a system issue.",
        wrong: "Reply with your password to help IT resolve the problem quickly",
        right: "Never share passwords. Contact IT through official channels to verify the request"
    },
    {
        text: "You see a social media post offering free gift cards. You just need to click and enter personal details.",
        wrong: "Click the link and provide your information to claim the free gift card",
        right: "Ignore it. Legitimate companies don't require personal details for free offers"
    },
    {
        text: "An email says you've won a lottery you never entered. Click to claim your prize!",
        wrong: "Click the link and fill out the form to receive your winnings",
        right: "Delete it. You can't win a lottery you didn't enter. It's a scam"
    }
];

// Generate Scenario Cards
const scenarioGrid = document.getElementById('scenarioGrid');
scenarios.forEach((scenario, index) => {
    scenarioGrid.innerHTML += `
        <div class="scenarioCard">
            <p class="scenarioText">${scenario.text}</p>
            <div class="scenarioOption scenarioWrong">
                <span class="optionLabel">❌ Common Mistake:</span>
                ${scenario.wrong}
            </div>
            <div class="scenarioOption scenarioRight">
                <span class="optionLabel">✅ Correct Action:</span>
                ${scenario.right}
            </div>
        </div>
    `;
});

// Fact Cards Data
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

// Generate Fact Cards
const factsGrid = document.getElementById('factsGrid');
facts.forEach(fact => {
    factsGrid.innerHTML += `
        <div class="factCard">
            <div class="factIcon">${fact.icon}</div>
            <p class="factText">${fact.text}</p>
        </div>
    `;
});

// Read More / Read Less Functionality
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

// Random Tip Generator
const tips = [
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

// Display Random Tip
const tipText = document.getElementById('tipText');
const randomTip = tips[Math.floor(Math.random() * tips.length)];
tipText.textContent = randomTip;

// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderTrack = document.getElementById('sliderTrack');
const sliderDots = document.getElementById('sliderDots');

// Create dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    sliderDots.appendChild(dot);
}

function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

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

// Auto-advance slider every 5 seconds
setInterval(nextSlide, 5000);

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});