import React, { useEffect, useState } from 'react';
import './Counter.css';
import useTitleChange from '../../CustomHooks/useTitleChange';

const Counter = function (props) {

    const [count, setCount] = useState(props.countValue); //We use array destucturing to get Values here
    /**We cannot put hooks inside conditional statements or loops */
    // if (true)
    const [text, setText] = useState(props.textValue);
    const [resetInput, setInputField] = useState(props.resetInput);

    useEffect(() => { document.getElementById('textField').value = '' }, [resetInput]);

    /** Second argument */
    useEffect(() => { console.log('count changes') }, [count]);
    useEffect(() => { console.log('text changes') }, [text]);

    /** Custom Hooks */
    useTitleChange(text, text);

    return (
        <div>
            <div>
                <h4>Counter</h4>
                <h5>{count}</h5>
                <button className="btn btn-sm btn-outline-dark" onClick={() => setCount(count + 1)}>
                    Increment
                </button>
                <button className="btn btn-sm btn-outline-dark" onClick={() => setCount(count - 1)}>
                    Decrement
                </button>
                <br />
                <button className="btn btn-sm btn-outline-warning" onClick={() => setCount(props.countValue)}>
                    Reset
                </button>
            </div>
            <div>
                <h4>Two-Way Binding</h4>
                <input type="text" name="" id="textField" onChange={(q) => setText(q.target.value)} placeholder={props.placeholderValue} />
                <h5>{(text === 'Enter Text Here') ? null : text}</h5>
                <button className="btn btn-sm btn-outline-warning" onClick={() => { setText(props.textValue); setInputField(!resetInput) }}>
                    Reset
                </button>
            </div>
        </div>
    );

}

export default Counter;