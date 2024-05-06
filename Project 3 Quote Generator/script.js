let quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Innovation distinguishes between a leader and a follower. – Steve Jobs",
  "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
  "Stay hungry, stay foolish. – Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "Believe you can and you’re halfway there. – Theodore Roosevelt",
  "You must be the change you wish to see in the world. – Mahatma Gandhi",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
];


function generateQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let quote = quotes[randomIndex];
  document.getElementById("quoteDisplay").innerText = quote;
}

generateQuote();
document.getElementById("newQuoteBtn").addEventListener("click", generateQuote);
