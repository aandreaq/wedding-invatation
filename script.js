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

            /* POZICIJA */

            glitter.style.left =
                Math.random() * 100 + "%";

            glitter.style.top =
                Math.random() * 100 + "%";


            /* VELIČINA */

            const size =
                Math.random() * 4 + 2;

            glitter.style.width =
                size + "px";

            glitter.style.height =
                size + "px";


            /* TRAJANJE */

            glitter.style.animationDuration =
                (Math.random() * 2.5 + 2) + "s";


            /* KAŠNJENJE */

            glitter.style.animationDelay =
                (Math.random() * 5) + "s";


            goldGlitter.appendChild(
                glitter
            );
        }


        /* VEĆE ZVEZDICE */

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


            goldGlitter.appendChild(
                star
            );
        }

    }


    /* =========================
       OTVARANJE + MUZIKA + VATROMET
    ========================= */

    if (openInvitation && fireworks) {

        openInvitation.addEventListener(
            "click",
            () => {

                /* =========================
                   MUZIKA
                   KREĆE OD 58. SEKUNDE
                ========================= */

                if (weddingMusic) {

                    weddingMusic.currentTime = 58;

                    weddingMusic.volume = 0.7;

                    weddingMusic.play()
                        .then(() => {

                            /*
                             * Čim muzika krene,
                             * čuvamo njenu trenutnu
                             * poziciju.
                             */

                            const saveMusicPosition =
                                () => {

                                    sessionStorage.setItem(
                                        "weddingMusicTime",
                                        weddingMusic.currentTime
                                    );

                                };

                            weddingMusic.addEventListener(
                                "timeupdate",
                                saveMusicPosition
                            );

                        })
                        .catch(error => {

                            console.log(
                                "Muzika nije mogla da se pokrene:",
                                error
                            );

                        });

                }


                /* =========================
                   VATROMET
                ========================= */

                fireworks.style.display =
                    "block";


                /* CENTRALNA EKSPLOZIJA */

                createFirework(
                    window.innerWidth * 0.50,
                    window.innerHeight * 0.45,
                    180,
                    420
                );


                /* GORE LEVO */

                setTimeout(() => {

                    createFirework(
                        window.innerWidth * 0.18,
                        window.innerHeight * 0.25,
                        120,
                        300
                    );

                }, 150);


                /* GORE DESNO */

                setTimeout(() => {

                    createFirework(
                        window.innerWidth * 0.82,
                        window.innerHeight * 0.25,
                        120,
                        300
                    );

                }, 280);


                /* SREDINA LEVO */

                setTimeout(() => {

                    createFirework(
                        window.innerWidth * 0.08,
                        window.innerHeight * 0.55,
                        100,
                        260
                    );

                }, 400);


                /* SREDINA DESNO */

                setTimeout(() => {

                    createFirework(
                        window.innerWidth * 0.92,
                        window.innerHeight * 0.55,
                        100,
                        260
                    );

                }, 500);


                /* DONJI LEVO */

                setTimeout(() => {

                    createFirework(
                        window.innerWidth * 0.28,
                        window.innerHeight * 0.75,
                        110,
                        280
                    );

                }, 620);


                /* DONJI DESNO */

                setTimeout(() => {

                    createFirework(
                        window.innerWidth * 0.72,
                        window.innerHeight * 0.75,
                        110,
                        280
                    );

                }, 720);


                /* VELIKA CENTRALNA EKSPLOZIJA */

                setTimeout(() => {

                    createFirework(
                        window.innerWidth * 0.50,
                        window.innerHeight * 0.38,
                        150,
                        380
                    );

                }, 850);


                /* =========================
                   PRELAZ NA MAIN.HTML
                ========================= */

                setTimeout(() => {

                    /*
                     * Sačuvaj trenutnu poziciju
                     * pesme neposredno pre prelaza.
                     */

                    if (weddingMusic) {

                        sessionStorage.setItem(
                            "weddingMusicTime",
                            weddingMusic.currentTime
                        );

                    }

                    window.location.href =
                        "main.html";

                }, 2100);

            }
        );

    }


    /* =========================
       NASTAVAK MUZIKE NA MAIN.HTML
    ========================= */

    if (
        weddingMusic &&
        window.location.pathname.includes("main.html")
    ) {

        const savedMusicTime =
            sessionStorage.getItem(
                "weddingMusicTime"
            );


        if (savedMusicTime !== null) {

            weddingMusic.currentTime =
                parseFloat(savedMusicTime);

        }

        weddingMusic.volume = 0.7;

        weddingMusic.play()
            .catch(error => {

                console.log(
                    "Muzika nije mogla da se nastavi:",
                    error
                );

            });


        /*
         * Nastavljamo da pamtimo poziciju
         * dok korisnik čita pozivnicu.
         */

        weddingMusic.addEventListener(
            "timeupdate",
            () => {

                sessionStorage.setItem(
                    "weddingMusicTime",
                    weddingMusic.currentTime
                );

            }
        );

    }


    /* =========================
       FUNKCIJA ZA VATROMET
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


            /* POZICIJA */

            particle.style.left =
                `${x}px`;

            particle.style.top =
                `${y}px`;


            /* PRAVAC */

            const angle =
                (Math.PI * 2 * i) /
                numberOfParticles;


            /* UDALJENOST */

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


            /* VELIČINA */

            const size =
                2 +
                Math.random() * 6;


            particle.style.width =
                `${size}px`;

            particle.style.height =
                `${size}px`;


            /* TRAJANJE */

            particle.style.animationDuration =
                `${1.5 + Math.random() * 0.8}s`;


            fireworks.appendChild(
                particle
            );


            /* UKLANJANJE */

            setTimeout(() => {

                particle.remove();

            }, 2300);

        }


        /* =========================
           KRUŽNI TALAS
        ========================= */

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


    /* =========================
       PADAJUĆE BELE LATICE
    ========================= */

    if (petalsContainer) {

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


            /* POZICIJA */

            petal.style.left =
                Math.random() * 100 +
                "%";


            /* VELIČINA */

            const size =
                Math.random() * 0.7 +
                0.6;

            petal.style.transform =
                `scale(${size})`;


            /* BRZINA */

            const duration =
                Math.random() * 7 +
                7;

            petal.style.animationDuration =
                duration + "s";


            /* KAŠNJENJE */

            const delay =
                Math.random() * 10;

            petal.style.animationDelay =
                "-" + delay + "s";


            /* NJIHANJE */

            const sway =
                Math.random() * 250 -
                125;

            petal.style.setProperty(
                "--sway",
                sway + "px"
            );


            petalsContainer.appendChild(
                petal
            );

        }

    }

});