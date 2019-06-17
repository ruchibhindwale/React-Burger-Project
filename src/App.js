import React, {useState} from 'react';
import Layout from './components/Layout/Layout';
import Backdrop from './components/UI/Backdrop/Backdrop';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route } from 'react-router-dom';

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
        <Route path='/build-your-burger' render={(props) => <BurgerBuilder {...props} toggleBackdrop={updateBackdropState} showBackdrop={state.displayBackdrop} />} />
        <Route path='/checkout' component={Checkout} />
        <Route path ='/' exact render={(props) => <BurgerBuilder {...props} toggleBackdrop={updateBackdropState} showBackdrop={state.displayBackdrop} />} />
        {/*<BurgerBuilder toggleBackdrop={updateBackdropState} showBackdrop={state.displayBackdrop}/>*/}
      </Layout>
    </div>
  );
}

export default App;
