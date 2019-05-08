import React from 'react';

class Digit extends React.Component {
    constructor(props) {
        super(props); 
    }
    // TODO assign ID based on number
    render() {
        let number = this.props.number; 
        let digit = this.props.digit; 
        let handleClick = this.props.handleClick; 
        return (
            <button className="button light-gray" id={number} onClick={handleClick}>
                {digit}
            </button>
        )
    }
}

export default Digit; 