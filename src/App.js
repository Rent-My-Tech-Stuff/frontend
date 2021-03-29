import {Route} from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {initialState, reducer} from './reducer';

import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import OwnerHome from './components/OwnerHome';
import RenterHome from './components/RenterHome';
import ItemPage from './components/ItemPage';

import './App.css';

const store = createStore(reducer, initialState, applyMiddleware(thunk, logger));

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
