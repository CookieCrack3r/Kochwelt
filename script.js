let recipeIndex = localStorage.getItem("recipeIndex");
const recipes = [
    
    [
        "Fischfilet und Ofengemüse",
        "./img/fish-vegetables.jpg",
        [
            "60 Min.",
            "mittel",
            "21.06.2023"
        ],
        [
            [250, "g Kartoffeln"],
            [250, "g Karotten"],
            [1, "EL Olivenöl"],
            [null, "Salz und Pfeffer"],
            [0.5, " Bund Dill"],
            [1, " Limette(n)"],
            [1, " Fischfilet"],
            [null, "roter Pfeffer"]
        ],
        [
            "ca.30 Min.",
            "Gesamtzeit: ca. 60 Min."
        ],
        "Kartoffeln und Möhren waschen, schälen und in Spalten schneiden. Mit Öl, Salz und Pfeffer in eine Schüssel geben und vermengen. Auf Backblech verteilen und bei 180°C Heißluft für ca. 30 Minuten backen. In der Zwischenzeit Fischfilet in Olivenöl von beiden Seiten braten. Dill waschen und Spitzen abzupfen. Fisch auf Ofengemüse anrichten, mit rotem Pfeffer und Dill bestreuen, mit Limettensaft beträufeln und mit Limettenspalten dekorieren.",
        "./img/jan.jpeg",
        "Jan"
    ],
    [
        "Spinatlasagne",
        "./img/lasagne.jpg",
        [
            "25 Min.",
            "simpel",
            "18.05.2018"
        ],
        [
            [800, "g Blattspinat"],
            [0.5, " Zwiebel(n)"],
            [0.5, " Knoblauchzehe(n)"],
            [100, "g passierte Tomaten"],
            [0.5, " EL Tomatenmark"],
            [0.5, " EL gemischte Kräuter"],
            [87.5, "g Frischkäse"],
            [25, "g Parmesan"],
            [null, "Öl"],
            [null, "Salz und Pfeffer"],
            [null, "Muskat"],
            [null, "Paprikapulver"],
            [null, "Lasagneplatten"],
            [null, "Fett für die Form"],
        ],
        [
            "ca. 25 Min.",
            "Gesamtzeit: ca. 1 Stunde 15 Minuten."
        ],
        "Zwiebel und Knoblauch fein würfeln, 2 EL Öl erhitzen und je die Hälfte von Zwiebeln und Knoblauch darin anbraten. Den Spinat unterrühren und heiß werden lassen, zum Schluss den Frischkäse unterrühren. Mit Muskatnuss, Salz und Pfeffer abschmecken. 2 EL Öl erhitzen, die restlichen Zwiebeln und den restlichen Knoblauch darin anbraten, Tomatenmark und Kräuter dazugeben, kurz durchrösten und mit den passierten Tomaten aufgießen. Ca. 5 Minuten köcheln lassen und mit Salz, Pfeffer und Paprikapulver abschmecken. Eine Auflaufform fetten, etwas Tomatensauce darin verteilen, dann Lasagneplatten, Spinat, Tomatensauce und wieder Lasagneplatten Schicht für Schicht in die Form füllen, mit Tomatensauce abschließen. Mit Parmesan bestreuen und im vorgeheizten Backrohr bei 175 °C Umluft 40 - 45 Minuten backen..",
        "./img/manu.jpg",
        "Manuel"
    ],
    [
        "Rote Linsen-Kokos-Suppe",
        "./img/linsen.jpg",
        [
            "10 Min.",
            "simpel",
            "25.06.2023"
        ],
        [
            [400, "g Pizzatomaten"],
            [400, "g Kokosmilch "],
            [1, " Zwiebel"],
            [175, "g Linsen"],
            [3, "TL Chilipulver"],
            [2, "TL Kurkuma"],
            [null, " Sonnenblumenöl"],
            [600, "ml Gemüsebrühe"],
            [null, "Salz"]
        ],
        [
            "ca. 10 Min.",
            "Gesamtzeit: ca. 30 Minuten."
        ],
        `Die Zwiebeln schälen und in feine Würfel schneiden. Im Sonnenblumenöl glasig anschwitzen. Rote Linsen, Tomaten mit Saft und Kokosmilch hinzufügen und gut umrühren. Mit der Gemüsebrühe aufgießen und die Suppe ca. 20 Minuten köcheln."
        Zum Schluss mit Salz, Chili - und Kurkumapulver abschmecken.`,
        "./img/martin.jpg",
        "Martin"

    ],
    [
        "Paprika-Speisequark-Burger",
        "./img/burger.jpeg",
        [
            "15 Min.",
            "simpel",
            "28.09.2020"
        ],
        [
            [50, "g Mohnsemmel(n)"],
            [80, "g Paprika, rot und grün"],
            [5, "g Butter"],
            [10, "g Speisequark (10% Fett)"],
            [2, " Scheiben Wurst"]
        ],
        [
            "ca. 2 Min.",
            "Gesamtzeit: ca. 2 Minuten"
        ],
        "Das Brötchen durchschneiden und beide Hälften mit Quark bestreichen. Die Paprika waschen, putzen und in Streifen schneiden. Zusammen mit der Wurst auf eine Brötchenhäfte legen und zudecken.",
        "./img/steffen.jpg",
        "Steffen"
    ]

];

