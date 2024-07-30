const quotes = [
    ["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "Helen Keller"],
    ["The only person you are destined to become is the person you decide to be.", "Ralph Waldo Emerson"],
    ["There is nothing impossible to him who will try.", "Alexander the Great"],
    ["The mind is everything. What you think you become.", "Buddha"],
    ["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.", "Mark Twain"]
  
  ];
  
  const quoteButton = document.getElementById("quote-button");
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");
  
  function generaterandomquote()
  {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const currentQuote = quotes[randomIndex];
    quoteText.textContent = currentQuote[0];
    authorText.textContent = "- " + currentQuote[1];
  };
  
