import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostsList from "./CostsList";
import CostDiagram from "./CostDiagram";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2022");

  function costFilterHandler(filter) {
    setSelectedYear(filter);
  }

  const filtredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={costFilterHandler} />
        <CostDiagram costs={filtredCosts} />
        <CostsList costs={filtredCosts} />
      </Card>
    </div>
  );
}

export default Costs;
