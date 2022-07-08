import CostDate from "../Costs/CostDate";
import CostForm from "./CostForm";
import "./NewCost.css";

function NewCost(props) {
  function saveCostHandler(inputCostDate) {
    const costDate = {
      ...inputCostDate,
      id: Math.random().toString(),
    };
    props.onAddCostDate(costDate);
  }
  
  

  return (
    <div className="new-cost">
      <CostForm onSaveCostDate={saveCostHandler} />
    </div>
  );
}

export default NewCost;
