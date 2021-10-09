// import './App.css';
import Error from './components/pages/Error';
import Home from './components/pages/Home';
import Rooms from './components/pages/Rooms';
import SingleRoom from './components/pages/SingleRoom';
import Services from './components/pages/Services';
import About from './components/pages/About';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nav from './components/Nav';
import './style.css'
import {RoomProvider} from './context/Context'


function App() {
  return (
    <RoomProvider>
     <Router>
       <Nav />
       <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/" exact component={Rooms} />
          <Route path="/rooms/:slug" exact component={SingleRoom} />
          <Route path="/services" exact component={Services} />
          <Route path="/about" exact component={About} />
          <Route component={Error} />
          
        
       </Switch>
     
     </Router>
    </RoomProvider>
  );
}

export default App;
