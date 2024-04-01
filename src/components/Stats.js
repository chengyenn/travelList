export default function Stats({ itemsArray }) {
  if (itemsArray.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to you packing list🚀</em>
      </footer>
    );
  }

  const numItems = itemsArray.length;
  const numPacked = itemsArray.filter((item) => item.packed).length;
  const packedPercent = Math.round((numPacked / numItems) * 100); // 四捨五入
  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${packedPercent}%)`}
      </em>
    </footer>
  );
}
