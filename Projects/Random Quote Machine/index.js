$(document).ready(function(){
  var randomNumber;
  var theQuote;
  function newQuote(){
    var quotes = [
      "\"Don\'t cry because it\'s over, smile because it happened.\"<br><em> ― Dr. Seuss</em>",
      "\"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.\"<br><em> ― Marilyn Monroe</em>",
      "\"You only live once, but if you do it right, once is enough.\"<br><em> ― Mae West</em>",
      "\"In three words I can sum up everything I\'ve learned about life: it goes on.\"<br><em> ― Robert Frost</em>",
      "\"To live is the rarest thing in the world. Most people exist, that is all.\"<br><em> ― Oscar Wilde</em>",
      "\"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.\"<br><em> ― Albert Einstein</em>",
      "\"Good friends, good books, and a sleepy conscience: this is the ideal life.\"<br><em> ― Mark Twain</em>",
      "\"Life is what happens to us while we are making other plans.\"<br><em> ― Allen Saunders</em>",
      "\"Everything you can imagine is real.\"<br><em> ― Pablo Picasso</em>",
      "\"Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in, forget them as soon as you can. Tomorrow is a new day. You shall begin it serenely and with too high a spirit to be encumbered with your old nonsense.\"<br><em> ― Ralph Waldo Emerson</em>"
    ]

    randomNumber = Math.floor(Math.random() * (quotes.length));
    theQuote = quotes[randomNumber];
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
};

  $('#tweetting').on("click", function() {
    theQuote = theQuote.split("<br>").join("").split("<em>").join("").split("</em>").join("").split("\\").join("");
    var tweetUrl = 'https://twitter.com/intent/tweet?text=' + theQuote;
    window.open(tweetUrl + ' quote');
  });

  $("#newQuote").on("click", function(){
    newQuote();
  });
});
