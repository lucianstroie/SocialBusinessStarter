import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';
import ProjectsReducer from './projects_reducer';
import PledgeReducer from './pledge_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  project: ProjectReducer,
  projects: ProjectsReducer,
  pledge: PledgeReducer
});

export default RootReducer;
