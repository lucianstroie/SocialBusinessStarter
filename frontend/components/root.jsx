import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import ProjectIndexContainer from './projects/project_index_container';
import ProjectFormContainer from './projects/project_form_container';
import ProjectShowContainer from './projects/project_show_container';
import PledgeFormContainer from './pledges/pledge_form_container';
import PledgeEditContainer from './pledges/pledge_edit_container';
import GivingConfirmation from './givings/giving_confirmation';


const Root = ({ store }) => {


  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={ProjectIndexContainer} />
          <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
          <Route path="/projects" component={ ProjectIndexContainer }/>
          <Route path="/projects/new" component={ ProjectFormContainer } onEnter={_redirectIfNotLoggedIn}/>
          <Route path="/projects/:projectId" component={ ProjectShowContainer }/>
          <Route path="/projects/:projectId/edit" component={ ProjectFormContainer } />
          <Route path="/projects/:projectId/addpledge" component={ PledgeFormContainer }/>
          <Route path="/pledges/:pledgeId/edit" component={ PledgeEditContainer }/>
          <Route path="/pledges/:pledgeId/confirm" component={ GivingConfirmation } onEnter={_redirectIfNotLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
