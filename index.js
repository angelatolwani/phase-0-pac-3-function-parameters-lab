// Takes in an argument 'name' and returns the phrase 'Hi, my name is $[name].'
function introduction(name){
    return (`Hi, my name is ${name}.`);
}

// Takes 2 parameters, name & language, and returns a phrase
function introductionWithLanguage(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

// Takes parameter 'name' & optional parameter 'language' and returns a phrase
function introductionWithLanguageOptional(name, language = "JavaScript"){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}