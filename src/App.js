import Costs from "./Components/Costs/Costs";

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2022, 5, 15),
      description: "Египет",
      amount: 1500.0,
    },
    {
      date: new Date(2022, 11, 17),
      description: "Машина",
      amount: 8999.99,
    },
  ];
  return (
    <div>
      <h1>Начнем изучение reack</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
