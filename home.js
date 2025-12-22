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


const scenarios = [
    {
        text: "A caller claims to be from tech support saying your computer has a virus and needs immediate remote access.",
        wrong: "Give them remote access to your computer",
        right: "Hang up and contact the company directly using official contact information"
    },
    {
        text: "You receive an email claiming your account will be suspended unless you verify your password immediately.",
        wrong: "Click the link and enter your password",
        right: "Go directly to the official website and check your account status"
    },
    {
        text: 'You get a text about suspicious activity on your credit card with a link to "verify" your account.',
        wrong: "Click the link and enter your card details",
        right: "Call the number on the back of your card to verify"
    },
    {
        text: 'A friend sends you a message with a shortened link saying "Is this you in this video?"',
        wrong: "Click the link immediately out of curiosity",
        right: "Contact your friend through another method to verify they sent it"
    }
];

