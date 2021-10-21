// Question 1A
const jPDinos = ["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"]

// Question 1B
function seeDinos([first, ...rest]) {
    console.log(first)
    console.log(rest)
}
seeDinos(jPDinos)

// Question 2A
const jPCharacters = {alanGrant: "Sam Neill", ellieSattler: "Laura Dern", ianMalcolm: "Jeff Goldblum"}

// Question 2B
const seeCharacters = (a) => {
    console.log(a.ellieSattler)
}
seeCharacters(jPCharacters)

// BONUS
// Question 3A
const jurassicParkMovies = [{
    one: "Jurassic Park",
    two: "The Lost World: Jurassic Park", 
    three: "Jurassic Park III"
}, {
    four: "Jurassic World",
    five: "Jurassic World: Fallen Kingdom",
    six: "Jurassic World: Dominion"
}]

// Question 3B
seeJPMovies = ([one, two, three, four, five, six]) => {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}
console.log(jurassicParkMovies)