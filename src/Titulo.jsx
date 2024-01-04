import React, { useState } from 'react';

const Titulo = (props) => {
    const [msj, setMsj] = useState("");

    return (
        <div>
            <h1>Hello {props.agregado + msj}!</h1>
            <button onClick={() => {setMsj(" (from changed state)")}}>Click me!</button>
        </div>
    );
};

export default Titulo;