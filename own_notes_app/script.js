const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main");

// play with API fetch() and access and display data. 

const saveNotes = () =>{
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach((note)=>{
        data.push(note.value)
    })
    // console.log(data);
    localStorage.setItem("notes",JSON.stringify(data));
}

addBtn.addEventListener("click",function(){
    addNote()
})

const addNote = () => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="note">
            <div class="tool">
                <i class="save fas fa-save"></i>
                <i class=" trash fas fa-trash"></i>
            </div>
            <textarea></textarea>
        </div>
    `
    note.querySelector(".trash").addEventListener("click",function (){
        note.remove();
        saveNotes();
    }) 
    
    note.querySelector(".save").addEventListener("click",function(){
        saveNotes();
    })
    
    main.appendChild(note)
    saveNotes()
}