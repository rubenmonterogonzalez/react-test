import {combineReducers} from 'redux';
import testReducer from '../../Components/Sandbox/testReducer';
import eventReducer from '../../Components/Event/eventReducer';

const rootReducer = combineReducers ({
    test: testReducer,
    event: eventReducer
})

export default rootReducer;