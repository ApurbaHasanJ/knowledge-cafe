import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';

function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <Container></Container>
      <Questions></Questions>
      {/* <ToastContainer></ToastContainer> */}
      
    </div>
  )
}

export default App
