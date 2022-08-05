function pigTranslator(stringer) {
    let stringArray = stringer.split(" "); //splits the text into an array of words
    console.log(stringArray);
    for (let a in stringArray) { //for every word in array
        let currentArray = [...stringArray[a]];
        currentArray = currentArray.slice(0, -2);
        console.log("the" + currentArray);
        if (currentArray.at(-1) === 'y') {
            currentArray.pop();
        }
        else {
            currentArray.unshift(currentArray.pop());
        }
        if (currentArray.at(-1) === '-') {
            currentArray.pop();
        }
        stringArray[a] = currentArray.join('');
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
function pigTranslator2(stringer) {
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
const pigEngrish = document.getElementById("pigEnglish");
const pigLatin = document.getElementById("pigLatin");
const pigBtn = document.getElementById("pigSwitch");
const engpig = document.getElementById("eng-pig");
const pigeng = document.getElementById("pig-eng");
const pigTitle = document.getElementById("pigTitler");
const pigTitle2 = document.getElementById("pigTitler2");
function pigCheck(value) {
    pigLatin.value = pigTranslator2(value);
}
function pigCheck2(value) {
    pigEngrish.value = pigTranslator(value);
}
pigBtn.addEventListener('click', pigToggle);
function pigToggle() {
    if (engpig.style.display === "none") {
        engpig.style.display = "block";
        pigeng.style.display = "none";
        pigTitle.style.display = "block";
        pigTitle2.style.display = "none";
    }
    else if (engpig.style.display !== "none") {
        engpig.style.display = "none";
        pigeng.style.display = "block";
        pigTitle2.style.display = "block";
        pigTitle.style.display = "none";
    }
}
