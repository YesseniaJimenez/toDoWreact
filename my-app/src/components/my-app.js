import { useState } from "react";
import Task from "./task";
export default function Skeduler() {
  const [tittle, setTittle] = useState("");
  const [list, setList] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    const value = e.target.value;
    setTittle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const item = {
      id: crypto.randomUUID(),
      tittle,
      completed: false,
    };
    setList([item, ...list]);
    setTittle("");
  }

  function handleOnUpdate(id, value) {
    const temp = [...list];
    const item = temp.find((item) => item.id === id);
    item.tittle = value;
    setList(temp);
  }

  function handleDelete(id) {
    const temp = [...list];
    const items = temp.filter((item) => item.id !== id);
    setList(items);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={tittle}></input>
        <input type="submit" onClick={handleSubmit}></input>
      </form>
      <div>
        {list.map((item) => (
          <Task
            key={item.id}
            item={item}
            onUpdate={handleOnUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
