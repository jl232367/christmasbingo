// array to hold all the bingo options

const fullBingoOptions = [
    "Someone learns the meaning of christmas.",
    "Talk to animal or inanimate object",
    "Affair",
    "Dead Relative mentioned.",
    "Event that no one would go to, that everyone goes to",
    "Shritless hot guy.",
    "Someone walks in on a compromising situation",
    "Character doesn't believe in love.",
    "Fake significant others",
    "Christmas countdown",
    "Deep discussion within minutes of meeting",
    "First kiss is interupted",
    "single parent",
    "Characters stare at Christmas treee",
    "Hot santa who fucks",
    "improperly tied scarf",
    "insanely early proposal or I love you",
    "love versus career",
    "Airport scene",
    "Over eager best friend or sibling",
    "I am a journalist/architect/photographer",
    "Mistaken identity",
    "I have a confession to make or been lieing",
    "Family Business is going under",
    "Clumsy meet cute",
    "Fictional European country",
    "build a snow man",
    "snow ball fight",
    "Vaguley dangerous sleding",
    "Montage",
    "Wise older person gives advice",
    "Product placement",
    "baking",
    "Magic",
    "woman with great career isn't happy",
    "Stranded by weather",
    "Misunderstanding that could easily be fixed",
    "We need a Christmas miracle",
    "Crazy bad family tension",
    "Breakup Scene",
    "Fancy Christmas Party",
    "Unrealistic Job",
    "Out of league relationship",
    "Snot in unexpected location",
    "Characters fall on top of eachother",
    "Characters are with 'wrong partner'",
    "Illegal action forgiven because Christmas",
    "Washed up actor",
    "Past relationship",
    "Why Christmas is hard",
    "Cooking",
    "Financial issues",
    "Ice Skating",
    "Kids",
    "The other Man/woman",
    "Character named Nick",
    "Fake Snow",
    "Plot hole",
    "Small town setting",
    "Mistletoe",
    "Santa Clause Suit",
    "Snowflake on eyelashes",
    "Someone Wears Flannel",
    "Christmas Spirit",
    "Kiss in the snow",
    "Love triangle",
    "Musical Number",
    "Hot Chocolate consumed",
    "Elves or Angel",
    "Handsome single father",
    "Department store Santa",
    "Big bad corporation",
    "Cute Knit cap",
    "Former child star appears",
    "First REAL Christmas", 
    "Special Christmas tradition",
    "Rugged Hunk secretly rich",
    "Lifted child to put star on tree",
    "childhood friend suddenly hot",
    "out of place because from big city"
];

let currentBingoOptions = [];
// Implemented function to check for duplicates in original generation and swap options from main array
let duplicateChecker = () => {

    
    let duplicateRemovedCurrentBingoOptions = [... new Set(currentBingoOptions)];
    // check for appropriate array length to avoid multiple list generation
    if (duplicateRemovedCurrentBingoOptions.length == 25) {
        console.log(currentBingoOptions);
        console.log(currentBingoOptions.length);
        return;
    }

    for(let i = duplicateRemovedCurrentBingoOptions.length; i < 25; i = duplicateRemovedCurrentBingoOptions.length) {
        aNewBingoOption = fullBingoOptions[Math.floor(Math.random() * fullBingoOptions.length)];
        duplicateRemovedCurrentBingoOptions.push(aNewBingoOption);
        duplicateRemovedCurrentBingoOptions = [... new Set(duplicateRemovedCurrentBingoOptions)];
        currentBingoOptions = duplicateRemovedCurrentBingoOptions;
        console.log("replaced duplicate");
    }
    console.log(currentBingoOptions);
    console.log(currentBingoOptions.length);

    
        
}

