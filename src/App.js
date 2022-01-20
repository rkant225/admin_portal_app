import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Dashboard from './Components/Dashboard/Dashboard';
import Setting from './Components/Setting/Setting';
import Customer from './Components/Customer/Customer';
import Help from './Components/Help/Help';
import Password from './Components/Password/Password';
import Signout from './Components/Signout/Signout';
import Message from './Components/Message/Message';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='setting' element={<Setting/>}/>
          <Route path='customer' element={<Customer/>}/>
          <Route path='help' element={<Help/>}/>
          <Route path='password' element={<Password/>}/>
          <Route path='message' element={<Message/>}/>
          <Route path='signout' element={<Signout/>}/>
        </Route> 
      </Routes>
    </div>
  );
}

export default App;
