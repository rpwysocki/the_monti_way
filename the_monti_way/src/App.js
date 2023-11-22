import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation'

// Pages
import Contact from './pages/Contact';
import About from './pages/About';
import Staff from './pages/Staff';
import Summer from './pages/Summer';


const App = () => {
  return (
    <main>
      <div>
        <Header />
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/aboutme" element={<AboutMe />}/>
        </Routes>
        <Footer />
      </div>
    </main>
  );
};

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