// function to randomly select 25 DIFFERENT bingo options
let pickCurrentBingoOptions = () => {

    if (currentBingoOptions.length == 25) {
        console.log(currentBingoOptions);
        console.log(currentBingoOptions.length);
        return;
    }
    for (let i = 0; i < 25; i++) {
        let newCurrentBingoOption = fullBingoOptions[Math.floor(Math.random() * fullBingoOptions.length)];
        //duplicateChecker(newCurrentBingoOption, currentBingoOptions, 25);
        
        
        currentBingoOptions.push(newCurrentBingoOption);
        console.log(newCurrentBingoOption);
        console.log(currentBingoOptions[i]);
        console.log("Pushed new bingo option.");
    }
    duplicateChecker();
}

// function to generate bingo board
let boardGenerator = () => {
    let boardContainerElement = document.getElementById("boardContainer");
    for (let i = 0; i < 25; i++) {
        let optionContainer = document.createElement("div")
        let optionText = document.createElement("p")
        let optionTextFromArray = currentBingoOptions[i];
        optionContainer.setAttribute("id", "optioncontainer" + i);
        optionContainer.setAttribute("class", "optionContainer");
        optionText.setAttribute('class', "optionText");
        optionText.setAttribute('id', 'optionText' + i);
        
        boardContainerElement.append(optionContainer);
        optionContainer.append(optionText);
        optionText.innerText = optionTextFromArray;
    }
    
}

pickCurrentBingoOptions();
boardGenerator();

//landingPageLoader();
// buttons to pick new current bingo options

// have them stored in 5 different arrays for each row

// button to populate board with selected bingo options ()

/*
if (currentBingoOptions.length >= 1) {
            for(let j = 0; j < currentBingoOptions.length; ) {
                //if (newCurrentBingoOption == currentBingoOptions[j]) {
                    //let fillInBingoOption = fullBingoOptions[Math.floor(Math.random() * fullBingoOptions.length)];
                   // currentBingoOptions.push(fillInBingoOption);
                    //console.log(fillInBingoOption);
                //} 
                currentBingoOptions.push(newCurrentBingoOption);
                console.log(newCurrentBingoOption);
            }
        }




        if (currentBingoOptions[j] == newCurrentBingoOption) {
                    currentBingoOptions.push(fullBingoOptions[Math.floor(Math.random() * fullBingoOptions.length)]);
                    console.log("Replacement for duplicate here.")
                } else {
                    currentBingoOptions.push(newCurrentBingoOption);
                    console.log(newCurrentBingoOption);
                }



        if (currentBingoOptions.length == 0) {
            currentBingoOptions.push(newCurrentBingoOption);
            console.log(currentBingoOptions[i]);
            console.log("First currentBingoOption pushed");
        } else {
            for (let j = 0; j <= currentBingoOptions.length && j <= 25; j++) {
                if (currentBingoOptions[j] == newCurrentBingoOption) {
                    currentBingoOptions.push(fullBingoOptions[Math.floor(Math.random() * fullBingoOptions.length)]);
                    console.log(currentBingoOptions[j]);
                    console.log("Used replacement for duplicate");
                    break;
                } else {
                    currentBingoOptions.push(newCurrentBingoOption);
                    console.log(currentBingoOptions[j]);
                    console.log("New bingo option used");
                    break;
                }
                //console.log("Replacement bingo option pushed");
            }
        }



        if (duplicateRemovedCurrentBingoOptions.length < 25) {
        for (let i = duplicateRemovedCurrentBingoOptions.length; i < 25; i++) {
            aNewBingoOption = fullBingoOptions[Math.floor(Math.random() * fullBingoOptions.length)];
            duplicateRemovedCurrentBingoOptions.push(aNewBingoOption);
            duplicateRemovedCurrentBingoOptions = [... new Set(duplicateRemovedCurrentBingoOptions)];
            console.log()
            console.log("Replaced duplicate");
        } 
        //console.log(currentBingoOptions);
        currentBingoOptions = duplicateRemovedCurrentBingoOptions;
        console.log(currentBingoOptions + "If statement");
        console.log(currentBingoOptions.length);
        return;
        
    } else {
        console.log(duplicateRemovedCurrentBingoOptions);
        currentBingoOptions = duplicateRemovedCurrentBingoOptions;
        console.log(currentBingoOptions);
        console.log("New duplicate array");
        return;
    }
*/