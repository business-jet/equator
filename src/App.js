import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';
import HelloPage from './pages/HelloPage';
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
     <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/test" element={<TestPage />}/>
        {/* </Route><Route path="/test" element={<MainPage />}> */}
        <Route path="/hello" element={<HelloPage />}/>
     
      </Routes>
      
      </Provider>
      </div>
  );
}

export default App;
