import React, { Component } from 'react';
import Counter from './Counter'

class LifecycleHooks extends Component {

    state = {
        show: true,
        value: 0
    }

    render() {
        return (
            <div>
                <h1>Life Cycle Hooks </h1>
                <button className="btn btn-sm btn-outline-dark"
                    onClick={() => this.setState({ show: !this.state.show })}>
                    {this.state.show ? 'Unmount Counter' : 'Mount Counter'}
                </button>
                {this.state.show ? <Counter value={this.state.value} show={this.state.show} incrementValue={this.incrementValue} /> : null}
            </div>
        );
    }

    incrementValue = () => {
        this.setState({ value: this.state.value + 1 });
    }

}

export default LifecycleHooks;