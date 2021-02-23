//Global variables

//The different options for password components in an array
var charString = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", "~!@#$%^&*()-_=+"];

//The "Yes" or "No" response from the user in the password creation
var userSelection = [];

//Open variable for output of password creation
var password = "";

//links to generate button ID in HTML
var generateBtn = document.querySelector("#generate");



//Creates function that connects the output of the generatePassword function below to the HTML card so that password result appears in the box (thanks to the querySelector)
function displayPassword() {
    password = generatePassword();
    var passwordResult = document.querySelector("#password");

    passwordResult.value = password;
}

// Select character length between 8 and 128; makes sure number is an integer and between the upper and lower limit.
function generatePassword() {
    var characterLength = 0
    while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === false) {
        characterLength = parseInt(prompt("How long would you like your password? (please select between 8-128 characters)"));
    }

//Defines variables for the different password option popups
    var uppercase = false
    var lowercase = false
    var number = false
    var symbol = false

    while (!uppercase && !lowercase && !number && !symbol) {

        // Uppercase pop up
        uppercase = confirm("Click OK if you would like to include uppercase characters, otherwise click Cancel");

        // Lowercase pop up
        lowercase = confirm("Click OK if you would like to include lowercase characters, otherwise click Cancel");

        // Numeric pop up
        number = confirm("Click OK if you would like to include numeric characters, otherwise click Cancel");

        // Special charcter  pop up
        symbol = confirm("Click OK if you would like to include special characters, otherwise click Cancel");
    }

    // userSelection has values pushed into it - based on its place in the array.
    if (uppercase) {
        userSelection.push(charString[0]);
    }

    if (lowercase) {
        userSelection.push(charString[1])
    }

    if (number) {
        userSelection.push(charString[2])
    }

    if (symbol) {
        userSelection.push(charString[3])
    }

    var password = "";

   
    //Adds all the elements of the array separated by the specified separator string and then splits the string into substrings using the specified separator and returns them as an array.
    userSelection = userSelection.join("").split("");

//Creates randomized password using Math.random, and pulls on the above prompts to generate a password of the specified length (characterLength) with the preferred password conditions (userSelection)
    for (var i = 0; i < characterLength; i++) {
        var index = (Math.floor(Math.random() * userSelection.length));
        password = password + userSelection[index]
    }

    return password
}

// If "Generate Password" button is clicked, the displayPassword function is triggered
generateBtn.addEventListener("click", displayPassword);