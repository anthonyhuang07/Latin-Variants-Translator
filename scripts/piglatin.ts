function pigTranslator(stringer: string): string{
    let stringArray: string[] = stringer.match(/\b(\w+\W+)/g)
    for(let a in Array){
        let currentArray: string[] = stringArray[a]
        currentArray = currentArray.splice(-3, 3)
    }
    return stringer
}

/**
 * Test Line:
 * asparagus is cool
 * Test1: eggaspeggareggageggus eggis ceggool
 * Test2: eggaspeggareggageggus eggis ceggool
 */

function pigTranslator2(english: string): string {
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

const pigEngrish = (document.getElementById("english") as HTMLInputElement)
const pigLatin = (document.getElementById("egglatin") as HTMLInputElement)
const pigBtn = (document.getElementById("switch") as HTMLInputElement)
const engpig = (document.getElementById("eng-eg") as HTMLInputElement)
const pigeng = (document.getElementById("eg-eng") as HTMLInputElement)
const pigTitle = (document.getElementById("titler") as HTMLInputElement)
const pigTitle2 = (document.getElementById("titler2") as HTMLInputElement)

function pigCheck(value: string): void{
    eglatin.value = translator2(value)
}

function pigCheck2(value: string): void{
    engrish.value = translator(value)
}

btn.addEventListener('click', toggle);

function pigToggle(): void{
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

