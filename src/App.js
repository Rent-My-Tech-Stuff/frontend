import {Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import OwnerHome from './components/OwnerHome';
import RenterHome from './components/RenterHome';
import ItemPage from './components/ItemPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path='/' component={SplashPage}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/owner-home' component={OwnerHome}/>
      <Route path='/renter-home' component={RenterHome}/>
      <Route path='/item' component={ItemPage}/>
    </div>
  );
}

export default App;
