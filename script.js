/* ==================================================
   PASSWORD
================================================== */

const secretPassword = "24Jan03";


function checkPassword() {

    const input =
        document.getElementById(
            "passwordInput"
        );

    const passwordPage =
        document.getElementById(
            "passwordPage"
        );

    const error =
        document.getElementById(
            "passwordError"
        );


    if (
        input.value === secretPassword
    ) {

        error.classList.remove(
            "show"
        );


        passwordPage.style.opacity =
            "0";


        setTimeout(function () {

            passwordPage.style.display =
                "none";

            document.body.style.overflowY =
                "auto";

        }, 700);


    } else {

        error.classList.add(
            "show"
        );

        input.value = "";

        input.focus();

    }

}


function checkEnter(event) {

    if (
        event.key === "Enter"
    ) {

        checkPassword();

    }

}


/* ==================================================
   LETTER CONTENT
================================================== */

const letterParagraphs = [

    "I like you. You don't have to feel the same, and I won't love you any less for it.",

    "I just think you're too beautiful of a soul to leave these words unsaid.",

    "Maybe God brought you into my life for a reason, maybe only for a season.",

    "I don't know what tomorrow holds.",

    "So before it arrives, I just wanted you to know that you became someone my heart is grateful to have met.",

    "And whatever happens from here, I'm still glad our paths crossed. ♡"

];


/* ==================================================
   OPEN WHEN CONTENT
================================================== */

const notes = {

    1: {

        icon: "☁️",

        title: "Open when you're tired",

        text:
            "You don't always have to have everything figured out. Rest when you need to. Take things one moment at a time. And please remember to take care of yourself too, okay?"

    },


    2: {

        icon: "☀️",

        title: "Open when you need a smile",

        text:
            "This is your reminder that somewhere out there, someone is probably smiling just because she thought about you. So... smile a little. ♡"

    },


    3: {

        icon: "🌙",

        title: "Open when you're feeling sad",

        text:
            "It's okay to have days that feel a little heavier than others. You don't have to pretend you're okay all the time. Be gentle with yourself, okay? This little note is just here to remind you that brighter days will come. ♡"

    }

};


/* ==================================================
   OPEN ENVELOPE
================================================== */

function openEnvelope() {

    const envelope =
        document.getElementById(
            "envelope"
        );

    const envelopeWrapper =
        document.getElementById(
            "envelopeWrapper"
        );

    const envelopePage =
        document.getElementById(
            "envelopePage"
        );

    const clickText =
        document.querySelector(
            ".click-text"
        );


    if (
        envelope.classList.contains(
            "open"
        )
    ) {

        return;

    }


    envelope.classList.add(
        "open"
    );


    envelopeWrapper.classList.add(
        "opening"
    );


    clickText.style.opacity =
        "0";


    setTimeout(function () {

        envelopePage.style.display =
            "none";

        showLetter();

    }, 1500);

}


/* ==================================================
   SHOW LETTER
================================================== */

function showLetter() {

    const letterPage =
        document.getElementById(
            "letterPage"
        );

    const handwrittenText =
        document.getElementById(
            "handwrittenText"
        );

    const cursor =
        document.getElementById(
            "writingCursor"
        );

    const signature =
        document.getElementById(
            "signature"
        );


    letterPage.style.display =
        "block";


    handwrittenText.innerHTML =
        "";


    cursor.style.opacity =
        "1";


    signature.classList.remove(
        "show"
    );


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });


    setTimeout(function () {

        writeParagraph(0);

    }, 900);

}


/* ==================================================
   WRITE PARAGRAPH
================================================== */

