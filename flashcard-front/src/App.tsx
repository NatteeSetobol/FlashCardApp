import React from 'react';
import { CookiesProvider } from 'react-cookie';
import AppRoutes from './Router/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import NavBar from './components/navbar';
import store from './store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <ToastContainer />
	<Provider store={store}>
      <BrowserRouter>
		<CookiesProvider>
		<NavBar />
		<br/><br/>
		<AppRoutes />
		</CookiesProvider>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
