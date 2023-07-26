function ListGroup() {
  let items = ["Tokyo", "Beirut", "Stockton", "London", "Austin"];
  items = [];

//   const getMessage = () => {
//     items.length === 0 ? <p>No Item found</p> : null;
//   };

  return (
    <>
      <h1>List</h1>

      {/* {items.length === 0 ? <p>No Item found</p> : null} */}
      {items.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
