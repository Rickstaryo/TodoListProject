const quotes = [
    {
      quote: " “I have top players and, I’m sorry, we have a top manager. Please do not call me arrogant because what I say is true. I’m European champion, I’m not one out of the bottle, I think I’m a special one.” ",
      author: "Jose Morinho",
    },
    {
      quote: "“For me, pressure is bird flu. I’m feeling a lot of pressure with the problem in Scotland. It’s not fun and I’m more scared of it than football.”.",
      author: "Jose Morinho",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];

  const quote =document.querySelector("#quote span:first-child");
  const author =document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;