import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Redux';
import Digit from './Digit';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            display: 0
        }
    }

    handleClick(event) {
        let current = this.props.currentState;
        console.log(current);
        this.props.updateState(current + 1);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            display: newProps.currentState
        })
    }

    generateDigits() {
        let digits = [...Array(10).keys()];
        let digitButtons = digits.map((digit, index) => {
            return (
                <Digit id={index} number={digit} />
            )
        })
        return digitButtons
    }

    render() {
        return (
            <div className="calculator">
                <p onClick={this.handleClick}>This is a calc test</p>
                <div className="button-grid">
                    <div id="display">{this.state.display}</div>
                    {this.generateDigits()}
                    <button className="button" id="AC">AC</button>
                    <button className="button" id="division">/</button>
                    <button className="button" id="multiplication">X</button>
                    <button className="button" id="minus">-</button>
                    <button className="button" id="plus">+</button>
                    <button className="button" id="equal">=</button>
                    <button className="button" id="dot">.</button>
                </div>
            </div>
        )
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Calculator);


export default Container; 