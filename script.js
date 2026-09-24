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


    /* =========================
       OTVARANJE + LUKSUZNI VATROMET
    ========================= */

    if (openInvitation && fireworks) {

        openInvitation.addEventListener("click", () => {

            fireworks.style.display = "block";


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


            /* JOŠ JEDNA VELIKA CENTRALNA EKSPLOZIJA */

            setTimeout(() => {

                createFirework(
                    window.innerWidth * 0.50,
                    window.innerHeight * 0.38,
                    150,
                    380
                );

            }, 850);


            /* PRELAZAK NA MAIN.HTML */

            setTimeout(() => {

                window.location.href = "main.html";

            }, 2100);

        });

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

        /* ČESTICE */

        for (
            let i = 0;
            i < numberOfParticles;
            i++
        ) {

            const particle =
                document.createElement("span");

            particle.classList.add("firework");


            /* POČETNA POZICIJA */

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
                Math.random() * maxDistance;


            const moveX =
                Math.cos(angle) *
                distance;

            const moveY =
                Math.sin(angle) *
                distance;


            /* CSS VARIJABLE */

            particle.style.setProperty(
                "--x",
                `${moveX}px`
            );

            particle.style.setProperty(
                "--y",
                `${moveY}px`
            );


            /* NASUMIČNA VELIČINA */

            const size =
                2 +
                Math.random() * 6;


            particle.style.width =
                `${size}px`;

            particle.style.height =
                `${size}px`;


            /* NASUMIČNO TRAJANJE */

            particle.style.animationDuration =
                `${1.5 + Math.random() * 0.8}s`;


            /* DODAJ NA EKRAN */

            fireworks.appendChild(
                particle
            );


            /* UKLONI */

            setTimeout(() => {

                particle.remove();

            }, 2300);

        }


        /* =========================
           KRUŽNI TALAS EKSPLOZIJE
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


            /* NASUMIČNA HORIZONTALNA POZICIJA */

            petal.style.left =
                Math.random() * 100 +
                "%";


            /* NASUMIČNA VELIČINA */

            const size =
                Math.random() * 0.7 +
                0.6;

            petal.style.transform =
                `scale(${size})`;


            /* NASUMIČNA BRZINA */

            const duration =
                Math.random() * 7 +
                7;

            petal.style.animationDuration =
                duration + "s";


            /* LATICE SU ODMAH RASPOREĐENE */

            const delay =
                Math.random() * 10;

            petal.style.animationDelay =
                "-" + delay + "s";


            /* NJIHANJE LEVO-DESNO */

            const sway =
                Math.random() * 250 -
                125;

            petal.style.setProperty(
                "--sway",
                sway + "px"
            );


            /* DODAJ LATICE */

            petalsContainer.appendChild(
                petal
            );

        }

    }

});