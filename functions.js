const helloWorld = () => console.log("HellO!")
const add = (a,b) => console.log(a+b)
const subtitle = "Zajęcia backend"
const sample = () => {'Próba funkcji'}
module.exports = {
    helloWorld,
    add,
    subtitle, 
    sample
}

console.log("functions.js loaded correctly")