import express from 'express';
import cors from 'cors';

const app = express();
// We need a database of quotes
const quotes = [
   'JavaScript is the duct tape of the internet.',
    'The best way to learn JavaScript is to write JavaScript.',
    'JavaScript is the language of the web.',
    'With JavaScript, you can build anything you can imagine.',
    'JavaScript is not just a language, it\'s a mindset.',
    'Learning JavaScript is like learning to speak the language of the web.',
    'JavaScript is the key to unlocking the full potential of the web.',
    'The more you practice JavaScript, the better you get.',
    'JavaScript is the most powerful tool in a web developer’s toolkit.',
    'JavaScript is the bridge between creativity and functionality.',
    'Every line of JavaScript you write is a step closer to mastery.',
    'JavaScript is the canvas on which you can paint your web dreams.',
    'The journey of learning JavaScript is as rewarding as the destination.',
    'JavaScript is the magic wand that brings web pages to life.',
    'With JavaScript, the possibilities are endless.'
];
/*
// Route that sends back a random quote from the database
- Create a GET route with the path of '/quote'
-Your code block should create a variable randomQuote that is assigned a random string from the quotes array
-Use the responseObj.send method to send an object back with a property of quote that has the value of your randomQuote string
{
quote: 'Javascript is the tool that turns ideas into reality.'
}

*/

// When a route sends back an array or an object, it is an API route
// When a route is an API route, you should prefix the path with a/api
// Allow other domains to make requests to our server
app.use(cors());

app.get('/api/quote', (_, responseObj) => {
    const randomQuote = quotes[Math.floor(Math.random()* quotes.length)];
    responseObj.send({ quote: randomQuote })
});


// app.get('/', (_, responseObj) => {
//     responseObj.send('Hi there from the server!');
// });

// app.get('/data', (_, responseObj) => {
//     const data = {
//         name: 'Kandyce',
//         age: 35
//     };
//     responseObj.send(data);
// });

app.listen(3333, () => {
    console.log('Server started on port 3333');
});