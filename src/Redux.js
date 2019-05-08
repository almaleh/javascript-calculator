import { createStore, combineReducers } from 'redux';

// Redux


const UPDATE_DISPLAY = 'UPDATE_DISPLAY';
const UPDATE_CURRENT = 'UPDATE_CURRENT';
const UPDATE_LEFT = 'UPDATE_LEFT';
const UPDATE_RIGHT = 'UPDATE_RIGHT';
const UPDATE_TOTAL = 'UPDATE_TOTAL';
const UPDATE_OPERATION = 'UPDATE_OPERATION';
const defaultState = {
    display: 0,
    current: 0,
    left: 0,
    right: 0,
    total: 0,
    operation: undefined
}

const reducer = (state = defaultState, action) => {
    // console.log(JSON.stringify(state));
    switch (action.type) {
        case UPDATE_DISPLAY:
        {
            let newState = { display: action.display }
            let mergedState = Object.assign({}, state, newState)
            return mergedState;
        }
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
        case UPDATE_TOTAL:
        {
            let newState = { total: action.total }
            let mergedState = Object.assign({}, state, newState)
            return mergedState;
        }
        case UPDATE_OPERATION:
        {
            let newState = { operation: action.operation }
            let mergedState = Object.assign({}, state, newState)
            return mergedState;
        }
        default: return state;
    }
}


const rootReducer = combineReducers({
    reducer
})

const store = createStore(rootReducer);

const updateDisplay = (display) => {
    return {
        type: UPDATE_DISPLAY,
        display
    }
}

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

const updateTotal = (total) => {
    return {
        type: UPDATE_TOTAL,
        total
    }
}

const updateOperation = (operation) => {
    return {
        type: UPDATE_OPERATION,
        operation
    }
}

// React-Redux

const mapStateToProps = (state) => {
    return {
        display: state.reducer.display,
        current: state.reducer.current,
        left: state.reducer.left,
        right: state.reducer.right,
        total: state.reducer.total,
        operation: state.reducer.operation
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDisplay: (newDisplay) => {
            dispatch(updateDisplay(newDisplay));
        },
        updateCurrent: (newCurrent) => {
            dispatch(updateCurrent(newCurrent));
        },
        updateLeft: (newLeft) => {
            dispatch(updateLeft(newLeft));
        },
        updateRight: (newRight) => {
            dispatch(updateRight(newRight));
        },
        updateTotal: (newTotal) => {
            dispatch(updateTotal(newTotal));
        },
        updateOperation: (newOperation) => {
            dispatch(updateOperation(newOperation));
        }
    }
}

export { store, mapStateToProps, mapDispatchToProps };