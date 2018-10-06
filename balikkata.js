function balikKata(balik) {
var kata=balik.split('').reverse().join('');
return kata;
}
console.log(balikKata('Hello World and Coders')); 
console.log(balikKata('John Doe')); 
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby')); 
console.log(balikKata('Super'));
