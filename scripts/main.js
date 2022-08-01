function translator(string) {
    return string.replaceAll('egg', '');
}
console.log(translator("feggiregge eggexteggingeggueggisheggers eggaregge ceggoeggol leggikegge yeggoeggu"));
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
console.log(translator2("fire extinguishers are cool like you"));
//feggiregge eggexteggingeggueggisheggers eggaregge ceggoeggol leggikegge yeggoeggu
//feggiregge eggexteggingeggueggisheggers eggaregge ceggoeggol leggikegge yeggoeggu
