import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyNav from './components/Navbar';
import {
    Contact,
    Custom404,
    Home,
    ProjectGallery,
    About,
} from './components/Pages';
import './App.css';

// basename={import.meta.env.DEV ? '/' : '/example_one/'}
//  "homepage": "https://JohnJoseph2019.github.io/example_one",

function App() {
    return (
        <Router basename={import.meta.env.DEV ? '/' : '/example_one/'}>
            <MyNav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/portfolio' element={<ProjectGallery />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/404' element={<Custom404 />} />
            </Routes>
        </Router>
    );
}

export default App;
