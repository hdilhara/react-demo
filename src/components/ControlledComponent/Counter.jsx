import React, { Component } from 'react';

class Counter
    extends Component {
    state = {}
    render() {
        // const {  } = this.props;
        console.log(this.props)
        const { value, changeNumber } = this.props;/**Get value from here  */
        return (
            <div>
                <h1 >{value}</h1>
                <button
                    onClick={changeNumber}
                    className="btn btn-sm btn-outline-dark">
                    Change Number
                </button>
            </div>
        );
    }
}

export default Counter
    ;