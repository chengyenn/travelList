import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // 當 form 被 submit 時要做什麼
  function handleSubmit(event) {
    // 1.form submit 後不會 reload
    event.preventDefault();

    // 當沒有輸入任何值時還是會建立 description 為空的 newItem，因此這邊建立保護機制
    if (!description) return;

    // 2.把數據從 form 中提取出來
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);

    // 3.觸發 handleAddItems function，將新增的 item data 保存起來到 items
    onAddItems(newItem);

    // 4.提交後將表單設為初始狀態
    setDescription("");
    setQuantity(1);
  }

  return (
    // onSubmit={handleSubmit} 等同於 onSubmit={(event) => handleSubmit(event)}
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))} // event.target.value 會是 String，所以要將它轉成數值再傳給 State
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
