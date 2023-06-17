# Express JS - Quote API

## Table Of Contents:

1. [General Information](#general-information)
2. [Project Images](#project-images)
3. [Programming Languages](#programming-languages)
4. [Using The App](#using-the-app)
***

## General Information

This project from codeacademy , which is entitled **Quote API**, allows the user to **c**reate, **r**ead, **u**pdate, **d**elete (CRUD) a quote(s) from or to the app. 

The project had to satisfy the following prerequisites: 
- The server should listen to **port 4001**.
- A **GET api/quotes/random** that sends back a random quote from the data.
- A **GET api/quotes** route returns all available quotes from the app. If there is a query string with a     **person** attribute, the route should return all quotes said by the same person. **For instance**, the data set has multiple quotes for Grace Hopper, so GET **/api/quotes?person=Grace Hopper** should return an array of only those quotes. If there are **no quotes** for the requested person, send back an empty array.
- A **POST /api/quotes** route for adding new quotes to the data. New quotes will be passed in a query string with four properties: 
quote with the quote text itself, person with the person who is credited with saying the quote, the year when the quote was written, the occupation of the author.
This route should verify that both properties exist in the request query string and send a 400 response if it does not. If all is well, this route handler should add the new quote object to the data array.
- Optional completed tasks:<br>
✅ A **PUT** route for updating the data. (requiring a specific ID) <br>
✅ A **DELETE** route for deleting the quotes. (requiring a specific ID)<br> 
✅ Adding the year of the quotes and the occupation of the author to the API. 
***

## Project Images

- Homepage<br>
![homepage](/images/homepage.png)

- Random Quote<br>
![random quote](/images/get-random-quote.png)

- All Quotes<br>
![all quotes](/images/get-all-quotes.png)

- Fetch by Author (response)<br>
![get quote by person](/images/get-quoteByPerson-res.png)

- Add New Quote (request)
- Add New Quote (response)
- Update Quote (request)<br>
![update a quote request](/images/update-quote-req.png)
- Update Quote (response)<br>
![update a quote response](/images/update-quote-res.png)
- Delete Quote (response)<br>
![delete a quote by id response](/images/delete-quoteById-res.png)
***

## Programming Languages

- HTML
- CSS
- JS
- Node JS
- Express JS
***

## Using The App

In the command line navigate to the **root project** , then type **node server.js** or **nodemon server.js**



