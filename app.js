const form ={};

form.text = document.querySelector('#FormText');
form.addBtn = document.querySelector('#addNote');

const SavedNotes = document.querySelector('#savedNotes');

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

function addNote(){
    let text = escapeHtml(form.text.value);
    let card = document.createElement('div');
    let note = document.createElement('div');
    let deleteButton = document.createElement('a');
    let editButton = document.createElement('a');

    card.innerHTML = '<div></div>';
    editButton.innerHTML = '<a href="#" class="btn btn-primary my-2 mx-2" id = "editNote" style = "display: block;"><i class="far fa-edit"></i> Edit</a>'
    deleteButton.innerHTML = '<a href="#" class="btn btn-danger my-2 mx-2" id = "deleteNote" style = "display: block;">&times Delete</a>'
    note.innerHTML = '<div class = "card-body"><div class = "card-title"><h3>Note</h3>' + '</div>' + text + '</div>';

    note.appendChild(editButton);
    note.appendChild(deleteButton);
    card.appendChild(note);

    card.classList.add('card');
    form.text.value = '';

    SavedNotes.appendChild(card);

    editButton.addEventListener('click', function(e){
        e.preventDefault();
        let ntext =escapeHtml(prompt('Enter new text: ',""));
        console.log(ntext);
        if(ntext) {
        note.innerHTML = note.innerHTML = '<div class = "card-body"><div class = "card-title"><h3>Note</h3>' + '</div>' + ntext + '</div>';
        note.appendChild(editButton);
        note.appendChild(deleteButton);
        card.appendChild(note);
        }
        else{
            alert("Field Cannot be empty");
        }
    })
    

    deleteButton.addEventListener('click', function(e){
        e.preventDefault();
        SavedNotes.removeChild(card);
    })

}


form.addBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (form.text.value != '') {
        addNote();
      }
    else{
        alert('Field cannot be empty');
      }
})
