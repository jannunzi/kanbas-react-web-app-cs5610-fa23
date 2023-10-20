import Add from "./Add";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

function Assignment4() {
  const sayHello = () => {
    alert("Hello World!");
  };
  return (
    <div>
      <h1>Assignment 4</h1>
      <ReduxExamples />
      <ParentStateComponent />
      <ArrayStateVariable />
      <ObjectStateVariable />
      <DateStateVariable />
      <StringStateVariables />
      <BooleanStateVariables />
      <Counter />
      <EventObject />
      <PassingFunctions
        theFunction={() => {
          alert("Life is Good!");
          sayHello();
        }}
      />
      <PassingDataOnEvent />
      <ClickEvent />
      <Add a={1} b={2} />
      {Add({ a: 1, b: 2 })}
    </div>
  );
}

export default Assignment4;
