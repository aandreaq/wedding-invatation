document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTI
    ========================= */

    const openInvitation =
        document.getElementById("openInvitation");

    const fireworks =
        document.getElementById("fireworks");

    const petalsContainer =
        document.getElementById("petals");

    const goldGlitter =
        document.getElementById("goldGlitter");

    const weddingMusic =
        document.getElementById("weddingMusic");


    /* =========================
       ZLATNI GLITTER
    ========================= */

    if (goldGlitter) {

        const glitterCount = 75;

        for (let i = 0; i < glitterCount; i++) {

            const glitter =
                document.createElement("span");

            glitter.classList.add("glitter");

            glitter.style.left =
                Math.random() * 100 + "%";

            glitter.style.top =
                Math.random() * 100 + "%";

            const size =
                Math.random() * 4 + 2;

            glitter.style.width =
                size + "px";

            glitter.style.height =
                size + "px";

            glitter.style.animationDuration =
                (Math.random() * 2.5 + 2) + "s";

            glitter.style.animationDelay =
                (Math.random() * 5) + "s";

            goldGlitter.appendChild(glitter);
        }


        const starCount = 22;

        for (let i = 0; i < starCount; i++) {

            const star =
                document.createElement("span");

            star.classList.add(
                "glitter",
                "star"
            );

            star.textContent = "✦";

            star.style.left =
                Math.random() * 100 + "%";

            star.style.top =
                Math.random() * 100 + "%";

            star.style.fontSize =
                (Math.random() * 10 + 9) + "px";

            star.style.animationDuration =
                (Math.random() * 3 + 2) + "s";

            star.style.animationDelay =
                (Math.random() * 5) + "s";

            goldGlitter.appendChild(star);
        }
    }


    /* =========================
       OTVARANJE POZIVNICE
    ========================= */

    if (openInvitation && fireworks) {

        openInvitation.addEventListener("click", async () => {

            /* =========================
               MUZIKA
            ========================= */

            if (weddingMusic) {

                weddingMusic.currentTime = 58;
                weddingMusic.volume = 0.7;

                try {
                    await weddingMusic.play();
                } catch (error) {
                    console.log(
                        "Muzika nije mogla automatski da se pokrene:",
                        error
                    );
                }
            }


            /* =========================
               VATROMET
            ========================= */

            fireworks.style.display = "block";


            createFirework(
                window.innerWidth * 0.50,
                window.innerHeight * 0.45,
                180,
                420
            );


            setTimeout(() => {

                createFirework(
                    window.innerWidth * 0.18,
                    window.innerHeight * 0.25,
                    120,
                    300
                );

            }, 150);


            setTimeout(() => {

                createFirework(
                    window.innerWidth * 0.82,
                    window.innerHeight * 0.25,
                    120,
                    300
                );

            }, 280);


            setTimeout(() => {

                createFirework(
                    window.innerWidth * 0.08,
                    window.innerHeight * 0.55,
                    100,
                    260
                );

            }, 400);


            setTimeout(() => {

                createFirework(
                    window.innerWidth * 0.92,
                    window.innerHeight * 0.55,
                    100,
                    260
                );

            }, 500);


            setTimeout(() => {

                createFirework(
                    window.innerWidth * 0.28,
                    window.innerHeight * 0.75,
                    110,
                    280
                );

            }, 620);


            setTimeout(() => {

                createFirework(
                    window.innerWidth * 0.72,
                    window.innerHeight * 0.75,
                    110,
                    280
                );

            }, 720);


            setTimeout(() => {

                createFirework(
                    window.innerWidth * 0.50,
                    window.innerHeight * 0.38,
                    150,
                    380
                );

            }, 850);


            /* =========================
               PRELAZ NA POZIVNICU
            ========================= */

            setTimeout(async () => {

                await openMainInvitation();

            }, 2100);

        });

    }


    /* =========================
       OTVORI MAIN SADRŽAJ
       BEZ NOVOG UČITAVANJA
    ========================= */

    async function openMainInvitation() {

        try {

            const response =
                await fetch("main.html");

            if (!response.ok) {
                throw new Error(
                    "main.html nije pronađen."
                );
            }

            const html =
                await response.text();


            const parser =
                new DOMParser();

            const mainDocument =
                parser.parseFromString(
                    html,
                    "text/html"
                );


            /*
             * Sačuvaj audio element koji
             * trenutno svira.
             */

            const music =
                document.getElementById(
                    "weddingMusic"
                );


            /*
             * Uzimamo samo sadržaj body-ja
             * iz main.html.
             */

            const newBodyContent =
                mainDocument.body.innerHTML;


            /*
             * Izbacujemo script tag iz
             * main.html da se script.js
             * ne pokrene ponovo.
             */

            const temporary =
                document.createElement("div");

            temporary.innerHTML =
                newBodyContent;


            const scripts =
                temporary.querySelectorAll(
                    "script"
                );

            scripts.forEach(script => {
                script.remove();
            });


            /*
             * Menjamo sadržaj body-ja.
             */

            document.body.innerHTML =
                temporary.innerHTML;


            /*
             * Vraćamo audio element
             * nazad u novu stranicu.
             */

            if (music) {
                document.body.appendChild(music);
            }


            /*
             * Promena URL-a bez reload-a.
             */

            window.history.pushState(
                {},
                "",
                "main.html"
            );


            /*
             * Ponovo pokrećemo samo
             * funkcionalnosti main stranice.
             */

            initializeMainPage();


        } catch (error) {

            console.error(
                "Greška pri otvaranju pozivnice:",
                error
            );

            /*
             * Ako fetch ne uspe,
             * vraćamo klasičan prelaz.
             */

            window.location.href =
                "main.html";
        }

    }


    /* =========================
       MAIN STRANICA
    ========================= */

    function initializeMainPage() {

        const music =
            document.getElementById(
                "weddingMusic"
            );


        /*
         * Osiguravamo da muzika
         * nastavi da svira.
         */

        if (music) {

            music.volume = 0.7;

            if (music.paused) {

                music.play().catch(() => {
                    console.log(
                        "Telefon je blokirao nastavak muzike."
                    );
                });

            }
        }


        /* =========================
           LATICE
        ========================= */

        const petals =
            document.querySelector(
                "#petals"
            );

        if (petals) {

            const numberOfPetals = 45;

            for (
                let i = 0;
                i < numberOfPetals;
                i++
            ) {

                const petal =
                    document.createElement("div");

                petal.classList.add(
                    "petal"
                );

                petal.style.left =
                    Math.random() * 100 + "%";

                const size =
                    Math.random() * 0.7 + 0.6;

                petal.style.transform =
                    `scale(${size})`;

                const duration =
                    Math.random() * 7 + 7;

                petal.style.animationDuration =
                    duration + "s";

                const delay =
                    Math.random() * 10;

                petal.style.animationDelay =
                    "-" + delay + "s";

                const sway =
                    Math.random() * 250 - 125;

                petal.style.setProperty(
                    "--sway",
                    sway + "px"
                );

                petals.appendChild(petal);
            }
        }

    }


    /* =========================
       VATROMET
    ========================= */

    function createFirework(
        x,
        y,
        numberOfParticles,
        maxDistance
    ) {

        for (
            let i = 0;
            i < numberOfParticles;
            i++
        ) {

            const particle =
                document.createElement("span");

            particle.classList.add(
                "firework"
            );

            particle.style.left =
                `${x}px`;

            particle.style.top =
                `${y}px`;

            const angle =
                (Math.PI * 2 * i) /
                numberOfParticles;

            const distance =
                80 +
                Math.random() *
                maxDistance;

            const moveX =
                Math.cos(angle) *
                distance;

            const moveY =
                Math.sin(angle) *
                distance;

            particle.style.setProperty(
                "--x",
                `${moveX}px`
            );

            particle.style.setProperty(
                "--y",
                `${moveY}px`
            );

            const size =
                2 +
                Math.random() * 6;

            particle.style.width =
                `${size}px`;

            particle.style.height =
                `${size}px`;

            particle.style.animationDuration =
                `${1.5 + Math.random() * 0.8}s`;

            fireworks.appendChild(
                particle
            );

            setTimeout(() => {
                particle.remove();
            }, 2300);

        }


        const ring =
            document.createElement("span");

        ring.classList.add(
            "firework-ring"
        );

        ring.style.setProperty(
            "--ring-x",
            `${x}px`
        );

        ring.style.setProperty(
            "--ring-y",
            `${y}px`
        );

        fireworks.appendChild(
            ring
        );

        setTimeout(() => {
            ring.remove();
        }, 1600);

    }

});