
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';


import PersonalInfo from './PersonalInfo';
import ProfessionalObjective from './ProfObj';

const Routes: React.FC = () => {
  return (
    <Router>
      
        <Route exact path="/" component={PersonalInfo} />
        <Route path="/next" component={ProfessionalObjective} /> {/* Page suivante */}
      
    </Router>
  );
};

export default Routes;
