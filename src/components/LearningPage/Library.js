import React, { useState, useEffect } from 'react';
import './Library.css'


function Library() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    function fetchbooks() {
      document.getElementById("output").innerHTML = "";
      fetch("http://openlibrary.org/search.json?author=Roald+Dahl&limit=25")
        .then(response => response.json())
        .then(data => {
          var books = data.docs.filter(doc => doc.cover_i).slice(0, 20); // filter out books without covers and limit to 20
          setBooks(books);
        })
        .catch(error => console.log(error));
    }
    fetchbooks();
  }, []);

  return (
    <div>
      <button onClick={() => window.location.reload()}>Book Corner</button>
      <br />
      <div id="output">
        {books.map(book => (
          <div key={book.key} className="book">
            <h2>{book.title}</h2>
            {book.author_name[0]}<br />
            <a href={`http://openlibrary.org${book.key}`} target="_blank" rel="noopener noreferrer">
              <img src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
            </a><br />
            <a href={`http://openlibrary.org${book.key}`} target="_blank" rel="noopener noreferrer">Read Book</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;