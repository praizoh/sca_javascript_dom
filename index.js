const lists= document.querySelector('#book-list ul');

// delete books

lists.addEventListener('click', function(e){
    if (e.target.className=='delete'){
        const li=e.target.parentElement;
        lists.removeChild(li);
    }
});

// add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value= addForm.querySelector('input[type="text"]').value;

//    create elements
    const li= document.createElement('li');
    const bookName = document.createElement('span');
    const delBtn = document.createElement('span');


//  add content
    // bookName.className="name";
    // delBtn.className="delete"

// adds classes
    bookName.classList.add('name');
    delBtn.classList.add('delete');


    bookName.textContent=value;
    delBtn.textContent='delete';
    // append to document
    li.appendChild(bookName);
    li.appendChild(delBtn);
    lists.appendChild(li);
});

// hide books
hideBooks= document.querySelector('#hide');
hideBooks.addEventListener('change', function(e){
    if (hideBooks.checked){
        lists.style.display="none";
        document.querySelector('#add-book label').textContent='Show all books';
    }else{
        lists.style.display="initial";
        document.querySelector('#add-book label').textContent='Hide all books';
    }
});

//  filter books
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', function(e){
        const term= e.target.value.toLowerCase();
        const books= lists.querySelectorAll('li');
        books.forEach(function(book){
        const title=book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term)!=-1){
            book.style.display="block";
        }else
        {
            book.style.display='none';
        }
        });
    });