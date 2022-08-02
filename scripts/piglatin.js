function pigTranslator(stringer) {
    let stringArray = stringer.match(/\b(\w+\W+)/g);
    for (let a in Array) {
        let currentArray = stringArray[a];
        currentArray = currentArray.splice(-3, 3);
    }
    return stringer;
}
/**
 * Test Line:
 * asparagus is cool
 * Test1: eggaspeggareggageggus eggis ceggool
 * Test2: eggaspeggareggageggus eggis ceggool
 */
function pigTranslator2(english) {
    if (!syllables(english)) {
        return english;
    }
    const egg = "egg";
    const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
    english = english.toLowerCase();
    let syllsVowel = syllables(english);
    let syllsFull = english.match(syllableRegex);
    function syllables(words) {
        words = words.toLowerCase();
        if (words.length <= 2) {
            return 1;
        }
        words = words.replace(/(?:[^leiouay]re|ed|[^leiouay]e)$/, '');
        return words.match(/[eiouay]{1,2}/g);
    }
    for (let i in syllsFull) {
        syllsFull[i] = syllsFull[i].replace(syllsVowel[i], egg + syllsVowel[i]);
        english = syllsFull.join('');
        english = english.replaceAll('regge ', 're ').replaceAll('eggy', 'y').replaceAll('ye', 'yegge');
        console.log(syllsVowel);
        console.log(syllsFull);
    }
    return english;
}
const pigEngrish = document.getElementById("english");
const pigLatin = document.getElementById("egglatin");
const pigBtn = document.getElementById("switch");
const engpig = document.getElementById("eng-eg");
const pigeng = document.getElementById("eg-eng");
const pigTitle = document.getElementById("titler");
const pigTitle2 = document.getElementById("titler2");
function pigCheck(value) {
    eglatin.value = translator2(value);
}
function pigCheck2(value) {
    engrish.value = translator(value);
}
btn.addEventListener('click', toggle);
function pigToggle() {
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
