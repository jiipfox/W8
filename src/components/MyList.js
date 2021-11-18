function MyList(props) {
    console.log("My list function");
    const items = props.items;
    const header = props.header;
    console.log(items);
     const lis  = items.map((item) =>
        //<li>{item.id} = {item.text}</li>
        <li key ={item.id.toString()}>{item.text}</li>);
    return  (
      <div>
      <h1>{header}</h1>
      <ol>
        {lis}
      </ol>
      </div>);
  }

  export default MyList