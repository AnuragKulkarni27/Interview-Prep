import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import LeaderboardPage from './Pages/LeaderboardPage/LeaderboardPage';
import FeedbackForm from './Pages/FeedbackForm/FeedbackForm';
import Dashboard from './User/Dashboard/Dashboard';
import Profile from './User/Profile/Profile';
import InterviewRoom from './Pages/InterviewRoom/InterviewRoom';
import Spinner from './User/Spinner';

function App() {
  return (
    <Routes >
      <Route path='/' element={<LandingPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/signup' element={<SignupPage />}/>
      <Route path='/user' element={<Profile />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/feedback-form' element={<FeedbackForm />} />
      <Route path='/room/:roomId' element={<InterviewRoom />}/>
      <Route path='/ratings' element={<LeaderboardPage />} />
      <Route path='/redirecting' element={<Spinner/>}/>
      <Route path='/*' element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;
