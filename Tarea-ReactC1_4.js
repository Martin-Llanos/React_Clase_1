export function ControlledCheckbox(props) {
    return (
      <div>
        <label>{props.name}</label>
        <input type="checkbox" checked={props.value} onChange={props.onChange} />
      </div>
    );
  }
  export function CheckboxListWithState(props) {
    const [items, setItems] = React.useState(props.items);
  
    return Object.entries(items).map((item) => {
      return (
        <ControlledCheckbox
          key={item[0]}
          name={item[0]}
          value={item[1]}
          onChange={(e) => {
            const newItems = { ...items };
            newItems[item[0]] = e.target.checked;
            setItems(newItems);
          }}
        />
      );
    });
  }