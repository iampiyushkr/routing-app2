import {Link,Route,Switch } from "react-router-dom"
import Dash from "./components/Dashboard";
import Setting from "./components/Setting";
import Login from "./components/loging";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes"
import './App.css';


function App() {
  return (
    <div className="App">
      <Link to="/dashboard">Dashboard</Link>
        <Link to="/setting">Setting</Link>
        <Link to="/login">Login</Link>
      <Switch>
        
        <Route exact path="/login">
          <Login/>
        </Route>
        <PrivateRoutes exact path="/dashboard">
            <Dash/>
        </PrivateRoutes>
         <PrivateRoutes exact path="/setting">
            <Setting/>
        </PrivateRoutes>
        </Switch>
    </div>
  );
}

export default App;
