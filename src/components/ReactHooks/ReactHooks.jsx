import React, { Component } from 'react';
import Counter from './Counter';

class ReactHooks extends Component {
    state = {
        countValue: 5,
        textValue: '',
        placeholderValue: 'Enter Text Here'
    }
    render() {
        return (
            <Counter countValue={this.state.countValue} textValue={this.state.textValue} resetInput="true" placeholderValue={this.state.placeholderValue} />
        );
    }
}

export default ReactHooks;