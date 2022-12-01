import React,{useState} from "react";
const Counter = () => {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1)
        console.log(" Increment ⚡");
    }
    return (
        <div className="flex">
            <h2> Counter: {count} </h2>
            <div>
                <button className="btn" onClick={increment} >Increment</button>
                <button className="btn">Decrement</button>
            </div>

        </div>
    )
}
export default Counter;