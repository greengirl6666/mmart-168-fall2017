//vanja
// 1. set language function assigns a language to a particular button
//that can be accessed by clicking
//2 & 3 changed Russian into Bosnian


let language
let languageCode

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'bs') {
        language = 'Bosnian'
    } else if (code === 'es') {
        language = 'Spanish'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language
}
