import './style.css';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MovieDetail from './MovieDetail';
import {useState} from 'react';
import Login from './Login';
function App() {

  const [username, setUsername] = useState('');

  return (
    <Router>
      <div className="App">
        <Switch>
          
            <Route exact path="/">
              <Login setUsername={setUsername}/>
              {/* <Home /> */}
            </Route>
            <Route path="/home">
            <Navbar />
              <Home />
            </Route>
            <Route path="/detail/:id">
            <Navbar />
              <MovieDetail name={username} />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
