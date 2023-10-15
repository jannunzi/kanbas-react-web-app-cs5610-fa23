import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import FunctionsAsParameters from "./FunctionsAsParameters";
import Counter from "./Counter";
import BooleanState from "./BooleanState";
import StringStateVariables from "./StringStateVariables";
import ObjectState from "./ObjectState";
import ArrayState from "./ArrayState";
import ParentStateComponent from "./ParentStateComponent";

function Assignment4() {
  return (
    <div>
      <h1>Assignment 4</h1>
      <ParentStateComponent />
      <ArrayState />
      <ObjectState />
      <StringStateVariables />
      <BooleanState />
      <Counter />
      <EventObject />
      <FunctionsAsParameters />
      <ClickEvent />
    </div>
  );
}

export default Assignment4;
