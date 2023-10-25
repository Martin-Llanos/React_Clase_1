import { CheckboxListWithState } from "./tarea/Tarea4.js";

ReactDOM.render(
    <CheckboxListWithState items={{ uno: false, dos: true, tres: false }} />,
    document.getElementById("react-app")
  );