import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import BlogPost from './components/BlogPost/BlogPost';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavBar/>
          <Header/>
        </Route>
        <Route path="/home">
        <NavBar/>
        <Header/>
        </Route>
        <Route path="/projects">
          <NavBar/>
          <Projects/>
        </Route>
        <Route path="/blog">
          <NavBar/>
          <BlogPost/>
        </Route>
        <Route path="/about">
          <NavBar/>
          <About/>
        </Route>
      </Switch>
    </Router> 
    
  );
}

export default App;
