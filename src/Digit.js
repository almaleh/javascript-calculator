import React from 'react';

class Digit extends React.Component {
    constructor(props) {
        super(props); 
    }
    // TODO assign ID based on number
    render() {
        let number = this.props.number; 
        return (
            <button className="button" id={`digit-${number}`}>
                {number}
            </button>
        )
    }
}

export default Digit; 