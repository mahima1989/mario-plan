import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore,applyMiddleware,compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import {createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import registerServiceWorker from './registerServiceWorker';
// import { createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from './reducers/rootReducer'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
 //import fbConfig from './config/fbConfig'
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),

 
    reactReduxFirebase(fbConfig, {
      
      
      userProfile: "users" ,
      useFirestoreForProfile:true,
      
       attachAuthIsReady: true
      }),
      reduxFirestore(fbConfig) 
  )
 
 
  );


  // const rrfProps = {
  //   firebase,
  //   config: fbConfig,
  //   dispatch: store.dispatch,
  //   createFirestoreInstance
  // };


  
  // const rrfConfig = {
  //   userProfile: "users",
  //   useFirestoreForProfile: true,
  //   attachAuthIsReady: true,
  // }


store.firebaseAuthIsReady.then(()=>{


  ReactDOM.render(
    
    <Provider store={store}>
    
        <App />
      
      
      </Provider>,
  
  document.getElementById('root')
);






});



// reportWebVitals();
 
 
