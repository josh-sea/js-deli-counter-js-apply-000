function takeANumber(line,name) {
 line.push(name)
 return `Welcome, ${name}. You are number ${line.length} in line.`
} 

function nowServing(line) {
  if (line.length<1){
    return"There is nobody waiting to be served!"
  } else {
      return "Currently serving " + line.shift() + "."
  }
}

function currentLine(line) {
    if (line.length<1){
      return "The line is currently empty."
    } else {
        for (var i=0;i<line.length;i++){
          line[i] = i+1+". " + line[i]
        }
      return "The line is currently: " + line.join(', ')
    }
  }
    var number = 0;
  function takeANumberAlternative (array){
    number++
    array.push(number)
  }
  
  takeANumberAlternative() => you are number 1 
  takeANumberAlternative() => you are number 2
  nowServing =>currently serving 1
  takeANumberAlternative => you are number 3 