import React, {useState,useEffect} from 'react'
import './App.css';
import { Switch,Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import { ShopPage } from './pages/shoppage/ShopPage';
import { Header } from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase.utils';

function App() {
  const [currentUser,setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
       
    })

    return () => {unsubscribeFromAuth()};
  },[currentUser])
  return (
    <div>
      <Header currentUser={currentUser}/> 
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
