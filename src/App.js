import Registermenu from './components/registermenu';
import Login from './components/login';
import Dadospessoais from './components/dadospessoais';
import List from './components/list';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registermenu">
          <Registermenu />
        </Route>
        <Route path="/dadospessoais">
          <Dadospessoais />
        </Route>
        <Route path="/list">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}
