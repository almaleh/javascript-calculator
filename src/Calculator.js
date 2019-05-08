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

    generateDigits() {
        let dict = {
            'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
            'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
        };

        let digitButtons = [];
        for (let key in dict) {
            let digit = dict[key];
            let button = <Digit id={key} number={key} digit={digit} handleClick={(event) => this.handleClick(event, digit)} />
            digitButtons.push(button);
        }

        return digitButtons
    }

    updateDisplayTo(value) {
        this.setState({
            display: value
        })
    }

    handleClick(event, value) {
        let currentValue = this.props.current == undefined ? 0 : this.props.current;
        let newValue = currentValue == 0 ? value.toString() : currentValue + value.toString();

        this.props.updateCurrent(newValue);
        this.updateDisplayTo(newValue);
    }

    clear() {
        this.props.clear();
        this.updateDisplayTo(0);
    }

    divide() {
        this.pushToLeft()
        this.props.updateOperation('divide');
    }

    multiply() {
        this.pushToLeft()
        this.props.updateOperation('multiply');
    }

    subtract() {
        this.pushToLeft()
        this.props.updateOperation('subtract');
    }

    add() {
        this.pushToLeft()
        this.props.updateOperation('add');
    }

    pushToLeft() {
        if (this.props.current != undefined) {
            if (this.props.operation == undefined) {
                let lastValue = this.props.current;
                this.props.updateLeft(lastValue);
                this.props.updateCurrent(undefined);
            } else {
                this.equals();
            }
        }
    }

    equals() {
        // exit early if no left value
        if (this.props.left == undefined) {
            return;
        }

        let right = 0;

        if (this.props.current != undefined) {
            // save 'right' for consecutive equals
            this.props.updateRight(this.props.current);
            right = Number(this.props.current);
        } else {
            right = Number(this.props.right);
        }

        let left = Number(this.props.left);
        let operation = this.props.operation;
        let result = this.performOperation(operation, left, right);

        this.props.updateLeft(result);
        this.props.updateCurrent(undefined);

        // this prevents us from using equals consecutively, but is necessary to pass the tests
        this.props.updateOperation(undefined);

        this.updateDisplayTo(result);
    }

    decimal() {
        let current = this.props.current; 
        if (current != undefined && current.indexOf('.') < 0) {
            let newCurrent = current + '.';
            this.props.updateCurrent(newCurrent);
            this.updateDisplayTo(newCurrent);
        }
    }

    performOperation(operation, left, right) {
        switch (operation) {
            case 'add': return left + right;
            case 'subtract': return left - right;
            case 'multiply': return left * right;
            case 'divide': return left / right;
            default: return left;
        }
    }

    render() {
        return (
            <div className="calculator">
                <p>React & Redux Calculator</p>
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