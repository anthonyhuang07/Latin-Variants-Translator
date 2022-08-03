function translator(string: string): string{
    string = string.replaceAll('eggegg', 'Egg')
    string = string.replaceAll('egg', '')
    return string.toLowerCase()
}

/**
 * Test Line:
 * asparagus is cool
 * Test1: eggaspeggareggageggus eggis ceggool
 * Test2: eggaspeggareggageggus eggis ceggool
 */

function translator2(english: string): string {
    if(!syllables(english)){
        return english;
    }

    const egg: string = "egg"
    const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;

    english = english.toLowerCase()

    let syllsVowel: string[] = syllables(english) 
    let syllsFull: string[] = english.match(syllableRegex);

    function syllables(words: string): any {
        words = words.toLowerCase();                                    
        if(words.length <= 2) { return 1; }                            
          words = words.replace(/(?:[^leiouay]re|ed|[^leiouay]e)$/, '');                     
          return words.match(/[eiouay]{1,2}/g);                                  
    }

    for(let i in syllsFull) { 
        syllsFull[i] = syllsFull[i].replace(syllsVowel[i], egg+syllsVowel[i]);
        english = syllsFull.join('')
        english = english.replaceAll('regge ', 're ').replaceAll('eggy', 'y').replaceAll('ye', 'yegge')
        console.log(syllsVowel); console.log(syllsFull);  
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

