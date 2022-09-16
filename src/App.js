import './App.css';
import React from 'react';
import App1 from './Navigation/App1';
import App2 from './State/App2';
import Hook1 from './Hooks/Hook1';
import Hook2 from './Hooks/Hook2';
import DataLoader from './Hooks/DataLoader';
import DataLoaderHook from './Hooks/DataLoaderHook';
import App3 from './redux/App3';
import App4 from './redux2/components/App4';
import App6 from './ProectContinents/App6';

function App() {

  return(
    <>
      <App6/>
    </>
  )
  
  
  
  
  
  
  
  // function clickHandler(){
  //   fetch('http://test1.ua', {
  //     method : 'POST',
  //     header : {
  //       'Content-Type' : 'application/x-www-form-urlencoded',
  //     },
  //     body : JSON.stringify({action : 1})
  //   })
  //   .then(response => response.text())
  //   .then(response => {
  //     console.log(response)
  //   })
  // }

  // return (
  //   <div className="container">
  //     <h1>itGid.info</h1>
  //     <button onClick={clickHandler}>Go</button>
  //   </div>
  // );
}

export default App;
