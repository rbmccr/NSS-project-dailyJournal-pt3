const container = document.querySelector(".entryLog");

// Accepts single object (journal entry) and returns string template
const makeJournalEntryComponent = function(journalEntry) {
  return `
    <section class="entry--posted"> 
      <h2>${journalEntry.concept}</h1>
      <hp>${journalEntry.date}</p> 
      <p>${journalEntry.entry}</p>
      <footer>${journalEntry.mood}</footer>
    </section>
  `
}

// Accepts array of objects, loops through each, passes each into 
// function, appends each return to the DOM
function renderJournalEntries(entries) {
  entries.forEach(journalEntry => {
    container.innerHTML += makeJournalEntryComponent(journalEntry);
  });
}

//fetches JSON data from local database and passes data into function
fetch("http://localhost:8088/journalEntries")
  .then(JSONentries => JSONentries.json())
  .then(entries => renderJournalEntries(entries))