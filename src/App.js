import Header from './components/Header'
import Home from './components/Home'
import Color from './components/Color'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="container">
      <Header/>

      <Switch>
      <Route exact path="/">
      <Home />
      </Route>

      <Route path="/color">
      <Color />
      </Route>

      </Switch>

    </div>
    </Router>
  );
}

export default App;
