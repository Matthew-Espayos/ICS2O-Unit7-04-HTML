// Creating variables
let age = 0
const day = ''
// Connect "Age?" button to "random" function
document.getElementById('mybutton').addEventListener('click', checkageandday)
// Get users age and convert it to an integer
function checkageandday () {
  age = document.getElementById('myinput').value
  age = parseInt(age)
  // Checking to see if they are eligible for student pricing.
  if ((day === 'Tuesday' || day === 'Thursday') || (age > 12 && age < 21)) {
    document.getElementById('myanswer').innerHTML = 'You are eligible for student pricing'
  } else {
    document.getElementById('myanswer').innerHTML = 'You are not eligible for student pricing and must pay the regular price'
  }
}
