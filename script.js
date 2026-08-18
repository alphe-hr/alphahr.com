/* =========================================
   BANGLAMEMEX
   MAIN JAVASCRIPT
========================================= */


/* ===============================
   MOBILE MENU
================================ */

function toggleMenu() {

    const nav =
        document.getElementById("navLinks");

    if (!nav) return;

    nav.classList.toggle("active");

}


/* ===============================
   CLOSE MOBILE MENU
================================ */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                const nav =
                    document.getElementById("navLinks");

                if (nav) {
                    nav.classList.remove("active");
                }

            }
        );

    });


/* ===============================
   MEME GENERATOR
================================ */

function generateMeme() {

    const top =
        document.getElementById("topText");

    const bottom =
        document.getElementById("bottomText");

    const style =
        document.getElementById("memeStyle");

    const preview =
        document.getElementById("preview");

    const topPreview =
        document.getElementById("previewTop");

    const bottomPreview =
        document.getElementById("previewBottom");


    if (
        !top ||
        !bottom ||
        !preview ||
        !topPreview ||
        !bottomPreview
    ) {
        return;
    }


    topPreview.innerText =
        top.value ||
        "তোমার মিম এখানে 😂";


    bottomPreview.innerText =
        bottom.value ||
        "কিছু লিখে দেখো!";


    if (style) {

        if (style.value === "school") {

            preview.style.background =
                "linear-gradient(135deg,#283b59,#101723)";

        }

        else if (style.value === "gaming") {

            preview.style.background =
                "linear-gradient(135deg,#42215e,#10131e)";

        }

        else if (style.value === "savage") {

            preview.style.background =
                "linear-gradient(135deg,#4a1725,#111217)";

        }

        else {

            preview.style.background =
                "linear-gradient(135deg,#29364a,#111721)";

        }

    }

}


/* ===============================
   RANDOM MEMES
================================ */

function randomMeme() {

    const memes = [

        [
            "ভাই কাল থেকে পড়বো",
            "কাল আসলেই আবার কালকে পড়বো 💀"
        ],

        [
            "মা: ফোনটা দে",
            "আমি: জীবনটা নাও, ফোনটা না 😭"
        ],

        [
            "Friend: ৫ মিনিটে আসছি",
            "২ ঘণ্টা পর: কোথায় গেলি ভাই?"
        ],

        [
            "WiFi: Connected",
            "Internet: আমার কিছু যায় আসে না 😂"
        ],

        [
            "Exam tomorrow",
            "আজকে YouTube-এ পড়াশোনা শুরু করি 🤡"
        ],

        [
            "Battery 1%",
            "এখনই আমার জীবনের সব গুরুত্বপূর্ণ কাজ মনে পড়ে"
        ],

        [
            "Salary এসেছে",
            "৩ দিন পরে: ভাই ২০০ টাকা ধার দিবি? 💀"
        ]

    ];


    const random =
        memes[
            Math.floor(
                Math.random() *
                memes.length
            )
        ];


    const top =
        document.getElementById("topText");

    const bottom =
        document.getElementById("bottomText");


    if (!top || !bottom) return;


    top.value = random[0];

    bottom.value = random[1];


    generateMeme();

}


/* ===============================
   CLEAR MEME
================================ */

function clearMeme() {

    const top =
        document.getElementById("topText");

    const bottom =
        document.getElementById("bottomText");


    if (top) top.value = "";

    if (bottom) bottom.value = "";


    generateMeme();

}


/* ===============================
   SCROLL REVEAL
================================ */

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


/* ===============================
   ADD REVEAL CLASS
================================ */

document
    .querySelectorAll(
        ".meme-card, .category, .trend-item, .about-box, .quote-box"
    )
    .forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );

            observer.observe(element);

        }
    );


/* ===============================
   ACTIVE NAV LINK
================================ */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    function () {

        let current = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) === "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* ===============================
   RANDOM EMOJI BACKGROUND
================================ */

const emojis = [
    "😂",
    "🤣",
    "💀",
    "🔥",
    "😭",
    "🤡",
    "😎",
    "🇧🇩"
];


function createFloatingEmoji() {

    const emoji =
        document.createElement("div");


    emoji.className =
        "emoji";


    emoji.innerText =
        emojis[
            Math.floor(
                Math.random() *
                emojis.length
            )
        ];


    emoji.style.left =
        Math.random() * 100 + "%";


    emoji.style.bottom =
        "-60px";


    emoji.style.animationDuration =
        (8 + Math.random() * 8) + "s";


    emoji.style.fontSize =
        (20 + Math.random() * 25) + "px";


    document.body.appendChild(
        emoji
    );


    setTimeout(
        function () {

            emoji.remove();

        },
        17000
    );

}


setInterval(
    createFloatingEmoji,
    1800
);


/* ===============================
   PAGE LOADED
================================ */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        generateMeme();

        console.log(
            "😂 BanglaMemeX loaded successfully!"
        );

    }
);
