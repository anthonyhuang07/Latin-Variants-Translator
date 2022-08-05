function pigTranslator(stringer: string): string{
    let stringArray: string[] = stringer.split(" ")  //splits the text into an array of words
    console.log(stringArray)
    for(let a in stringArray){ //for every word in array
        let currentArray: string[] = [...stringArray[a]] 
        currentArray = currentArray.slice(0, -2)
        console.log("the" + currentArray)
        if(currentArray.at(-1) === 'y'){
          currentArray.pop();
        } else{
          currentArray.unshift(currentArray.pop());
        }
        if(currentArray.at(-1) === '-'){
          currentArray.pop()
        }
        stringArray[a] = currentArray.join('')
    }
    stringer = stringArray.join(' ')
    return stringer
}

/**
 * Test Line:
 * asparagus is cool
 * Test1: eggaspeggareggageggus eggis ceggool
 * Test2: eggaspeggareggageggus eggis ceggool
 */

 function pigTranslator2(stringer: string): string{
    stringer = stringer.toLowerCase()
    let stringArray: string[] = stringer.split(" ")
    const vowels: RegExp = /[aeiou]/gi
    const punctuationReg: RegExp = /[!#$%&()*+?,-./:;<=>@[\]^_`{|}~]/g
    console.log(stringArray)
    for(let a in stringArray){
        let currentArray: string[] = [...stringArray[a]]
        if(currentArray[0].match(vowels)){
          if(currentArray.at(-1).match(punctuationReg)){
            let punctuation = currentArray.pop()
            currentArray.push("yay")
            currentArray.push(punctuation)
          } else{
            currentArray.push("yay")
          }
        } else{
          if(currentArray.at(-1).match(punctuationReg)){
            let punctuation = currentArray.pop()
            currentArray.push(currentArray.shift());
            currentArray.push("ay")
            currentArray.push(punctuation)
          } else{
            currentArray.push(currentArray.shift());
            currentArray.push("ay")
          }
        }
        stringArray[a] = currentArray.join('')
        console.log(stringArray)
    }
    stringer = stringArray.join(' ')
    return stringer
}

const pigEngrish = (document.getElementById("pigEnglish") as HTMLInputElement)
const pigLatin = (document.getElementById("pigLatin") as HTMLInputElement)
const pigBtn = (document.getElementById("pigSwitch") as HTMLInputElement)
const engpig = (document.getElementById("eng-pig") as HTMLInputElement)
const pigeng = (document.getElementById("pig-eng") as HTMLInputElement)
const pigTitle = (document.getElementById("pigTitler") as HTMLInputElement)
const pigTitle2 = (document.getElementById("pigTitler2") as HTMLInputElement)

function pigCheck(value: string): void{
    pigLatin.value = pigTranslator2(value)
}

function pigCheck2(value: string): void{
    pigEngrish.value = pigTranslator(value)
}

pigBtn.addEventListener('click', pigToggle);

function pigToggle(): void{
    if(engpig.style.display === "none"){
        engpig.style.display = "block";
        pigeng.style.display = "none";
        pigTitle.style.display = "block";
        pigTitle2.style.display = "none";
    } else if(engpig.style.display !== "none"){
        engpig.style.display = "none";
        pigeng.style.display = "block";
        pigTitle2.style.display = "block";
        pigTitle.style.display = "none";
    }
}

