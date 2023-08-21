let singleQuotes = 'string';
const number1 = 30;
const doubleQuotes = "Number is: " + number1 + " end of string"
  + " another str";
const singleQuotes1 = `Number is: ${number1}
        sdfsdf   zd
 sdf sdfs ssdf sdf sdf
`;
console.log(doubleQuotes);
console.log(singleQuotes1)
console.log(singleQuotes + " another string")
const myString = '5'; // new String("sdf");

for(let i = 0; i < singleQuotes.length; i++) {
  console.log(singleQuotes[i])
}
console.log(singleQuotes[3]);
console.log('toLowerCase:', 'AAAAAS'.toLowerCase());
console.log('toLowerCase:', singleQuotes.toUpperCase());


// useful methods

/*String.prototype.concat()
String.prototype.endsWith()
String.prototype.includes()
String.prototype.match()
String.prototype.search()
String.prototype.repeat()
String.prototype.replace()
String.prototype.replaceAll()
String.prototype.split()
String.prototype.trim()*/

console.log(singleQuotes.concat(' another string', ' and another string', ' ...'))
console.log(singleQuotes.endsWith('g'));
console.log(singleQuotes.includes('rin')); // st[rin]g
const regex = /[A-Z]/gi;
console.log(singleQuotes.match(regex)); //
console.log(singleQuotes.search(regex)); //
console.log(singleQuotes.repeat(5));
console.log(`${singleQuotes} string`.replace('ing', '111')) // str[ing] -> 111 = str111
console.log(`${singleQuotes} string`.replaceAll('ing', '111'));
console.log(singleQuotes.split(''));
console.log('   strstr   ');
console.log('   strstr   '.trim())
