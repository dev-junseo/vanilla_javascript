const quotes = [
    {
        quote : "If you walk 3 hours a day, you can circle the earth once in 7 years.", 
        author : "Samuel Johnson",
    },
    {
        quote : "I would be happy if I could always focus on the present.", 
        author : "Paulo Coelho",
    },
    {
        quote : "Small opportunities often lead to great achievements.", 
        author : "Demosthenes",
    },
    {
        quote : "You shouldn't have only your heart. must practice", 
        author : "Bruce Lee",
    },
    {
        quote : "Fools seek happiness in the distance, wise men nurture it at their feet.", 
        author : "james oppenheim",
    },
    {
        quote : "Don't confuse one failure with eternal failure", 
        author : "F. Scott Fitgerald",
    },
    {
        quote : "In order to achieve good results, step by step, you must be strong and faithful.", 
        author : "Dante",
    },
    {
        quote : "Happiness is a habit, keep it in your body", 
        author : "Harvard",
    },
    {
        quote : "Make a clear distinction between work time and play time. Understand the importance of time, enjoy every moment and use it usefully.", 
        author : "Louisa Mayalcott",
    },
    {
        quote : "Look what the pain has left behind! After suffering, joy always permeates", 
        author : "Goethe",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes.length);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
