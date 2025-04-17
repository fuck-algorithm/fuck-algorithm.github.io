import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProblemList from './components/ProblemList';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">
            <h1>Fuck Algorithm</h1>
          </div>
          <div className="nav-links">
            <Link to="/">首页</Link>
            <a href="#products">产品</a>
            <a href="#problems">题解</a>
            <a href="#about">关于我们</a>
            <a href="https://github.com/fuck-algorithm" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<ProblemList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://github.com/fuck-algorithm" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#products">产品</a>
            <a href="#problems">题解</a>
            <a href="#about">关于我们</a>
          </div>
          <p>© {new Date().getFullYear()} Fuck Algorithm. 保留所有权利。</p>
        </div>
      </footer>
    </div>
  );
};

export default App; 