import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottless = () => {
    // here we will load the data

    // 1. we need to declare the useState
    const [bottles, setBottles] = useState([]);

    // 2. need to load the data by useEffect and by fetch
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])


    return (
        <div>
            {/* here we check the bottles working or not */}
            <h3>Bottles: {bottles.length}</h3>

            <div className="bottle-container">
                {/* 3. here we sent the bottle data one by one in bottle jsx file to show every bottle */}
                {
                    // here we use map to loop the main array
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottless;