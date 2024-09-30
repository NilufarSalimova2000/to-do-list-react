import React from "react";
import deleteIcon from "../../assets/delete_icon.svg"

export const Card = ({ name, setData, id }) => {
  const [count, setCount] = React.useState(0);
  const deleteItem = () => {
    setData((pState) => pState.filter((item) => item.id !== id));
  };

  const editItem = () => {
    let newName = prompt("Enter new text");
    if (newName) {
      setData((pState) =>
        pState.map((item) =>
          item.id === id ? { ...item, userName: newName } : item
        )
      );
    }
  };

  return (
    <div className="content">
      <div className="list">
        <h2 className="todo_title">
          {/* {count} */}
          {name}
        </h2>
        {/* <button onClick={() => setCount(count + 1)}>+</button> */}
        <div className="btns">
          <button className="delete_btn" onClick={deleteItem}>
            <img src={deleteIcon} alt="icon" />
          </button>
          <button className="edit_btn" onClick={editItem}>+</button>
        </div>
      </div>
    </div>
  );
};
