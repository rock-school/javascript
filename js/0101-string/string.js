String.prototype.concat()
String.prototype.endsWith()
String.prototype.includes()
String.prototype.indexOf()
String.prototype.padEnd()
String.prototype.padStart()
String.prototype.repeat()
String.prototype.replace()
String.prototype.replaceAll()
String.prototype.search()
String.prototype.slice()
String.prototype.split()
String.prototype.trim()

let singleQuotes = 'string';
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

////
String.prototype.concat()
String.prototype.endsWith()
String.prototype.includes()
String.prototype.indexOf()
String.prototype.padEnd()
String.prototype.padStart()
String.prototype.repeat()
String.prototype.replace()
String.prototype.replaceAll()
String.prototype.search()
String.prototype.slice()
String.prototype.split()
String.prototype.startsWith()
String.prototype.substring()
String.prototype.toLowerCase()
String.prototype.toUpperCase()
String.prototype.trim()
String.prototype.trimEnd()
String.prototype.trimStart()
String.prototype.valueOf()

Не обовязкові
String.prototype.at()
String.prototype.charAt()
String.prototype.charCodeAt()
String.prototype.codePointAt()
String.fromCharCode()
String.fromCodePoint()
String.prototype.lastIndexOf()
String.prototype.localeCompare()
String.prototype.match()
String.prototype.matchAll()
String.prototype.normalize()

