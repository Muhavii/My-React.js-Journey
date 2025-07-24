function Fruits(){
    const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    return(
        <ul>
            {fruits.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default Fruits