import { createStore, combineReducers } from 'redux';

// Redux


const UPDATE_DISPLAY = 'UPDATE_DISPLAY';
const UPDATE_TOTAL = 'UPDATE_TOTAL'

const displayReducer = (state = {}, action) => {
    // console.log(JSON.stringify(state));
    switch (action.type) {
        case UPDATE_DISPLAY:
            let newState = { display: action.display }
            let mergedState = Object.assign({}, state, newState)
            return mergedState;
        default: return state;
    }
}

const totalReducer = (state = {}, action) => {
    // console.log(JSON.stringify(state));
    switch (action.type) {
        case UPDATE_TOTAL: 
            let newState = { total: action.total }
            let mergedState = Object.assign({}, state, newState)
            return mergedState;
        default: return state;
    }
}

const rootReducer = combineReducers({
    displayReducer, 
    totalReducer
})

const store = createStore(rootReducer);

const updateDisplay = (display) => {
    return {
        type: UPDATE_DISPLAY,
        display
    }
}

const updateTotal = (total) => {
    return {
        type: UPDATE_TOTAL, 
        total
    }
}

// React-Redux

const mapStateToProps = (state) => {
    return { 
        display: state.displayReducer.display,
        total: state.totalReducer.total
     };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDisplay: (newDisplay) => {
            dispatch(updateDisplay(newDisplay));
        }, 
        updateTotal: (newTotal) => {
            dispatch(updateTotal(newTotal)); 
        }
    }
}

export { store, mapStateToProps, mapDispatchToProps };