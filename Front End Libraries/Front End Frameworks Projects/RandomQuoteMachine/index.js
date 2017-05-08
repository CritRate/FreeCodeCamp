/* global $ */

$('document').ready(() => {
  const quotes = {
    0: ['Marilyn Monroe', "&ldquo;I,m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.&rdquo;"],
    1: ['Oscar Wilde', '&ldquo;Be yourself, everyone else is already taken.&rdquo;'],
    2: ['Albert Einstein', "&ldquo;Two things are infinite: the universe and human stupidity, and I'm not sure about the universe.&rdquo;"],
    3: ['Bernard M. Baruch', "&ldquo;Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.&rdquo;"],
    4: ['Frank Zappa', '&ldquo;So many books, so little time.&rdquo;'],
    5: ['William W. Purkey', "&ldquo;You've gotta dance like there's nobody watching,\nLove like you'll never be hurt,\nSing like there's nobody listening,\nAnd live like it's heaven on earth.&rdquo;"],
    6: ['Marcus Tullius Cicero', '&ldquo;A room without books is like a body without a soul.&rdquo;'],
    7: ['Dr. Seuss', "&ldquo;You know you're in love when you can't fall asleep because reality is finally better than your dreams.&rdquo;"],
    8: ['Mae West', '&ldquo;You only live once, but if you do it right, once is enough.&rdquo;'],
    9: ['Mahatma Gandhi', '&ldquo;Be the change that you wish to see in the world.&rdquo;'],
    10: ['Robert Frost', "&ldquo;In three words I can sum up everything I've learned about life: it goes on.&rdquo;"],
  };
  let lastQuote = 0;

  /**
   *
   *
   * @param {Number} quote
   * @returns {Array<String>}
   */
  function randomQuote(quote) {
    if (quote >= 0) {
      return quotes[quote];
    }
    let num = Math.floor(Math.random() * Object.keys(quotes).length);
    if (lastQuote === num) {
      num += 1;
    }
    lastQuote = num;
    return quotes[num];
  }

  // cant get official tweet button to work
  function getTweetableUrl() {
    $('.tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + randomQuote(lastQuote)[1].replace(/\s/g, '%20').replace(/&rdquo;/, '"').replace(/&ldquo;/, '"') + ' ' + randomQuote(lastQuote)[0].replace(/\s/g, '%20').replace(/&rdquo;/, '"').replace(/&ldquo;/, '"') + '&hashtags=quotes');
  }

  function setQuote() {
    $('#quoteButton').click(() => {
      const quote = randomQuote();
      $('.citator').html(quote[0]);
      $('.citation').html(quote[1]);
      getTweetableUrl();
    });
  }

  setQuote();
  getTweetableUrl();
});
