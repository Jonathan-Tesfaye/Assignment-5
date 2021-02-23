// The radius variable is given here
let r = 0
let answer = 0
document.getElementById('button').addEventListener('click', area)
document.getElementById('button2').addEventListener('click', circumference)
// A function is created to calculate area or circumference
function area () {
  r = document.getElementById('input').value
  r = parseInt(r)
  answer = Math.PI * (r * r)
  document.getElementById('answers').innerHTML = answer
}

function circumference () {
 r = document.getElementById('input').value
 circumference = parseInt(circumference)
 r = parseInt(r)
 answer = 2 * Math.PI * r
 document.getElementById('answers').innerHTML = answer
}
