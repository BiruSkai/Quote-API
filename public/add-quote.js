const submitButton = document.getElementById('submit-quote');
const newQuoteContainer = document.getElementById('new-quote');

const quoteInput = document.querySelector('#quote');
const personInput = document.querySelector('#person');
const yearInput = document.querySelector("#year");
const occupationInput = document.querySelector("#occupation");
const errorMessage = document.querySelector("#error-message");

submitButton.addEventListener('click', () => {
  const quote = quoteInput.value.trim();
  const person = personInput.value.trim();
  const year = yearInput.value.trim();
  const occupation = occupationInput.value.trim();

  if(quote && person && year && occupation) {
    errorMessage.style.display = "none";
    newQuoteContainer.style.display = "block";

    quoteInput.value = "";
    personInput.value = "";
    yearInput.value = "";
    occupationInput.value = "";

    fetch(`/api/quotes?quote=${quote}&person=${person}&year=${year}&occupation=${occupation}`, {
      method: 'POST',
    })
        .then(response => response.json())
          .then(({quote}) => {
            newQuoteContainer.innerHTML="";
            const newQuote= document.createElement('div');
            newQuote.innerHTML = `
            <h3 class='congratulations'>Congrats, your quote was added!</h3>
            <div class='quote-text'>${quote.quote}</div>
            <div class='attribution'>- ${quote.person}</div>
            <div class='year'>~ ${quote.year}</div>
            <div class='occupation'>* ${quote.occupation}</div>
            <p class='centered-text'>Go to the <a href='index.html'>home page</a> to request and view all quotes.</p>
              `;
              newQuoteContainer.appendChild(newQuote);
          });          
  } else {
    errorMessage.style.display = "block";
    newQuoteContainer.style.display = "none";
  }
});
