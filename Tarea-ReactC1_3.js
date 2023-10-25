export function UncontrolledCheckbox(props) {
    const [value, setValue] = React.useState(props.initialValue);
  
    return (
      <div className="checkbox">
        <label>{props.name}</label>
        <input
          type="checkbox"
          onChange={() => setValue(!value)}
          checked={value}
        />
      </div>
    );
  }
  export function CheckboxList(props) {
    return (
      <div>
        {Object.keys(props.items).map((key) => {
          return (
            <UncontrolledCheckbox name={key} initialValue={props.items[key]} />
          );
        })}
      </div>
    );
  }