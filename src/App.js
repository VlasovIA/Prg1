import { useState } from "react";
import Costs from "./Components/Costs/Costs";
import NewCost from "./Components/NewCost/NewCost";

const INITIAL_COST = [
  {
    id: "i1",
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: "i2",
    date: new Date(2022, 5, 15),
    description: "Египет",
    amount: 1500.0,
  },
  {
    id: "i3",
    date: new Date(2022, 11, 17),
    description: "Машина",
    amount: 8999.99,
  },
];

function App() {
  const [cost, setCost] = useState(INITIAL_COST);

  function addCostHandler(cost) {
    setCost((privCosts) => {
      return [cost, ...privCosts];
    });
  }

  return (
    <div>
      <NewCost onAddCostDate={addCostHandler} />
      <Costs costs={cost} />
    </div>
  );
}

export default App;
