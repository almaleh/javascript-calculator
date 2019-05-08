import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Redux';
import Digit from './Digit';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.clear = this.clear.bind(this)
        this.divide = this.divide.bind(this)
        this.multiply = this.multiply.bind(this)
        this.subtract = this.subtract.bind(this)
        this.add = this.add.bind(this)
        this.equals = this.equals.bind(this)
        this.decimal = this.decimal.bind(this)
    }

    componentWillReceiveProps(newProps) {
        console.log(JSON.stringify(newProps));
        this.setState({
            display: newProps.current
        })
    }

    generateDigits() {
        let dict = {
            'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
            'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
        };

        let digitButtons = []; 
        for (let key in dict) {
            let digit = dict[key]; 
            let button = <Digit id={key} number={key} digit={digit} handleClick={(event) => this.handleClick(event, digit)}/>
            digitButtons.push(button); 
        }
        
        return digitButtons
    }

    handleClick(event, value) {
        let currentValue = this.props.current; 
        let newValue = currentValue == 0 ? value.toString() : currentValue + value.toString(); 

        this.props.updateCurrent(newValue); 
    }

    clear() {
        this.props.updateTotal(1);
    }

    divide() {
        this.props.updateOperation('divide');
    }

    multiply() {
        this.props.updateOperation('multiply');
    }

    subtract() {
        this.props.updateOperation('subtract');
    }

    add() {
        this.props.updateOperation('add');
    }

    equals() {
        this.props.updateTotal(1);
    }

    decimal() {
        console.log(1)
    }

    render() {
        return (
            <div className="calculator">
                <p>React Calculator</p>
                <div className="button-grid">
                    <div id="display">{this.state.display}</div>
                    {this.generateDigits()}
                    <button className="button light-gray" id="clear" onClick={this.clear}>AC</button>
                    <button className="button light-gray" id="divide" onClick={this.divide}>/</button>
                    <button className="button orange" id="multiply" onClick={this.multiply}>X</button>
                    <button className="button orange" id="subtract" onClick={this.subtract}>-</button>
                    <button className="button orange" id="add" onClick={this.add}>+</button>
                    <button className="button orange" id="equals" onClick={this.equals}>=</button>
                    <button className="button light-gray" id="decimal" onClick={this.decimal}>.</button>
                </div>
            </div>
        )
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Calculator);


export default Container; 