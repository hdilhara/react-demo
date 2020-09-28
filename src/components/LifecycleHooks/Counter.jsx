import React, { Component, Fragment } from 'react';
import './Counter.css';

// const ErrorComponnent = () => <div>{this.props.ignor}</div>

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            message: null,
            hasError: false,
            loading: true
        }

        console.log('[Counter.js] constructor called!');
    }

    /** This method will usefull when we want to transfer values from props to state */
    static getDerivedStateFromProps(props, state) {
        let val = props.value;
        if (val !== 0 && (val % 5) === 0)
            return { message: 'Congratulations!' }
        else
            return { message: null }
    }

    render() {
        console.log('[Counter.js] render() called!');

        if (this.state.hasError) {
            return <h1 style={{ color: 'red' }}>Something went wrong!</h1>
        }

        if (this.state.loading)
            return (
                <Fragment>
                    <div className="loading">
                        <div className="lds-circle"><div></div></div>
                    </div>
                </Fragment>
            );

        return (
            <div>
                <h4>Counter</h4>
                <p>{this.props.value}</p>
                <button className="btn btn-sm btn-outline-dark" onClick={this.props.incrementValue}>
                    Increment Value
                </button>
                <br /><br />
                <div className="alert alert-success">
                    {this.state.message}
                </div>
                {/* <ErrorComponnent /> */}
            </div>
        );
    }

    componentWillUnmount() {
        console.log('[Counter.js] componentWillUnmount called!');
    }

    componentDidMount() {
        console.log('[Counter.js] componentDidMount called!');
        setTimeout(() => {
            //Get Data From server!
            this.setState({ loading: false });
        }, 1000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Counter.js] shouldComponentUpdate called!');
        console.log('--next state--', nextState);
        console.log('--next props--', nextProps);
        /** We can prevent updating the component if we want by returning false */
        // if (nextState.value >= 3)
        //     return false;
        return true;/**This is default value */
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('[Counter.js] componentDidUpdate called!');
        console.log('--PrevProps ', prevProps);
        console.log('--PrevState ', prevState);
    }

    componentDidCatch() {
        this.setState({ hasError: true });
        console.log('This is Component DId catch!');
    }

}

export default Counter;