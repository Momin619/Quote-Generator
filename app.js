let btn = document.querySelector(".btn");

let show = document.querySelector(".generate");

console.log(show.innerHTML);
let qoute = [
  "' Actions speak louder than words'.",
  "' You miss 100% of the shots you don't take.'",
  "' The journey of a thousand miles begins with a single step.'",
  "' When life gives you lemons, make lemonade.'",
  "' Do unto others as you would have them do unto you.'",
  "' Every cloud has a silver lining.'",
  "' The best things in life are free.'",
  "' Time heals all wounds.'",
  "' What doesn’t kill you makes you stronger.'",
  "' Life is what happens when you’re busy making other plans.'",
  "' You only live once.'",
  "' A penny saved is a penny earned.'",
  "' The only limit to our realization of tomorrow is our doubts of today.'",
  "' Better late than never.'",
  "' You reap what you sow.'",
  "' Keep it simple, stupid.'",
  "' It’s not the years in your life that count. It’s the life in your years.'",
  "' Laughter is the best medicine.'",
  "' If you can’t say something nice, don’t say anything at all.'",
  "' Believe you can and you're halfway there.'",
];

let randomQuote = () => {
  let random = Math.random() * qoute.length;
  let floor = Math.floor(random);
  return floor;
};

btn.addEventListener("click", () => {
  show.innerHTML = qoute[randomQuote()];
});
