import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  itemsArray,
  onDeleteItems,
  onToggleItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortItems;
  if (sortBy === "input") {
    sortItems = itemsArray;
  } else if (sortBy === "description") {
    sortItems = itemsArray
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortItems = itemsArray.slice().sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortItems.map(function (item) {
          return (
            <Item
              itemObj={item}
              deleteFunc={onDeleteItems}
              checkFunc={onToggleItems}
              key={item.id}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
