import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutWrapper from './components/About/AboutWrapper';
import CoursesWrapper from './components/Courses/CoursesWrapper';
import TeamWrapper from './components/Team/TeamWrapper';
import BlogGrid from './components/Blog/BlogGrid';
import BlogDetail from './components/Blog/BlogDetail';
import ContactWrapper from './components/Contact/ContactWrapper';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<AboutWrapper />}/>
          <Route exact path="/courses" element={<CoursesWrapper />}/>
          <Route exact path="/team" element={<TeamWrapper />}/>
          <Route exact path="/bloggrid" element={<BlogGrid />}/>
          <Route exact path="/blogdetail" element={<BlogDetail />}/>
          <Route exact path="/contact" element={<ContactWrapper />}/>
      </Routes>
      <Footer/> 
    </Router>
  );
}

export default App;
