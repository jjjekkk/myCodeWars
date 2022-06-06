function abbrevName(name){
let arrName = name
.toUpperCase()
.split(' ');
return arrName[0][0]+'.'+arrName[1][0]
}
console.log(abbrevName('elton john'))

