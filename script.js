let notes = [];
function clickMe(){
    let date = new Date;
    let note = prompt("write your heading", date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + ": ");
    notes.push(note);


    document.getElementById('notes-info').innerHTML = 
    "You have " + (notes.length + 2) + " notes"; 

    const FEATURED = document.querySelector("main");

    let addArticle = document.createElement("article");
    let h2Element = document.createElement("h2");
    let pElement = document.createElement("p");

    let h2NoteText = document.createTextNode(note);

    h2Element.appendChild(h2NoteText);

    addArticle.appendChild(h2Element);

    FEATURED.insertBefore(addArticle, FEATURED.firstChild);

    let paraNotes = prompt("write your notes");

    let pNoteText = document.createTextNode(paraNotes);

    pElement.appendChild(pNoteText);

    addArticle.appendChild(pElement);
}