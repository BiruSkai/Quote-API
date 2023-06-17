const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(
        express.urlencoded({
                extended: true
        })
);
app.use(express.json());

app.get("/api/quotes/random", (req, res) => {
        res.send({
                 quote: getRandomElement(quotes)
        });
});

app.get("/api/quotes", (req, res) => {
        if(req.query.person !== undefined) {
                const personQuotes = quotes.filter((quote) => quote.person === req.query.person);
                res.send({
                        quotes: personQuotes
                });
        } else {
                res.send({
                        quotes: quotes
                });
        }
})

app.post("/api/quotes/", (req, res) => {
        const {quote, person, year, occupation} = req.query;
        let response = {
                quote: {}
        };
        if(quote && person && year && occupation) {
                const newId = quotes.length + 1;
                const newQuote = {
                        id: newId,
                        quote: req.query.quote,
                        person: req.query.person,
                        year: req.query.year,
                        occupation: req.query.occupation
                }
                quotes.push(newQuote);
                response.quote = newQuote;
                res.status(201).send(response);
        } else {
                res.status(404).send();
        }
})

app.put("/api/quotes/:id", (req, res) => {
        let {id} = req.params;
        id = parseInt(id);
        const {quote, person, year, occupation} = req.body;
        const quoteToUpdate = quotes.filter((quote) => {
                return quote.id === id;
        })[0];
        let response = {
                quote: {}
        }
        if(quoteToUpdate && person && quote && year && occupation) {
                const fillingUpdate = {
                        id: id,
                        quote: quote,
                        person: person,
                        year: year,
                        occupation: occupation
                };
                const indexToUpdate = quotes.indexOf(quoteToUpdate);
                quotes.splice(indexToUpdate, 1, fillingUpdate);
                response.quote = fillingUpdate;
                res.status(201).send(response);
        } else {
                res.status(400).send();
        };
});

app.delete("/api/quotes/:id", (req, res, next) => {
        const {id} = req.params;
        const quoteToDelete = quotes.filter(quote => {
                return quote.id === parseInt(id);
        })[0];
        if (quoteToDelete) {
                const indexToDelete = quotes.indexOf(quoteToDelete);
                quotes.splice(indexToDelete, 1);
                for(let i = 0, j = 1; i < quotes.length; i++, j++ ) {
                        quotes[i].id = j;
                }
                res.status(204).send();
        } else {
                res.status(400).send();
        }
})

app.listen(PORT, () => {
        console.log(`Server is listening on PORT ${PORT}`)
})

