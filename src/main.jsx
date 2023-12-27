import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import store from './redux/store.js'
import { BrowserRouter } from "react-router-dom";
import { useSnackbar ,SnackbarProvider} from 'notistack';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    {/* <SnackbarProvider maxSnack={3}> */}
      <App />
      {/* </SnackbarProvider> */}
    </BrowserRouter>
  </Provider>
)
