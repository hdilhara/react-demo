import React, { Component } from 'react';
import Counter from './Counter';
class ControlledComponent extends Component {
    state = { value: 555 }

    changeNumberHandeller = () => {
        const value = Math.floor(Math.random() * 1000);
        this.setState({ value });
    }

    render() {
        return (
            <Counter
                value={this.state.value}
                changeNumber={this.changeNumberHandeller} />
        );
    }


}

export default ControlledComponent;