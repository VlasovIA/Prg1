import Costs from "./Components/Costs/Costs";
import NewCost from "./Components/NewCost/NewCost";

function App() {
  const costs = [
    {
      id: "c1",
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      id: "c2",
      date: new Date(2022, 5, 15),
      description: "Египет",
      amount: 1500.0,
    },
    {
      id: "c3",
      date: new Date(2022, 11, 17),
      description: "Машина",
      amount: 8999.99,
    },
  ];
  function addCostHandler(cost) {
    console.log(cost);
  }

  return (
    <div>
      <NewCost onAddCostDate={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
