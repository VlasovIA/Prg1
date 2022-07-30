import { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

function NewCost(props) {
  const [inVisible, setInVisible] = useState(false);
  function saveCostHandler(inputCostDate) {
    const costDate = {
      ...inputCostDate,
      id: Math.random().toString(),
    };
    props.onAddCostDate(costDate);
    setInVisible(false);
  }
  function onVisibleHandler() {
    setInVisible(true);
  }
  function offVisibleHandler() {
    setInVisible(false);
  }

  return (
    <div className="new-cost">
      {!inVisible && (
        <button onClick={onVisibleHandler}>Добавить новый расход</button>
      )}
      {inVisible && (
        <CostForm
          onSaveCostDate={saveCostHandler}
          onCancel={offVisibleHandler}
        />
      )}
    </div>
  );
}

export default NewCost;
