import Diagram from "../../Diagram/Diagram";

function CostDiagram(props) {
  const monthDiagram = [
    { lable: "Янв", value: 0 },
    { lable: "Фев", value: 0 },
    { lable: "Мар", value: 0 },
    { lable: "Апр", value: 0 },
    { lable: "Май", value: 0 },
    { lable: "Июн", value: 0 },
    { lable: "Июл", value: 0 },
    { lable: "Авг", value: 0 },
    { lable: "Сен", value: 0 },
    { lable: "Окт", value: 0 },
    { lable: "Ноя", value: 0 },
    { lable: "Дек", value: 0 },
  ];

  for (const cost of props.costs) {
    const costMonth = cost.date.getMonth();
    monthDiagram[costMonth].value += cost.amount;
  }

  return <Diagram dataSets={monthDiagram} />;
}
export default CostDiagram;
