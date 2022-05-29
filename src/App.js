import React, { useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStatevalue } from "./context/StateProvider";
import Payment from "./components/Payment";


function App() {

const[{basket} , dispatch] = useStatevalue();

  useEffect(() => {
    onAuthStateChanged(auth , (User)=>{
      console.log('the user is logged in : ' , User);
      if(User){
        dispatch({
          type:'SET_USER',
          user:User
        })
// logged in
      }else{
      
        dispatch({
          type:'SET_USER',
          user:null
        })
      
        // logged out
      }
    })
  }, [])



  return (
    <BrowserRouter>

      <div className="app">
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/login" element={<>  <Login /> </>} />
          <Route path="/payment" element={<> <Header /><Payment /></>} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}


export default App;
