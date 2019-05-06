import { createStore } from 'redux';

// Redux

const UPDATE = 'UPDATE';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case UPDATE: return action.newState;
        default: return state;
    }
}

const store = createStore(reducer);

const updateState = (newState) => {
    return {
        type: UPDATE,
        newState
    }
}

// React-Redux

const mapStateToProps = (state) => {
    return { currentState: state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateState: (newState) => {
            dispatch(updateState(newState));
        }
    }
}

export { store, mapStateToProps, mapDispatchToProps };