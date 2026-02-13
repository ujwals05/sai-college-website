import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import AboutUs from './pages/about-us/AboutUs';
import AboutHome from './pages/about-us/AboutHome';
import AboutLayout from './pages/about-us/AboutLayout';
import History from './pages/about-us/History';
import Founders from './pages/about-us/Founders';
import VisionMission from './pages/about-us/VisionMission';
import ChairmanMessage from './pages/about-us/ChairmanMessage';
import PrincipalMessage from './pages/about-us/PrincipalMessage';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Infrastructure from './pages/Infrastructure';
import Academics from './pages/Academics';
import Library from './pages/Library';
import StudentWelfare from './pages/StudentWelfare';
import NonAcademics from './pages/NonAcademics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutLayout />}>
            <Route index element={<AboutHome />} />
            <Route path="history" element={<History />} />
            <Route path="founders" element={<Founders />} />
            <Route path="vision-mission" element={<VisionMission />} />
            <Route path="chairman-message" element={<ChairmanMessage />} />
            <Route path="principal-message" element={<PrincipalMessage />} />
          </Route>
          <Route path="academics" element={<Academics />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="library" element={<Library />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="student-welfare" element={<StudentWelfare />} />
          <Route path="non-academics" element={<NonAcademics />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
