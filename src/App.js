import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import Home from './pages/Rewards/Rewards.js';
import Dashboard from './pages/Dashboard';
import RewardsHistory from './pages/RewardsHistory';

function App() {
  return (
    <>
      <Router>      
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/rewardsHistory' element={<RewardsHistory/>} />
          <Route path='/dashBoard' element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
