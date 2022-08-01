function translator(string) {
    return string.replaceAll('egg', '');
}
function translator2(english) {
    let vowels = ['e', 'i', 'o', 'u', 'a'];
    const egg = "egg";
    english = english.toLowerCase();
    for (let v of vowels) {
        if (english.includes(v)) {
            english = english.replaceAll(v, egg + v);
        }
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
