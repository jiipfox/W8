function MyList(props) {
    console.log("My list function");
    const items = props.items;
    const header = props.hearer;
    console.log(items);
     const lis  = items.map((item) =>
        //<li>{item.id} = {item.text}</li>
        <li>{item.text}</li>);
    return  (<ul>{lis}</ul>);
  }

  export default MyList