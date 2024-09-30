import React from "react";

export const Form = ({ setData }) => {
  const [inputValue, setInputValue] = React.useState("");
  const submit = (e) => {
    e.preventDefault();

    setData((pState) => {
      return [...pState, { userName: inputValue, id: Date.now() }];
    });

    setInputValue("");
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        name="userName"
        type="text"
        value={inputValue}
        placeholder="Add a todo"
        className="todo_input"
      />
      <button className="add_btn" type="submit">Add</button>
    </form>
  );
};
