import './App.css';
import PlayersPage from './components/PlayersPage';
import { Route, Switch } from 'react-router-dom';
import GamesPage from './components/GamesPage';


function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Gamer Project</h1>
      </div>

      <Switch>
        <Route exact path="/">
          <PlayersPage />
        </Route>

        <Route path="/players/:id">
          <GamesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
