export default function Item({ itemObj, deleteFunc, checkFunc }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => checkFunc(itemObj.id)}
      ></input>
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => deleteFunc(itemObj.id)}>❌</button>
    </li>
  );
}
