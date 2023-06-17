const updateButton = document.getElementById("update-quote");
const updatedQuoteContainer = document.getElementById("new-quote");

const idInput = document.getElementById("id")
const quoteInput = document.getElementById("quote")
const personInput = document.getElementById("person")
const yearInput = document.getElementById("year")
const occupationInput = document.getElementById("occupation")
const errorMessage = document.getElementById("error-message");

updateButton.addEventListener("click", () => {
        const id = idInput.value.trim();
        const quote = quoteInput.value.trim();
        const person = personInput.value.trim();
        const year = yearInput.value.trim();
        const occupation = occupationInput.value.trim();

        if(id && quote && person && year && occupation) {
                errorMessage.style.display= "none";
                updatedQuoteContainer.style.display= "block";

                idInput.value="";
                quoteInput.value="";
                personInput.value="";
                yearInput.value="";
                occupationInput.value="";

                fetch(`/api/quotes/${id}`, {
                        method: "PUT",
                        headers: {
                                "Content-Type" :"application/json"
                        },
                        body: JSON.stringify({
                                quote: quote,
                                person: person,
                                year: year,
                                occupation: occupation
                        })
                })
                .then(response => response.json())
                        .then(({quote}) => {
                                updatedQuoteContainer.innerHTML="";
                                const updatedQuote = document.createElement("div");
                                updatedQuote.innerHTML = `
                                <h3 class='congratulations'>Congrats, the quote was updated!</h3>
                                Quote id: ${quote.id}. <blockquote class='quote-text'>${quote.quote}</blockquote>
                                <div class='attribution'>- ${quote.person}</div>
                                <div class='occupation'>~ ${quote.occupation}</div>
                                <div class='year'>* ${quote.year}</div>
                                <p class='centered-text'>Go to the <a href='index.html'>home page</a> to request and view all quotes.</p>
                                `;
                                updatedQuoteContainer.appendChild(updatedQuote);
                        });
                
        } else {
                errorMessage.style.display="block";
                updatedQuoteContainer.style.display="none";
        };
});