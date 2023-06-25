//

function Item({ item, onDeleteBook, onToggleBook }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.read}
        onChange={() => onToggleBook(item.id)}
      />
      <span style={item.read ? { textDecoration: "line-through" } : {}}>
        {item.order}
        .&nbsp;
        {item.title}
        {item.read}
      </span>
      <button onClick={() => onDeleteBook(item.id)}>❌</button>
    </li>
  );
}

export default Item;
