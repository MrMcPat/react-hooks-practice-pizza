import React from "react";

function PizzaForm({id, topping, size, vegetarian, onUpdatePizza}) {

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topping: topping,
        size: size,
        vegetarian: vegetarian === "Vegetarian" ? true : false
      })
    })
    .then(resp => resp.json())
    .then(onUpdatePizza)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={e => console.log(e.target.value)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={e => console.log(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={vegetarian === "Vegetarian"}
              onChange={e => console.log(e.target.checked)}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={vegetarian === "Not Vegetarian"}
              onChange={e => console.log(e.target.checked)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
