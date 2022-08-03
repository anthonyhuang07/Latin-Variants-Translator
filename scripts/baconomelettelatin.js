function boTranslator(stringer) {
    let stringArray = stringer.split(" ");
    console.log(stringArray);
    for (let a in stringArray) {
        let currentArray = [...stringArray[a]];
        currentArray = currentArray.slice(0, -2);
        currentArray.unshift(currentArray.pop());
        if (currentArray.at(-1) === '-') {
            currentArray.pop();
        }
        console.log(currentArray);
        stringArray[a] = currentArray.join('');
        console.log(stringArray);
    }
    stringer = stringArray.join(' ');
    return stringer;
}
/**
 * Test Line:
 * asparagus is cool
 * Test1: eggaspeggareggageggus eggis ceggool
 * Test2: eggaspeggareggageggus eggis ceggool
 */
function boTranslator2(stringer) {
    stringer = stringer.toLowerCase();
    let stringArray = stringer.split(" ");
    const vowels = /[aeiou]/gi;
    const punctuationReg = /[!#$%&()*+?,-./:;<=>@[\]^_`{|}~]/g;
    console.log(stringArray);
    for (let a in stringArray) {
        let currentArray = [...stringArray[a]];
        if (currentArray[0].match(vowels)) {
            if (currentArray.at(-1).match(punctuationReg)) {
                let punctuation = currentArray.pop();
                currentArray.push("yay");
                currentArray.push(punctuation);
            }
            else {
                currentArray.push("yay");
            }
        }
        else {
            if (currentArray.at(-1).match(punctuationReg)) {
                let punctuation = currentArray.pop();
                currentArray.push(currentArray.shift());
                currentArray.push("ay");
                currentArray.push(punctuation);
            }
            else {
                currentArray.push(currentArray.shift());
                currentArray.push("ay");
            }
        }
        stringArray[a] = currentArray.join('');
        console.log(stringArray);
    }
    stringer = stringArray.join(' ');
    return stringer;
}
const boEngrish = document.getElementById("pigEnglish");
const boLatin = document.getElementById("pigLatin");
const boBtn = document.getElementById("pigSwitch");
const engbo = document.getElementById("eng-pig");
const boeng = document.getElementById("pig-eng");
const boTitle = document.getElementById("pigTitler");
const boTitle2 = document.getElementById("pigTitler2");
function boCheck(value) {
    boLatin.value = boTranslator2(value);
}
function boCheck2(value) {
    boEngrish.value = boTranslator(value);
}
boBtn.addEventListener('click', boToggle);
function boToggle() {
    if (engbo.style.display === "none") {
        engbo.style.display = "block";
        boeng.style.display = "none";
        boTitle.style.display = "block";
        boTitle2.style.display = "none";
    }
    else if (engbo.style.display !== "none") {
        engbo.style.display = "none";
        boeng.style.display = "block";
        boTitle2.style.display = "block";
        boTitle.style.display = "none";
    }
}
