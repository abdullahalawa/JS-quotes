// store a reference for the #quote div
var quoteScope = document.getElementById("quote");

// quotes repository
var quoteList = [
  {
    quote: "Be yourself; everyone else is already taken.",
    teller: "Oscar Wilde",
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    teller: "Marilyn Monroe",
  },
  {
    quote: "So many books, so little time.",
    teller: "Frank Zappa",
  },
  {
    quote: "A room without books is like a body without a soul.",
    teller: "Marcus Tullius Cicero",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    teller: "Robert Frost",
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    teller: "J.K. Rowling, Harry Potter and the Goblet of Fire",
  },
  {
    quote:
      "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
    teller: "Albert Camus",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    teller: "Mark Twain",
  },
];

//Index to maintain the uniquness of the quote sequence.
var counter;

// Function to get a new quote every time the button pressed
function getNewQuote() {
  var randomInt = getRandomInt(quoteList.length);

  console.log(randomInt);

  // Prevent getting the same quote twice in a row.
  while (randomInt == counter) {
    randomInt = getRandomInt(quoteList.length - 1);
  }

  // store the last generated quote index
  counter = randomInt;

  quoteScope.innerHTML = `<p id="quote" class="fs-1">
  "${quoteList[randomInt].quote}"
  </p>
  <p id="quote-teller" class="fs-3">--${quoteList[randomInt].teller}</p>`;
}

// Function that takes one integer parameter and return a
//randomNum where:
// randomNum >= 0
// randomNum <= The integer parameter
function getRandomInt(arrayLingth) {
  var randomNum = Math.floor(Math.random() * arrayLingth);
  return randomNum;
}
