/*I have used following youtube channel as resource for this project. https://www.youtube.com/channel/UCnj8dl6NWgASf4kKZLuuwfw */
import React from 'react';
import LandingPage from './landingPage';

import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import { Switch, Route} from 'react-router-dom';

const Main = () =>
(
<Switch>
   <Route exact path="/" component={LandingPage} />

   <Route path="/contact" component={Contact} />
   <Route path="/projects" component={Projects} />
   <Route path="/resume" component={Resume} />
</Switch>
)

export default Main;
