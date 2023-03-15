import { Fragment, useEffect, useState } from "react";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  const [data, setData] = useState("");

  const dataFhead = (value) => {
    setData(value);
  };

  useEffect(() => {
    props.getDataValue(data);
  });

  return (
    <Fragment>
      <MainHeader
        clearTodo={props.clearTodo}
        listOfTodos={props.todos}
        getDataValue={dataFhead}
        darkMode={props.dMode}
        toggleMode={props.toggleMode}
      />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
