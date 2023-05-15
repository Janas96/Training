// var a = "Siema"
// var b = "Ziom bbb bb hhh"
// function WardMarger (firstWord, secondWord)
// {
//     var sentence = firstWord + " " + secondWord;
//     console.log(sentence)
//     if(firstWord === "Siema")
//         console.log(firstWord + " " + "Siema")
//     else
//         console.log(secondWord + " " + "Ziom")

//     const myArray = sentence.split(" ");
//     console.log(myArray.length);
// }   

// WardMarger(a, b)
const sentence = "Mary on a cross Not just another bloody Mary Mary on a, Mary on a... Klesáš úplně jako Svatá Marie Marie na, Marie na kříži Ne jenom další krvavá Marie Marie na, Marie na kříži... You go down just like"
console.log(sentence.length)
console.log(sentence.replace(/\s+/g, '').length)
let test = sentence.match(/[aA]/g);
console.log(test)
console.log(test.length)