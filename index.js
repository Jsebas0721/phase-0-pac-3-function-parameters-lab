
function introduction(name){
   return name = `Hi, my name is ${name}.`;
}

//console.log(introduction('Aki'));

function introductionWithLanguage(name, language){

    const nameAndLanguage = `Hi, my name is ${name} and I am learning to program in ${language}.`;

    return nameAndLanguage; 
}

function introductionWithLanguageOptional(name, language = "JavaScript"){

    const nameAndLanguage = `Hi, my name is ${name} and I am learning to program in ${language}.`;

    return nameAndLanguage; 
}

