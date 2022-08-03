function boTranslator(stringer: string): string{
    let stringArray: string[] = stringer.split(" ")
    console.log(stringArray)
    for(let a in stringArray){
        let currentArray: string[] = [...stringArray[a]]
        currentArray = currentArray.slice(0, -2)
        currentArray.unshift(currentArray.pop());
        if(currentArray.at(-1) === '-'){
          currentArray.pop()
        }
        console.log(currentArray)
        stringArray[a] = currentArray.join('')
        console.log(stringArray)
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

 function boTranslator2(stringer: string): string{
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

const boEngrish = (document.getElementById("pigEnglish") as HTMLInputElement)
const boLatin = (document.getElementById("pigLatin") as HTMLInputElement)
const boBtn = (document.getElementById("pigSwitch") as HTMLInputElement)
const engbo = (document.getElementById("eng-pig") as HTMLInputElement)
const boeng = (document.getElementById("pig-eng") as HTMLInputElement)
const boTitle = (document.getElementById("pigTitler") as HTMLInputElement)
const boTitle2 = (document.getElementById("pigTitler2") as HTMLInputElement)

function boCheck(value: string): void{
    boLatin.value = boTranslator2(value)
}

function boCheck2(value: string): void{
    boEngrish.value = boTranslator(value)
}

boBtn.addEventListener('click', boToggle);

function boToggle(): void{
    if(engbo.style.display === "none"){
        engbo.style.display = "block";
        boeng.style.display = "none";
        boTitle.style.display = "block";
        boTitle2.style.display = "none";
    } else if(engbo.style.display !== "none"){
        engbo.style.display = "none";
        boeng.style.display = "block";
        boTitle2.style.display = "block";
        boTitle.style.display = "none";
    }
}

