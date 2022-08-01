function translator(string: string): string{
    string = string.replaceAll('eggegg', 'Egg')
    return string.replaceAll('egg', '')
}

function translator2(english: string): string {
    let vowels = ['e', 'i', 'o', 'u', 'a']
    const egg = "egg"

    english = english.toLowerCase()

    for (let v of vowels){
        if(english.includes(v)){
            english = english.replaceAll(v, egg+v)
        }
    }

    return english
}

const engrish = (document.getElementById("english") as HTMLInputElement)
const eglatin = (document.getElementById("egglatin") as HTMLInputElement)
const btn = (document.getElementById("switch") as HTMLInputElement)
const engeg = (document.getElementById("eng-eg") as HTMLInputElement)
const egeng = (document.getElementById("eg-eng") as HTMLInputElement)
const title = (document.getElementById("titler") as HTMLInputElement)
const title2 = (document.getElementById("titler2") as HTMLInputElement)

function check(value: string): void{
    eglatin.value = translator2(value)
}

function check2(value: string): void{
    engrish.value = translator(value)
}

btn.addEventListener('click', toggle);

function toggle(): void{
    if(engeg.style.display === "none"){
        engeg.style.display = "block";
        egeng.style.display = "none";
        title.style.display = "block";
        title2.style.display = "none";
    } else if(engeg.style.display !== "none"){
        engeg.style.display = "none";
        egeng.style.display = "block";
        title2.style.display = "block";
        title.style.display = "none";
    }
}