import MyList from "./MyList.js";

function MyContainer(){
    const listId = ['1', '2', '3'];
    return (
        <>
        <h1>List items:</h1>
        <MyList />
      </>
    )
}

export default MyContainer