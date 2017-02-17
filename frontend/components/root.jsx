import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import ProjectIndexContainer from './projects/project_index_container';

const Root = ({ store }) => {


  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
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
          <Route path="/projects/new"/>
          <Route path="/projects/:projectId"/>
          <Route path="/projects/:projectId/edit"/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
