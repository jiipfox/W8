import MyList from "./MyList.js";

function MyContainer(){
    const header = "Not so interesting list component";
    const listIds = [1, 2, 3];
    const texts = ["Item 1", "Item 2", "Item 3"];
    const items = [
        {id: "1", text: texts[0]},
        {id: "2", text: texts[1]},
        {id: "3", text: texts[2]}];
    
    return (
        <>
        <MyList header={header} items={items} />
      </>
    )
}

export default MyContainer