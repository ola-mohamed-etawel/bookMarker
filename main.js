var nameInput = document.getElementById("name");
var urlInput = document.getElementById("Url");
var addBtn = document.getElementById("addBtn");
var mainIndex = 0;

var list = [];

if (localStorage.getItem("list") == null) {
  //law awl mara yd5ol
  list = [];
} else {
  //law msh awl mara yd5ol
  list = JSON.parse(localStorage.getItem("bookMark"));
  console.log(list);
  console.log(list.length);

  displayBookMark(list); //3lshan awl m afta7 ygeeb el data elly mt5azena
}

function addBookMark() {
  if (addBtn.innerHTML == "Update") {
    addBtn.innerHTML = "submit";
    var bookMark = {
      name: nameInput.value,
      url: urlInput.value,
    };
    list.splice(mainIndex, 1, bookMark);
    //ashel el main index w a7t mkano el book mark b3d elt3del
  } else {
    var bookMark = {
      name: nameInput.value,
      url: urlInput.value,
    };
    list.push(bookMark);
  }

  // localStorage.setItem("bookMark", JSON.stringify(list));

  setToLocalStorage();
  displayBookMark(list); // awl m a3ml click y add bookmark
  clearForm(); //invock clear form  //حطيتها هناعلشان يعمل  كلير للفورم بعدميضيف البرودكت عندي
}

function displayBookMark(anyArray) {
  var kartona = ``;
  for (i = 1; i < anyArray.length; i++) {
    kartona += `
    <tr>
    <td class="text-muted ">${i} </td>
     <td>${anyArray[i].name}</td>
            <td><a class="text-decoration-none" href="${anyArray[i].url}"><button class="btn submit">Visit</button></a></td>
            <td><button type="button" class="btn btn-secondary" onclick="updateBook(${i})">Update</button></td>
            <td><button type="button" class="btn btn-danger" onclick="deleteBook(${i})">Delete</button></td>
     </tr>
     `;
  }
  // tableBody.innerHTML=kartona  ;
  document.getElementById("tableBody").innerHTML = kartona;
}

//CLEAR FORM
function clearForm() {
  nameInput.value = "";
  urlInput.value = "";
}

//setToLocalStorage
function setToLocalStorage() {
  localStorage.setItem("bookMark", JSON.stringify(list));
}

//DELETE FUNCTION
function deleteBook(index) {
  list.splice(index, 1);
  displayBookMark(list);

  setToLocalStorage();
  console.log(list);
}

//UPDATE FUNCTION
function updateBook(index) {
  nameInput.value = list[index].name;
  urlInput.value = list[index].url;
  mainIndex = index;
  addBtn.innerHTML = "Update";
}

function search(searchKey) {
  var searchList = [];
  // var searchKey=document.getElementById("inpVa").value;
  for (var i = 0; i < list.length; i++) {
    if (list[i].name.toLowerCase().includes(searchKey.toLowerCase())) {
      searchList.push(list[i]);
    }
  }
  // console.log(searchKey);
  displayBookMark(searchList)
}
