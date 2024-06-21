const qouteContainer = document.getElementById('qoute-container');
const quoteText = document.getElementById('quote');
const author = document.getElementById('author');
const twitterBtn = document.getElementById('twitterBtn');
const newQouteBtn = document.getElementById('newQouteBtn');

// new quote function
function newQuote(){
  const quote = lQoutes[Math.floor(Math.random() * lQoutes.length)];
  if(!quote.author){
    author.textContent = "Unknown"
  }else{
    author.textContent = quote.author;
  }
  // check length of quote to determine the styling
  if(quote.text.length>100){
    quoteText.classList.add('long-qoute');
  }else{
    quoteText.classList.remove('long-qoute')
  }
  quoteText.textContent = quote.text;
}

// Tweet quote
function tweetQuote(){
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
 }

// event listeners
newQouteBtn.addEventListener('click', newQuote)
// on load 
newQuote();