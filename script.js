// The radius variable is given here
let d = 0
let r = 0
let answer = 0
document.getElementById('button').addEventListener('click', area)
document.getElementById('button2').addEventListener('click', circumference)
// A function is created to calculate area or circumference
function area () {
  d = document.getElementById('input').value
  d = parseInt(d)
  r = d / 2
  answer = Math.PI * (r * r)
  document.getElementById('answers').innerHTML = Math.round(answer * 10) / 10; 
}
// Another function is created for the other button
function circumference () {
  d = document.getElementById('input').value
  d = parseInt(d)
  r = d / 2
  answer = 2 * Math.PI * r
  document.getElementById('answers').innerHTML = Math.round(answer * 10) / 10;
}
