import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import LeaderboardPage from './Pages/LeaderboardPage/LeaderboardPage';

function App() {
  return (
    <Routes >
      <Route path='/' element={<LandingPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/signup' element={<SignupPage />}/>
      <Route path='/ratings' element={<LeaderboardPage />} />
      <Route path='/*' element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;
