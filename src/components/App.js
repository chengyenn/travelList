import { useState } from "react";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Form from "./Form";
import Stats from "./Stats";

export default function App() {
  // 要將 items State 傳給 <PackingList />
  //但因為 <Form /> 不是 <PackingList /> 的 父Component 所以不能用 Props，要使用 Lift Up State
  // State 從原本的 <Form /> 提升到 <App/>
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    // 不允許改變 state，所以不能寫 items.push(newItem)，要用創建新 Array 的方式（包含原本的 item 跟新的 item）
    // [...items]表示將 items Array 噴灑在新的 Array 上，再加入 newItem
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItems(id) {
    // 只留下 Array 中符合篩選條件的 item
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        // 當該 object 的 id 就是被 check 的 id，就傳回 packed 相反，其餘值都相同的 object
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items ⁉️"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        itemsArray={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearList={handleClearList}
      />
      <Stats itemsArray={items} />
    </div>
  );
}
