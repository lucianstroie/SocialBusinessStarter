import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';
import ProjectsReducer from './projects_reducer';
import PledgeReducer from './pledge_reducer';
import GivingReducer from './giving_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  project: ProjectReducer,
  projects: ProjectsReducer,
  pledge: PledgeReducer,
  giving: GivingReducer  
});

export default RootReducer;
