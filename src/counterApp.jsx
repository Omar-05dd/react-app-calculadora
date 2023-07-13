import {  useState } from 'react'

import './CounterStyle.css';



function CounterApp () {

    const [ counter, setCounter] = useState(0);

    const NumberAdd = () => {
        setCounter( counter + 1);
    }
    const NumberRemove = () => {
        setCounter( counter - 1);
    }
    const Reset = () => {
        setCounter( 0 );
    }

    return (
        <>
            <div id='containerCounter'>
                <span>

                    <h1>
                        <strong>{ counter }</strong>
                    </h1>

                </span>

                <h3>Contador</h3>

            </div>

            <div id="containerButton" >

                <button onClick={NumberRemove}>-1</button>

                <button onClick={Reset}>Reset</button>

                <button  onClick={NumberAdd}>+1</button>
            </div>


        </>
    );
}

export default CounterApp;