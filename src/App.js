import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About'
import Blog from './Components/Blog'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route  path='/' element ={<Home />}/>
          <Route path='/about' element = {<About />} />
          <Route path='/blog' element ={<Blog />}/>
          <Route path='/portfolio' element ={<Portfolio />}/>
          <Route path='/contact' element ={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
