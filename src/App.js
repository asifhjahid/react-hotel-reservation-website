// import './App.css';
import Error from './components/pages/Error';
import Home from './components/pages/Home';
import Rooms from './components/pages/Rooms';
import SingleRoom from './components/pages/SingleRoom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nav from './components/Nav';
import './style.css'


function App() {
  return (
    <div className="App">
     <Router>
       <Nav />
       <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/" exact component={Rooms} />
          <Route path="/rooms/:slug" exact component={SingleRoom} />
          <Route component={Error} />
          
        
       </Switch>
     
     </Router>
    </div>
  );
}

export default App;
