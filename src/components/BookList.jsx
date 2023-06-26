/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";

function BookList({ books, onDeleteBook, onToggleBook, clearList }) {
  const [sort, setSort] = useState("order");

  let sortedBooks;
  if (sort === "order") {
    sortedBooks = [...books].sort((a, b) => a.order - b.order);
  }

  if (sort === "title") {
    sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sort === "read") {
    sortedBooks = [...books].sort((a, b) => Number(a.read) - Number(b.read));
  }

  return (
    <div className="list">
      <ul>
        {sortedBooks.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteBook={onDeleteBook}
            onToggleBook={onToggleBook}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="order">Sort by input order</option>
          <option value="title">Sort by title</option>
          <option value="read">Sort by read status</option>
        </select>
        <button onClick={clearList}>Clear whole list list</button>
      </div>
    </div>
  );
}

export default BookList;
