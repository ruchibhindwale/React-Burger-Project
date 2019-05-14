import React, {useState} from 'react';
import Layout from './components/Layout/Layout';
import Backdrop from './components/UI/Backdrop/Backdrop';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
 const [state, updateState] = useState({
   displayBackdrop: false
 });

 const updateBackdropState = (value) => {
    updateState({
      displayBackdrop: value
    })
 }

  return (
    <div>
      <Backdrop show={state.displayBackdrop} click={() => updateBackdropState(false)} />
      <Layout>
        <BurgerBuilder toggleBackdrop={updateBackdropState} showBackdrop={state.displayBackdrop}/>
      </Layout>
    </div>
  );
}

export default App;