async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

function toggleBurgerMenu() {
    //Referenz auf Burger-Menü-Icon
    const mobileNav = document.getElementById("mobile-navigation");
    //Fallunterscheidung, ob Burger-Menü ausgeklappt ist oder nicht
    if (mobileNav.classList.contains('isNotVisible')) {
        //ausklappen
        mobileNav.classList.remove("isNotVisible");
        mobileNav.classList.add("isVisible");

    } else {
        //einklappen
        mobileNav.classList.add("isNotVisible");
        mobileNav.classList.remove("isVisible");

    }
}

function calculateIngredients(recipeIndex) {
    if (validateQuantityInput()) {
        //Zutatenmengen für eine Portion angeben. Falls keine Mengenangabe vorhanden, 'null' angeben.
        //const greekSaladAmounts = [0.25, 0.5, 125, 0.5, 50, 25, null, 0.25, 31.25, null];
        const ingredients = recipes[recipeIndex][3];
        //wenn es eine Mengeneinheit gibt, mit einem Leerzeichen beginnen, ansonsten nicht!
        //const greekSaladIngredients = [" Salatgurke(n)", " Paprikaschote(n) rot und grün", "g Tomate(n)", " Zwiebel(n)", "g Schafskäse", "g schwarze Oliven",
        //    "Salz und Pfeffer", " Zitrone(n)", "ml Olivenöl", "Oregano"];

        //Referenz auf tbody der Zutatentabelle    
        const ingredientsTable = document.getElementById("ingredients");

        //Referenz auf Portionseingabe
        const quantity = +document.getElementById("recipe-quantity").value;

        //Tabelle vor neuer Befüllung zurücksetzen
        ingredientsTable.innerHTML = "";

        //Tabelle neu befüllen
        for (i = 0; i < ingredients.length; i++) {
            //Fallunterscheidung nach Zutaten mit und ohne Mengenangabe
            if (ingredients[i][0] != null) {
                ingredientsTable.innerHTML += `<tr><td>${ingredients[i][0] * quantity + ingredients[i][1]}</td></tr>`;
            } else {
                ingredientsTable.innerHTML += `<tr><td>${ingredients[i][1]}</td></tr>`;
            }
        }
    } else {
        alert('Bitte eine Zahl größer 0 eingeben.')
    }

}

function validateQuantityInput() {
    return +document.getElementById('recipe-quantity').value > 0
}

function populateRecipeTemplate(recipeIndex) {
    localStorage.setItem("recipeIndex", recipeIndex);
    //Referenzen definieren
    const title = document.getElementById("recipe-title");
    const recipePic = document.getElementById("recipe-pic");
    const timeTag = document.getElementById("time-tag");
    const difficultyTag = document.getElementById("difficulty-tag");
    const dateTag = document.getElementById("date-tag");
    const prepDurationTag = document.getElementById("preparation-duration");
    const totalDurationTag = document.getElementById("total-duration");
    const instructions = document.getElementById("preparation-instructions");
    const authorName = document.getElementById("author-name");
    const authorPic = document.getElementById("author-pic");
    //mit Inhalten befüllen
    title.textContent = recipes[recipeIndex][0];
    recipePic.src = recipes[recipeIndex][1];
    timeTag.textContent = recipes[recipeIndex][2][0];
    difficultyTag.textContent = recipes[recipeIndex][2][1];
    dateTag.textContent = recipes[recipeIndex][2][2];
    calculateIngredients(recipeIndex);
    prepDurationTag.textContent = recipes[recipeIndex][4][0];
    totalDurationTag.textContent = recipes[recipeIndex][4][1];
    instructions.textContent = recipes[recipeIndex][5];
    authorPic.src = recipes[recipeIndex][6];
    authorName.textContent = recipes[recipeIndex][7];
}

function setRecipeIndex(recipeIndex) {
    recipeIndex = recipeIndex;
}