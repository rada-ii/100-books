import Logo from "./Logo";
import Form from "./Form";
import BookList from "./BookList";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const initialBooks = [
    { id: 1, order: 1, title: "Idiot", read: false },
    { id: 2, order: 2, title: "War & Peace", read: false },
    {
      id: 3,
      order: 3,
      title: "Pride and Prejudice",
      read: false,
    },
    {
      id: 4,
      order: 4,
      title: "The Brothers Karamazov",
      read: false,
    },
    {
      id: 5,
      order: 5,
      title: "The Divine Comedy",
      read: false,
    },
    { id: 6, order: 6, title: "Hamlet", read: false },
    {
      id: 7,
      order: 7,
      title: "The Little Prince",
      read: false,
    },
    { id: 8, order: 8, title: "Madame Bovary", read: false, possession: false },
    { id: 9, order: 9, title: "The Stranger", read: false },
    {
      id: 10,
      order: 10,
      title: "The Lord of the Rings",
      read: false,
    },
  ];

  const [books, setBooks] = useState(initialBooks);

  const [selectedNumbers, setSelectedNumbers] = useState(
    Array.from({ length: 100 }, (_, i) => i + 1)
  );

  function handleDeleteBook(id) {
    setBooks((prev) => prev.filter((book) => book.id !== id));
    setSelectedNumbers((prev) => {
      if (!prev.includes(id)) {
        return [...prev, id].sort((a, b) => a - b);
      }
      return prev;
    });
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all books?"
    );

    if (confirmed) {
      setBooks([]);
      setSelectedNumbers(
        Array.from({ length: 100 }, (_, i) => {
          const number = i + 1;
          return number <= 10 ? number : initialBooks.length + number;
        })
      );
    }
  }

  function handleToggleBook(id) {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form
        setBooks={setBooks}
        selectedNumbers={selectedNumbers}
        setSelectedNumbers={setSelectedNumbers}
      />
      <BookList
        books={books}
        onDeleteBook={handleDeleteBook}
        onToggleBook={handleToggleBook}
        clearList={handleClearList}
      />
      <Footer books={books} />
    </div>
  );
}

export default App;
