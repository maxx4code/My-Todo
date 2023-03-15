import { Fragment } from "react";
import "./ClearButton.css";

const ClearButton = (props) => {
  return (
    <Fragment>
      <button className="button" onClick={props.clearTodo}>
        Clear All
        {/* <span className="badge">{props.todoList.length}</span> */}
      </button>
    </Fragment>
  );
};

export default ClearButton;
