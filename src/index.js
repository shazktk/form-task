import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './App.css';
import 'antd/dist/reset.css';
import App from './App';
 import { Provider } from 'react-redux';
 import { createStore } from 'redux';


 const NEW_ENTRY = 'NEW_ENTRY'

 export const newEntry = (firstName, lastName, designation, email) => {
   return (
     {
       type: NEW_ENTRY,
       payload: {
         firstName,
         lastName,
         designation,
         email,
       },
     }
   )
 }

 const initialState = [];

 export const dataEntryReducer = (state = initialState, action) => {
      switch (action.type) {
        case NEW_ENTRY:
          return [...state, action.payload]
          break;
  
        default:
          return state;
          break;
    }
  }

 const store = createStore( dataEntryReducer );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
