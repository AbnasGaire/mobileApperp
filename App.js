import React from 'react';
import Navigators from "./src/navigators"
import Store from './src/store';
import {Provider} from 'react-redux';
const App= () =>{
  return (
    <Provider store={Store}>
        <Navigators />
    </Provider>
  );
};
export default App;
