export function MatchNombre(props) {
    const [value, setValue] = React.useState();
  
    return (
      <div>
        <input
          onChange={() => setValue(event.target.value)}
          className={value == props.nombre ? "input-match" : "input"}
        />
        <p>{value}</p>
      </div>
    );
  }

  export function PasswordInput(props) {
    const [value, setValue] = React.useState("");
  
    return (
      <div>
        <input
          onChange={() => setValue(event.target.value)}
          className={value.length < props.minLength ? "input-match" : "input"}
          type="password"
        />
        <p>{value}</p>
      </div>
    );
  }
  export function ValidationInput(props) {
    const [value, setValue] = React.useState("_");
  
    return (
      <div>
        <input
          onChange={() => setValue(event.target.value)}
          className={props.validation(value) ? "input" : "input-match"}
          type={props.isPassword ? "password" : "text"}
        />
      </div>
    );
  }