function writeParagraph(
    paragraphIndex
) {

    const handwrittenText =
        document.getElementById(
            "handwrittenText"
        );


    if (
        paragraphIndex >=
        letterParagraphs.length
    ) {

        finishWriting();

        return;

    }


    const paragraph =
        document.createElement(
            "div"
        );


    paragraph.classList.add(
        "handwritten-paragraph"
    );


    handwrittenText.appendChild(
        paragraph
    );


    const text =
        letterParagraphs[
            paragraphIndex
        ];


    let characterIndex =
        0;


    function typeCharacter() {

        if (
            characterIndex <
            text.length
        ) {

            const currentCharacter =
                text.charAt(
                    characterIndex
                );


            paragraph.textContent +=
                currentCharacter;


            characterIndex++;


            let speed =
                30;


            if (
                currentCharacter ===
                " "
            ) {

                speed =
                    15;

            }


            if (
                currentCharacter ===
                    "." ||
                currentCharacter ===
                    ","
            ) {

                speed =
                    80;

            }


            setTimeout(
                typeCharacter,
                speed
            );


        } else {

            setTimeout(function () {

                writeParagraph(
                    paragraphIndex + 1
                );

            }, 450);

        }

    }


    typeCharacter();

}


/* ==================================================
   FINISH WRITING
================================================== */

function finishWriting() {

    const cursor =
        document.getElementById(
            "writingCursor"
        );

    const signature =
        document.getElementById(
            "signature"
        );


    cursor.style.opacity =
        "0";


    setTimeout(function () {

        signature.classList.add(
            "show"
        );

    }, 500);

}


/* ==================================================
   SHOW EXTRA SECTION
================================================== */

function showExtraSection(
    section
) {

    const letterPage =
        document.getElementById(
            "letterPage"
        );

    const thingsSection =
        document.getElementById(
            "thingsSection"
        );

    const openWhenSection =
        document.getElementById(
            "openWhenSection"
        );


    letterPage.style.display =
        "none";

    thingsSection.style.display =
        "none";

    openWhenSection.style.display =
        "none";


    if (
        section === "things"
    ) {

        thingsSection.style.display =
            "block";

    }


    if (
        section === "openwhen"
    ) {

        openWhenSection.style.display =
            "block";

    }


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* ==================================================
   BACK TO LETTER
================================================== */

function backToLetter() {

    const letterPage =
        document.getElementById(
            "letterPage"
        );

    const thingsSection =
        document.getElementById(
            "thingsSection"
        );

    const openWhenSection =
        document.getElementById(
            "openWhenSection"
        );


    thingsSection.style.display =
        "none";

    openWhenSection.style.display =
        "none";

    letterPage.style.display =
        "block";


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* ==================================================
   OPEN NOTE
================================================== */

function openNote(
    noteNumber
) {

    const note =
        notes[
            noteNumber
        ];


    const popup =
        document.getElementById(
            "notePopup"
        );

    const popupIcon =
        document.getElementById(
            "popupIcon"
        );

    const popupTitle =
        document.getElementById(
            "popupTitle"
        );

    const popupText =
        document.getElementById(
            "popupText"
        );


    popupIcon.textContent =
        note.icon;


    popupTitle.textContent =
        note.title;


    popupText.textContent =
        note.text;


    popup.classList.add(
        "show"
    );

}


/* ==================================================
   CLOSE NOTE
================================================== */

function closeNote() {

    const popup =
        document.getElementById(
            "notePopup"
        );


    popup.classList.remove(
        "show"
    );

}


/* ==================================================
   BACK TO ORIGINAL ENVELOPE
================================================== */

function backToEnvelope() {

    const envelopePage =
        document.getElementById(
            "envelopePage"
        );

    const letterPage =
        document.getElementById(
            "letterPage"
        );

    const thingsSection =
        document.getElementById(
            "thingsSection"
        );

    const openWhenSection =
        document.getElementById(
            "openWhenSection"
        );


    letterPage.style.display =
        "none";

    thingsSection.style.display =
        "none";

    openWhenSection.style.display =
        "none";


    envelopePage.style.display =
        "flex";


    resetEnvelope();


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* ==================================================
   RESET ENVELOPE
================================================== */

function resetEnvelope() {

    const envelope =
        document.getElementById(
            "envelope"
        );

    const envelopeWrapper =
        document.getElementById(
            "envelopeWrapper"
        );

    const clickText =
        document.querySelector(
            ".click-text"
        );


    envelope.classList.remove(
        "open"
    );


    envelopeWrapper.classList.remove(
        "opening"
    );


    clickText.style.opacity =
        "0.65";

}