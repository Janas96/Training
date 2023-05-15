var a = "Siema"
var b = "Ziom bbb bb hhh"
function WardMarger (firstWord, secondWord)
{
    var sentence = firstWord + " " + secondWord;
    console.log(sentence)
    if(firstWord === "Siema")
        console.log(firstWord + " " + "Siema")
    else
        console.log(secondWord + " " + "Ziom")

    const myArray = sentence.split(" ");
    console.log(myArray.length);
}   

WardMarger(a, b)