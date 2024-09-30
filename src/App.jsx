import React from "react";
import { Form } from "./components/form";
import { Card } from "./components/card/card";

function App() {
  const [javohir, setJavohir] = React.useState([]);

  const clearAll = () => {
    setJavohir([]); // Barcha kiritilgan ma'lumotlarni tozalash
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">To Do List</h1>
        <div className="clear">
          <button onClick={clearAll} className="clear_btn">
            Clear List
          </button>
        </div>
        <Form setData={setJavohir} />
        {javohir.length === 0 ? (
          <p className="text">Add Some Todos </p>
        ) : (
          javohir.map((item, index) => {
            return (
              <Card
                key={item.id}
                setData={setJavohir}
                id={item.id}
                name={item.userName}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
