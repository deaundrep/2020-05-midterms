function capitalizeSentences(str) {
  let result = ''
  for(let i = 0; i < str.length; i ++){
    if (str[i]=== 0){
      result += str[i].toUpperCase();
    }else{
      result += str[i].toLowerCase();
    }
  }
  return result;
}


function isValidPassword(str){
  for (let i = 0; i < str.length; i++){
    if (str.includes(' ') || str.length < 12 ){
      return false
    }else{
      return true
    }
  } 
  return str
}

function makeHalfSquares(num){
  let newArr = []
  for (let i = 0; i < num.length; i++){
    newArr.push(num[i]**2/2)
  }
  return newArr
}

function countAs(num){
  let grades = []
  for (let i = 0; i < num.length; i++){
grades += num[i]
if (grades === 90){
}
  }
  return grades;
}

function deleteMiddleLetters(str){

}

function lastIndexOfSpace(str){
  let last = ' '
  for (let i = 0; i < str.length; i++){
    if(str[i].lastIndexOfSpace().includes(''))
  }
  return str

}

function hyphenateName(name){
  
}



if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
