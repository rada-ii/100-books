import { useRef, useState } from "react";

function Form({ setBooks }) {
  const selRef = useRef();
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputValue) return;

    const selectedNumber = parseInt(selRef.current.value);
    const isNumberSelected = selectedOptions.some(
      (option) => option.id === selectedNumber
    );

    if (isNumberSelected) {
      alert(
        "This number has already been selected. Please choose another number."
      );
      return;
    }

    const newBook = {
      id: selectedNumber,
      title: inputRef.current.value,
      order: selectedNumber,
      read: false,
    };

    setBooks((prev) => [...prev, newBook]);
    setSelectedOptions((prev) => [...prev, newBook]);

    selRef.current.value = "";
    setInputValue("");
  }

  const isListEmpty = selectedOptions.length === 0;
  const availableOptions = Array.from({ length: 100 }, (_, i) => i + 1)
    .filter((num) =>
      isListEmpty
        ? num > 10
        : !selectedOptions.some((option) => option.id === num && num <= 10)
    )
    .sort((a, b) => a - b);

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
