var Facts = {
  '1': "I spent most of my childhood in Las Vegas, NV. Unfortunately I can't recommend you a good hotel to stay in.",
  '2': "Besides sleeping, I like reading books during airplane flights.",
  '3': "I studied abroad twice in college: once in Oxford, England for 6 weeks and the other time in Amsterdam for one week.",
  '4': "I still have yet to own a car, but have a drivers' license.",
  '5': "Strength training/powerlifting is my go-to exercise.",
  '6': "Text editor of choice: Atom",
  '7': "My favorite dessert of all time is ice cream.",
  '8': "I spent 7 years singing in middle/high school choir.",
  '9': "I learned how to ride a bike in my senior year of college.",
  '10': "Swimming class was the only class I ever failed. (Disclaimer: I still know how to swim)."
}
var displayFact = document.getElementById("random-fact");
var factNumber = Math.floor(Math.random()*10)+1;

function randomFact(){
  return Facts[factNumber];
}


displayFact.textContent = randomFact();
