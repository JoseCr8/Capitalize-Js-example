function capitalize(str){
    let capitalizeString = str;// String to capitalize
    splitString = capitalizeString.split(" ");// Split the string of words into an array
    console.log(splitString);
    let firstLetter = '';// To store the letters to capitalize
    for(const i in splitString){// For each word in the array
        firstLetter = splitString[i][0];// Get the first letter
        firstLetter = firstLetter.toUpperCase();// Make it to uppercase
        console.log(firstLetter);
        splitString[i] = firstLetter + splitString[i].substring(1);// Replace the first letter with uppercase one
        console.log(splitString[i]);
    }
    capitalizeString = splitString.join(' ');// Join the array into an string
    return capitalizeString;// Return the capitalized string
}
console.log(capitalize("hola buenas tardes"));