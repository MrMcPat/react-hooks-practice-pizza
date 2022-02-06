import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [topping, setTopping] = useState("")
  const [size, setSize] = useState("Small")
  const [vegetarian, setVegetarian] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(resp => resp.json())
    .then(data => setPizzas(data))
  }, [])

  function handleEdit(pizza) {
    setTopping(pizza.topping)
    setSize(pizza.size)
    setVegetarian(pizza.vegetarian ? "Vegetarian" : "Not Vegetarian")
  }

  function handleUpdatePizza(updatedPizza) {
    const updatedPizzas = pizzas.map(pizza => {
      return pizza.id === updatedPizza.id ? updatedPizza : pizza
    })
    setPizzas(updatedPizzas)
  }

  return (
    <>
      <Header />
      <PizzaForm id={pizzas.id} topping={topping} size={size} vegetarian={vegetarian} onUpdatePizza={handleUpdatePizza}/>
      <PizzaList pizzas={pizzas} onEdit={handleEdit}/>
    </>
  );
}

export default App;
