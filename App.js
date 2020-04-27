import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {createStore , combineReducers} from 'redux';
import { Provider } from 'react-redux';

import  Mainprofile  from "./Screens/Mainprofile";
import  reducer  from "./store/reducer";



const rootReducers = combineReducers({
  reducer : reducer

});

const store = createStore(rootReducers);



const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  

  return(
    <Provider store={store} >
       
         <Mainprofile />
    

    </Provider>
 
  );
}
