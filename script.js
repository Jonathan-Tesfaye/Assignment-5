//The radius variable is given here
let r = 0
let answer = 0
document.getElementById('input').addEventListener('click', comparison)
//A function is created to calculate area or circumference
function comparison () {
  r = document.getElementById('input').value
  comparison = parseInt(comparison)
  r = parseInt(r)
  //If statements were created to distinguise area and circumference
  if(document.getElementById('button1').onclick) {
  answer = r * r * Math.Pi
  document.getElementById('answers').innerHTML = answer
  } else if(document.getElementById('button2').onclick) {
  answer = 2 * Math.Pi * r
  document.getElementById('answers').innerHTML = answer
  } else {
  answer = 12
  document.getElementById('answers').innerHTML = answer
  }
}