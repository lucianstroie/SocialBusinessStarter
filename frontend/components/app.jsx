import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import ProjectIndexContainer from './projects/project_index_container';

const App = ({ children }) => (
  <div>
    <GreetingContainer />
    { children }
  </div>
);


export default App;
