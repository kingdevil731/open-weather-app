import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import StepOne from './components/setupSteps/StepOne';
import StepTwo from './components/setupSteps/StepTwo';
import MainApp from './pages/MainApp';
import Welcome from './pages/Welcome';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate replace to='/welcome' />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/welcome/step1' element={<StepOne />} />
          <Route path='/welcome/step2' element={<StepTwo />} />
          <Route path='/app' element={<MainApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
