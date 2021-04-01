import {Route} from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from 'redux-persist/lib/integration/react';

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

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, initialState, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
