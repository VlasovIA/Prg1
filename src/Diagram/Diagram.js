import "./Diagrams.css";
import DiagramBar from "./DiagramBar";

function Diagram(props) {
  const newLocal = props.dataSets.map((dataSets) => dataSets.value);
  const dataSetValue = newLocal;

  const maxMonthCost = Math.max(...dataSetValue);

  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.lable}
          value={dataSet.value}
          lable={dataSet.lable}
          maxValue={maxMonthCost}
        />
      ))}
    </div>
  );
}
export default Diagram;
