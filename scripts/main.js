function translator(string) {
    string = string.replaceAll('eggegg', 'Egg');
    string = string.replaceAll('egg', '');
    return string.toLowerCase();
}
/**
 * Test Line:
 * asparagus is cool
 * Test1: eggaspeggareggageggus eggis ceggool
 * Test2: eggaspeggareggageggus eggis ceggool
 */
function translator2(english) {
    const egg = "egg";
    const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
    english = english.toLowerCase();
    let syllsVowelOg = syllables(english);
    let syllsVowelNew = syllables(english);
    let syllsFull = syllables2(english);
    function syllables(words) {
        words = words.toLowerCase();
        if (words.length <= 2) {
            return 1;
        }
        words = words.replace(/(?:[^leiouay]es|ed|[^leiouay]e)$/, '');
        words = words.replace(/^y/, '');
        return words.match(/[eiouay]{1,2}/g);
    }
    function syllables2(words2) {
        return words2.match(syllableRegex);
    }
    for (let i = 0; i < syllsFull.length; i++) {
        syllsVowelNew[i] = syllsVowelNew[i].replace(syllsVowelOg[i], egg + syllsVowelOg[i]);
        syllsFull[i] = syllsFull[i].replace(syllsVowelOg[i], syllsVowelNew[i]);
        english = syllsFull.join('');
        console.log(syllsVowelOg);
        console.log(syllsVowelNew);
        console.log(syllsFull);
    }
    return english;
}
const engrish = document.getElementById("english");
const eglatin = document.getElementById("egglatin");
const btn = document.getElementById("switch");
const engeg = document.getElementById("eng-eg");
const egeng = document.getElementById("eg-eng");
const title = document.getElementById("titler");
const title2 = document.getElementById("titler2");
function check(value) {
    eglatin.value = translator2(value);
}
function check2(value) {
    engrish.value = translator(value);
}
btn.addEventListener('click', toggle);
function toggle() {
    if (engeg.style.display === "none") {
        engeg.style.display = "block";
        egeng.style.display = "none";
        title.style.display = "block";
        title2.style.display = "none";
    }
    else if (engeg.style.display !== "none") {
        engeg.style.display = "none";
        egeng.style.display = "block";
        title2.style.display = "block";
        title.style.display = "none";
    }
}
