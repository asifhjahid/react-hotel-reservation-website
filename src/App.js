// import './App.css';
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import Rooms from "./components/pages/Rooms";
import SingleRoom from "./components/pages/SingleRoom";
import Facilities from "./components/pages/Facilities";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import { RoomProvider } from "./context/Context";
import GlobalStyle from "./style/Global.styles";

function App() {
  return (
    <RoomProvider>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/" exact component={Rooms} />
          <Route path="/rooms/:slug" exact component={SingleRoom} />
          <Route path="/facilities" exact component={Facilities} />
          <Route path="/contact" exact component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router>
    </RoomProvider>
  );
}

export default App;
