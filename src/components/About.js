import {useState, useEffect} from 'react'


function About() {
/*    const [dataType, setDataType] = useState("posts")
    const [data, setData] = useState("")

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
        .then(response => response.json())
        .then(json => setData(JSON.stringify(json)))
    }, [dataType])*/

    return (
        <div>
            <h2>About</h2>
            <p>Text...</p>
            <p>More text..</p>
        </div>
    )
}

export default About
