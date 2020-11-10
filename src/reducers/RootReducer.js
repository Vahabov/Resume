import { combineReducers } from 'redux';
import Resume from './Resume';
import Portfolio from './Portfolio';

export default combineReducers({
    resume: Resume,
    portfolio: Portfolio
})