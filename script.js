//The radius variable is given here
let r = 0
document.getElementById('input').addEventListener('click', calculate)
//A function is created to calculate area or circumference
function calculate () {
  document.getElementById('input').value
  calculate = parseInt(calculate)
  //If statements were created to distinguise area and circumference
  if(document.getElementById('button1').onclick) {
  answer = r * r * Math.Pi
  } else if(document.getElementById('button2').onclick) {
  answer = 2 * Math.Pi * r
  }
}
