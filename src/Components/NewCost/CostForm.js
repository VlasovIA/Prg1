/*1-Решение не коментированное.Частичное изменение данных.
  2-Комент под ("2") мение надежное полное изменение данных.Данные могут не успеть измениться если много состояний.
  3- Комент под ("3") как 2ой только доп.передает актуальные состояния что бы все успело подгрузиться.
*/
import "./CostForm.css";
import React, { useState } from "react";

function CostForm(props) {
  const [inputName, setInputName] = useState(" ");
  const [inputAmount, setInputAmount] = useState(" ");
  const [inputDate, setInputDate] = useState(" ");
  /* (2-3) const [userInput, setUserInput] = useState({
     name: " ",
     amout: " ",
     date: " ",
     });*/

  function nameChangeHandler(event) {
    setInputName(event.target.value);
    /* (2)  setUserInput({
    ...userInput,
    name: event.target.value
    });*/
    /* (3) setUserInput((previosState) => {
      return {
      ...previosState,
      name: event.target.value,
      };
      });*/
  }
  function amountChangeHandler(event) {
    setInputAmount(event.target.value);
    /*(2) setUserInput({
     ...userInput,
     amout : event.target.value
     });*/
    /* (3) setUserInput((previosState) => {
        return {
        ...previosState,
        amout: event.target.value,
        };
        });*/
  }
  function dateChangeHandler(event) {
    setInputDate(event.target.value);
    /* (2) setUserInput({
    ...userInput,
    date: event.target.value
    });*/
    /* (3) setUserInput((previosState) => {
      return {
      ...previosState,
      date: event.target.value,
      };
      });*/
  }

  function submitHandler(event) {
    event.preventDefault();
    const costDate = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostDate(costDate);
    setInputAmount(" ");
    setInputDate(" ");
    setInputName(" ");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input tape="text" onChange={nameChangeHandler} value={inputName} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            tape="number"
            min="0,1"
            step="0,1"
            onChange={amountChangeHandler}
            value={inputAmount}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            tape="date"
            min="2021-01-01"
            step="2023-12-31"
            onChange={dateChangeHandler}
            value={inputDate}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>
        <button type={props.onCancel}>Отмена</button>
      </div>
    </form>
  );
}
export default CostForm;
