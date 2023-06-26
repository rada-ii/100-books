/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";

function Form({
  setBooks,
  books,
  selectedNumbers,
  setSelectedNumbers,
  clearList,
}) {
  const selRef = useRef();
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputValue) return;

    const selectedNumber = parseInt(selRef.current.value);

    const newBook = {
      id: selectedNumber,
      title: inputRef.current.value,
      order: selectedNumber,
      read: false,
    };

    setBooks((prev) => [...prev, newBook]);
    setSelectedNumbers((prev) => prev.filter((num) => num !== selectedNumber));

    selRef.current.value = "";
    setInputValue("");
  }

  useEffect(() => {
    setSelectedNumbers(Array.from({ length: 100 }, (_, i) => i + 1));
  }, [clearList]);

  const availableOptions = selectedNumbers.filter(
    (num) => !books.map((e) => e.id).includes(num)
  );

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h4>Add book to the list</h4>
        <select ref={selRef}>
          <option value="">Select a number</option>
          {availableOptions.map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Title.."
          ref={inputRef}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default Form;
