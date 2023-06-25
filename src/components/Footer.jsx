// function Footer({ books }) {
//   const numBooks = books.length;
//   const numRead = books.filter((book) => book.read).length;
//   const percentage = Math.round((numRead / numBooks) * 100);

//   return (
//     <footer className="stats">
//       You have read {percentage} % of the books!
//     </footer>
//   );
// }

// export default Footer;

function Footer({ books }) {
  const numBooks = books.length;
  const numRead = books.filter((book) => book.read).length;
  const percentage =
    numBooks === 0 ? 0 : Math.round((numRead / numBooks) * 100);

  return (
    <footer className="stats">You have read {percentage}% of the books!</footer>
  );
}

export default Footer;
