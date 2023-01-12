// basic server structure
// const express = require('express'); // is the way to import dependency or package or third party library 

// const app = express();
// const PORT = process.env.PORT || 3001;

// //sending a response to frontend or clientside
// app.get('/', (req, res) => {
//     res.send('<h1>Welcome to EJS<h1>');
// });

// app.get('/about', (req, res) => {
//     res.send('<h1>We are web developers<h1>');
// });

// app.get('/services', (req, res) => {
//     res.send(
//         `<h1>We render different services such as coding of javascript<h1> <br />
//         <h3>We also train students from age 10 upward</h3>`
//     );
// });

// app.listen(PORT, () => {
//     console.log(`sever is running at http://localhost:${PORT}`);
// });

// Challenge Area
// build a basic server with the following routes
// '/', '/booking', '/payment', '/features', '/contact'
//  startup your express server -> npm start or npm run dev

// const express = require('express'); 

// const app = express();
// const PORT = process.env.PORT || 3001;

// //sending a response to frontend or clientside
// app.get('/', (req, res) => {
//     res.send('<h1>Welcome to EJS<h1>');
// });

// app.get('/booking', (req, res) => {
//     res.send('<h1>Come book a room in our hotel!<h1>');
// });

// app.get('/payment', (req, res) => {
//     res.send(
//         `<h1>We have different payment plan such as <h1> <br />
//         <h3>Paypal</h3> <br />
//         <h3>PayStack</h3> <br />
//         <h3>Google pay</h3> <br />
//         <h3>Stripe</h3> <br />
//          `
//     );
// });

// app.get('/feature', (req, res) => {
//     res.send(
//         `<h1>We have so many feature on VScode such as <h1> <br />
//         <h3>Indigo interface</h3> <br />
//         <h3>Light blue logo</h3> <br />
//         `
//     );
// });

// app.get('/contact', (req, res) => {
//     res.send('<h1>You can call us on 08052204600<h1>');
// });

// app.listen(PORT, () => {
//     console.log(`sever is running at http://localhost:${PORT}`);
// });


const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// setup the template engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true })); // it enables sending of data from clientside to backend
app.use(bodyParser.urlencoded({ extended: true }));

let plNames = ['c', 'c++', 'java', 'python']; 

//sending a response to frontend or clientside
app.get('/', (req, res) => {
    // res.status(200).send('<h1>Welcome to EJS<h1>');
    res.status(200).render('index', { pageTitle: 'Home Page', proNames: plNames });
});

// getting data from frontend and insert it inot plnames array of string
app.post('/', (req, res) => {
    const plName = req.body.plName;
    plNames.push(plName);
    // console.log(plName);
    // res.status(201).send('data is created');
    res.redirect('/');
});

app.get('/contact', (req, res) => {
    res.status(200).render('contact', { pageTitle: 'Contact Page' });
});

app.listen(PORT, () => {
    console.log(`sever is running at http://localhost:${PORT}`);
});
