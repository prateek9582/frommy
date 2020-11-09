import logo from './logo.svg';
import './App.css';
import Index from './components/index';
import Register from './components/register';
import Software from './components/software';
import Getstarted from './components/getstarted';
import Dashboard from './components/CRM/dashboard';
import {Switch , Route} from 'react-router-dom';
import './assets/styles/buo-btn.scss';
import './assets/styles/buo-entity.scss';
function App() {
  return (
    <Switch>
      <Route path="/" exact component={Index}></Route>
      <Route path="/register" exact component={Register}></Route>
      <Route path="/software" exact component={Software}></Route>
      <Route path="/getstarted" exact component={Getstarted}></Route>
      <Route path="/dashboard" exact component={Dashboard}></Route>
    </Switch>
    
  );
}

export default App;
