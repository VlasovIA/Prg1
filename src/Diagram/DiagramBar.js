import "./DiagramBar.css";

function DiagramBar(props) {
  
   let barMax = "0%";

   if(props.maxValue>0){
      barMax = Math.round (props.value / props.maxValue * 100) + "%";
   }
  
   return (
    <div className="diagram-bar">
      <div className="diagram-bar__inner">
        <div className="diagram-bar__fill" style={{height : barMax}}></div>
        </div>
        <div className="diagram-bar__label">{props.lable}</div> 
    </div>
  );
}
export default DiagramBar;
