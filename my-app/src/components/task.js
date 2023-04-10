import { useState } from "react";

export default function Task(props) {
  const { item, onUpdate, onDelete } = props;
  const [isEdited, setIsEdited] = useState(false);

  function Edit() {
    const [newValue, setNewValue] = useState(item.tittle);

    function handleOnChange(e) {
      e.preventDefault();
      setNewValue(e.target.value);
    }

    function handleClick(e) {
      e.preventDefault();
      onUpdate(item.id, newValue);
      setIsEdited(false);
    }

    function handleSubmit(e) {
      e.preventDefault();
    }
    return (
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnChange} value={newValue} />
        <button onClick={handleClick}>update</button>
      </form>
    );
  }
  function Item() {
    function handleEdit(e) {
      e.preventDefault();
      setIsEdited(true);
    }

    function handleDelete(e) {
      e.preventDefault();
      onDelete(item.id);
    }
    return (
      <div>
        {item.tittle}
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }

  return <div>{isEdited ? <Edit /> : <Item />}</div>;
}
