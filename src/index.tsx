import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { createCtx } from "@reatom/core";
import { reatomContext } from "./npm-react";
import TableWithUseState from "./tableWithUseState";
import TableWithReatom from "./tableWithReatom";
import TableWithAtomization from "./tableWithAtomization";

const App = () => {
  const [state, setState] = React.useState("0");

  console.time("table mount");
  React.useEffect(() => console.timeEnd("table mount"));

  return (
    <>
      <select onChange={(e) => setState(e.currentTarget.value)}>
        <option value="0">useState</option>
        <option value="1">Reatom</option>
        <option value="2">Atomization</option>
      </select>
      <br />
      {
        [<TableWithUseState />, <TableWithReatom />, <TableWithAtomization />][
          state
        ]
      }
    </>
  );
};

const ctx = createCtx();

ReactDOM.createRoot(document.querySelector("#root")).render(
  <reatomContext.Provider value={ctx}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </reatomContext.Provider>
);
