import './App.css';
import PlayersPage from './components/PlayersPage';
import { Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      My App

      <Switch>
        <Route exact path="/">
          <PlayersPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
