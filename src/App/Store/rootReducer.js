import {combineReducers} from 'redux';
import testReducer from '../../Components/Sandbox/testReducer';
import eventReducer from '../../Components/Event/eventReducer';
import modalReducer from '../Common/Modals/modalReducer';

const rootReducer = combineReducers ({
    test: testReducer,
    event: eventReducer,
    modals: modalReducer,
})

export default rootReducer;