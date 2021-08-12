const add = document.getElementById("add");
const container = document.querySelector(".container2");

// const updataData = () => {
//   const textAreaData = document.querySelectorAll("textarea");

//   const notes = [];

//   textAreaData.forEach((note) => {
//     return notes.push(note.value);
//   });

//   console.log(notes);
//   localStorage.setItem("notes", JSON.stringify(notes));
// };

const addNewNote = (text = " ") => {
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `
    <div class="operation">
    <button class="delete"><img src="https://img.icons8.com/ios-glyphs/50/000000/delete-forever.png"/></button>
    
      </div>
      <div class="main"></div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    `;

  note.insertAdjacentHTML("afterbegin", htmlData);

  const editbutton = note.querySelector(".edit");
  const delbutton = note.querySelector(".delete");

  const main = note.querySelector(".main");

  const textarea = note.querySelector("textarea");

  // delete function
  delbutton.addEventListener("click", function () {
    note.remove();
  });

  //textarea function
  textarea.value = text;
  textarea.addEventListener("change", function () {
    // updataData();
  });

  container.appendChild(note);
};

//getting data back from local storage

// const notes = JSON.parse(localStorage.getItem("notes"));

// if (notes) {
//   notes.forEach(function (note) {
//     return addNewNote(note);
//   });
// }

add.addEventListener("click", function () {
  addNewNote();
});
