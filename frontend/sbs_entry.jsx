import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as utils from './util/project_api_util';

import { createPledge, updatePledge, deletePledge } from './util/pledge_api_util';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.createProject = utils.createProject;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
