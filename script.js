const passwordBox = document.getElementById("Password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%&*()/?"

const allChars = upperCase + lowerCase + number + symbol
function createPassword(){
    let password = "";
    password += upperCase[Math.flore(math.random()* upperCase.length)]
    password += lowerCase[Math.flore(math.random()* lowerCase.length)]
    password += number[Math.flore(math.random()* number.length)]
    password += symbol[Math.flore(math.random()* symbol.length)]


while(length > password.length){
    password += allChars [math.flore(math.random()*allChars.length)]
}
}