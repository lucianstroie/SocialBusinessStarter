import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  project: ProjectReducer
});

export default RootReducer;
