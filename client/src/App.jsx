import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TopPage from './pages/TopPage.jsx';
import StudentPage from './pages/StudentPage.jsx';
import TeacherPage from './pages/TeacherPage.jsx';
import ThanksPage from './pages/ThanksPage.jsx';
import ReviewPage from './pages/ReviewPage.jsx';

function App() {

  return (
    <>
        <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<TopPage />}
                    />
                    <Route
                        path="/student"
                        element={<StudentPage />}
                    />
                    <Route
                        path="/teacher"
                        element={<TeacherPage />}
                    />
                    <Route
                        path="/thankyou"
                        element={<ThanksPage />}
                    />
                    <Route
                        path="/review"
                        element={<ReviewPage />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
          </Router>
      
    </>
  );
};

export default App;
