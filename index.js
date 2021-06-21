const readline = require("readline-sync")
const Database = require("@replit/database")

const db = new Database()

const questions = {
  1: "My favorite song is...?",
  2: "Which hand is my dominate hand?",
  3: "Which city do I live in?",
  4: "What is my favorite destination?",
  5: "What is my free time hobby",
  6: "My favorite dish?",
  7: "My favorite cricketer?",
  8: "favorite movie?",
  9: "favorite webseries?",
  10: "favorite programming language?"
}
const options = {
  1: {
    1: "Angry and screamy and unromantic",
    2: "Electronic",
    3: "Bright and happy",
    4: "The newest pop/rap mix that everyone's downloading",
    5: "The definition of pop music"
  },
  2: {
    1: "Right",
    2: "Left",
    3: "Both",
  },
  3: {
    1: "Kakinada",
    2: "Hyderabad",
    3: "Vizag",
  },
  4: {
    1: "Darjeeling",
    2: "Switzerland",
    3: "New York",
    4: "Maldhives"
  },
  5: {
    1: "Drawing",
    2: "Reading Books",
    3: "OTT & chill",
    4: "Code"
  },
  6: {
    1: "Lasagna",
    2: "Chicken Dum Biryani",
    3: "Burger",
    4: "mysore bonda"
  },
  7: {
    1: "AB De Villiers",
    2: "Virat",
    3: "Hardick",
    4: "sevag"
  },
  8: {
   1: "3 idiots",
    2: "ratatouille",
    3: "Kick",
    4: "pk"
  },
  9: {
    1: "Harry Potter",
    2: "GOT",
    3: "The Office",
    4: "Big Bang Theory"
  },
  10: {
    1: "Javascript",
    2: "Python",
    3: "c#",
    4: "Go"
  }


}
const answers = {
  1: 3,
  2: 1,
  3: 1,
  4: 3,
  5: 3,
  6: 2,
  7: 4,
  8: 3,
  9: 3,
  10: 1
}

let score = 0
const participant = readline.question("Please enter your name: ");
console.log(`\n*********************************************************\n`)
console.log(`     Hello! ${participant} Welcome to get to  know me Quiz.\n`)
console.log(`***********************************************************`)
let givenAnswers = {}
let selected;
let inc = 1;

Object.entries(questions).map(([key, value]) => {
  console.log(`\nQ${key}. ${value}`)

  Object.entries(options[key]).map(([key, value]) => {
    console.log(`   ${key}. ${value}`)
  })
  selected = readline.question("give you answer: ")
  while (!(selected in options[key]))
    selected = readline.question("wrong input, enter again: ")
  givenAnswers[questions[key]] = options[key][selected]

  if (selected == answers[key] || options[key]['1'] === '')
    score = score + 1
})

console.log("\ncheck the questionaire list and answers: \n")

Object.entries(givenAnswers).map(([key, value]) => {
  console.log(`\n Q.${inc} ${key}`)
  console.log(`\n    given answer is: ${value}\n    correct answer is: ${options[inc][answers[inc]]}`)
  inc++
})
//db.set(`${participant}`, givenAnswers);

console.log(`\nThank you ${participant}, you got -> ${score} points out of 10`)
