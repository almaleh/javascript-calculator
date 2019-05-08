import { createStore, combineReducers } from 'redux';

// Redux

const UPDATE_CURRENT = 'UPDATE_CURRENT';
const UPDATE_LEFT = 'UPDATE_LEFT';
const UPDATE_RIGHT = 'UPDATE_RIGHT';
const UPDATE_OPERATION = 'UPDATE_OPERATION';
const CLEAR = 'CLEAR';
const defaultState = {
    current: 0,
    left: undefined,
    right: undefined,
    operation: undefined
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT:
        {
            let newState = { current: action.current }
            let mergedState = Object.assign({}, state, newState)
            return mergedState;
        }
        case UPDATE_LEFT:
        {
            let newState = { left: action.left }
            let mergedState = Object.assign({}, state, newState)
            return mergedState;
        }
        case UPDATE_RIGHT:
        {
            let newState = { right: action.right }
            let mergedState = Object.assign({}, state, newState)
            return mergedState;
        }
        case UPDATE_OPERATION:
        {
            let newState = { operation: action.operation }
            let mergedState = Object.assign({}, state, newState)
            return mergedState;
        }
        case CLEAR:
        {
            return defaultState;
        }
        default: return state;
    }
}


const rootReducer = combineReducers({
    reducer
})

const store = createStore(rootReducer);

const updateCurrent = (current) => {
    return {
        type: UPDATE_CURRENT,
        current
    }
}

const updateLeft = (left) => {
    return {
        type: UPDATE_LEFT,
        left
    }
}

const updateRight = (right) => {
    return {
        type: UPDATE_RIGHT,
        right
    }
}

const updateOperation = (operation) => {
    return {
        type: UPDATE_OPERATION,
        operation
    }
}

const clear = () => {
    return {
        type: CLEAR,
    }
}

// React-Redux

const mapStateToProps = (state) => {
    return {
        current: state.reducer.current,
        left: state.reducer.left,
        right: state.reducer.right,
        operation: state.reducer.operation
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCurrent: (newCurrent) => {
            dispatch(updateCurrent(newCurrent));
        },
        updateLeft: (newLeft) => {
            dispatch(updateLeft(newLeft));
        },
        updateRight: (newRight) => {
            dispatch(updateRight(newRight));
        },
        updateOperation: (newOperation) => {
            dispatch(updateOperation(newOperation));
        },
        clear: () => {
            dispatch(clear());
        }
    }
}

export { store, mapStateToProps, mapDispatchToProps };